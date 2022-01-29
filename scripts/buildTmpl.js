'use strict';
let fs = require('fs');
let path = require('path');
let process = require('process');
const webpack = require('webpack');
let skpmConfig = require('../package.json').skpm;

const templateFile = 'ui/static/template.html'
const jqFile = 'resources/panel/assets/js/jquery-2.2.4.min.js'
const jsSrc = 'demo/src/index.js'       //同步更新在线js
const cssSrc = 'demo/src/index.css'       //同步更新在线css
const cssFiles = [
    'ui/static/normalize.css',
    'ui/static/meaxure.css'
];

const toDate = new Date();
const config = getUIConfig({});
const compiler = webpack(config);
const outputFileSystem = new webpack.MemoryOutputFileSystem()
compiler.outputFileSystem = outputFileSystem;
compiler.run((err, stats) => {
    if (stats.hasErrors()) {
        throw new Error(stats.toJson().errors);
    }
    let template = makeTemplate(outputFileSystem, __dirname + '/index.js');
    let templatePath = path.resolve(skpmConfig.main, 'Contents', 'Resources', 'template.html');
    fs.writeFileSync(templatePath, template);

    let onlineJS = makeTemplateJs(outputFileSystem, __dirname + '/index.js');
    fs.writeFileSync(jsSrc, onlineJS + "console.log('"+'onlineJS:'+toDate+"')");

});
function makeTemplateJs(wpfs, filename) {
    return wpfs.readFileSync(filename);
}

function makeTemplate(wpfs, filename) {
    let js = wpfs.readFileSync(filename);

    let css = Buffer.concat(
        cssFiles.map(c => {
            let file = path.resolve(process.cwd(), c);
            return fs.readFileSync(file);
        })
    ).toString().replace(/[\r\n]/g, "");
    fs.writeFileSync(cssSrc, css + "/* "+'onlineCss:'+toDate+" */");
    let jq = fs.readFileSync(jqFile);

    return eval('`' + fs.readFileSync(
        path.resolve(process.cwd(), templateFile)
    ) + '`');
}
function getCommonConfig() {
    let debug = !!process.env.DEBUG;
    return {
        mode: debug ? 'development' : 'production',
        // devtool: debug ? 'source-map' : undefined,
        module: {
            rules: [{
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        }
    }
}

function getUIConfig(config) {
    return Object.assign(getCommonConfig({}), {
        name: "index",
        entry: {
            index: './ui/index.ts',
        },
        output: {
            path: __dirname,
            filename: "index.js"
        },
    });
}