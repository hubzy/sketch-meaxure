'use strict';
let fs = require('fs');
let path = require('path');
let process = require('process');
const webpack = require('webpack');
let skpmConfig = require('../package.json').skpm;

const templateFile = 'ui/static/template.html'
const cssFiles = [
    'ui/static/normalize.css',
    'ui/static/meaxure.css'
];

const config = getUIConfig({});
const compiler = webpack(config);
const outputFileSystem = new webpack.MemoryOutputFileSystem()
compiler.outputFileSystem = outputFileSystem;
compiler.run((err, stats) => {
    if (stats.hasErrors()) {
        throw new Error(stats.toJson().errors);
    }
    let templateJs = makeTemplateJs(outputFileSystem, __dirname + '/index.js');
    let templateCss = makeTemplateCss(outputFileSystem, __dirname + '/index.js');
    let template = makeTemplate(outputFileSystem, __dirname + '/index.js');
    let templatePath = path.resolve(skpmConfig.main, 'Contents', 'Resources', 'template.html');
    fs.writeFileSync(templatePath, template);
    let templatePathJs = path.resolve(skpmConfig.main, 'Contents', 'Resources', 'template.js');
    fs.writeFileSync(templatePathJs, templateJs);
    let templatePathCss = path.resolve(skpmConfig.main, 'Contents', 'Resources', 'template.css');
    fs.writeFileSync(templatePathCss, templateCss);
});

function makeTemplateJs(wpfs, filename) {
    let js = wpfs.readFileSync(filename);
    return js
    let css = Buffer.concat(
        cssFiles.map(c => {
            let file = path.resolve(process.cwd(), c);
            return fs.readFileSync(file);
        })
    );
    return eval('`' + fs.readFileSync(
        path.resolve(process.cwd(), templateFile)
    )+ '`');
}
function makeTemplateCss(wpfs, filename) {
    let css = Buffer.concat(
        cssFiles.map(c => {
            let file = path.resolve(process.cwd(), c);
            return fs.readFileSync(file);
        })
    );
    return css
}
function makeTemplate(wpfs, filename) {
    return eval('`' + fs.readFileSync(
        path.resolve(process.cwd(), templateFile)
    )+ '`');
}

// //原来的
// function makeTemplate(wpfs, filename) {
//     let js = 'data:text/javascript;base64,' +
//         wpfs.readFileSync(filename).toString('base64');
//     let css = 'data:text/css;base64,' + Buffer.concat(
//         cssFiles.map(c => {
//             let file = path.resolve(process.cwd(), c);
//             return fs.readFileSync(file);
//         })
//     ).toString('base64');
//     return eval('`' + fs.readFileSync(
//         path.resolve(process.cwd(), templateFile)
//     ).toString() + '`');
// }

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