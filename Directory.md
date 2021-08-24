```
//欢迎提交代码优化(^_^)a
.
├── LICENSE
├── README.md
├── appcast.xml #(版本目录)
├── resources #(资源)
│   ├── i18n(语言)
│   └── panel(面板)
│       ├── assets(资产)
│       │   ├── css
│       │   │   ├── app.css
│       │   │   └── normalize.css
│       │   ├── img
│       │   └── js
│       │       ├── common.js
│       │       └── jquery-2.2.4.min.js
│       ├── export.html
│       ├── icons
│       ├── processing.html
│       ├── properties.html
│       ├── settings.html
│       └── toolbar.html
├── scripts(脚本)
│   ├── buildTmpl.js(构建脚本)
│   ├── playground.js
│   ├── sketchRunScript.sh
│   └── sketchtool.sh
├── src(根目录)
│   ├── @custom_types
│   │   ├── cocoascript
│   │   │   └── index.d.ts
│   │   └── sketch-native
│   │       └── index.d.ts
│   ├── index.ts
│   ├── manifest.json(配置菜单)
│   ├── meaxure(sketch处理)
│   │   ├── addSlice.js（添加切图）
│   │   ├── common
│   │   │   ├── config.ts
│   │   │   ├── context.ts
│   │   │   ├── language.ts
│   │   │   └── logger.ts
│   │   ├── coordinate.ts
│   │   ├── export（导出）
│   │   │   ├── colors.ts
│   │   │   ├── files.ts
│   │   │   ├── flow.ts
│   │   │   ├── index.ts
│   │   │   ├── layerData.ts
│   │   │   ├── mask.ts
│   │   │   ├── note.ts
│   │   │   ├── slice.ts
│   │   │   ├── symbol.ts
│   │   │   ├── tempLayers.ts
│   │   │   ├── textFragment.ts
│   │   │   └── tint.ts
│   │   ├── helpers（）
│   │   │   ├── elements.ts
│   │   │   ├── helper.ts
│   │   │   ├── renameOldMarkers.ts
│   │   │   └── styles.ts
│   │   ├── interfaces.ts
│   │   ├── manage.ts
│   │   ├── meaxureStyles.ts
│   │   ├── note.ts
│   │   ├── overlay.ts
│   │   ├── panels
│   │   │   ├── exportPanel.ts
│   │   │   ├── propertiesPanel.ts
│   │   │   ├── settingsPanel.ts
│   │   │   └── toolbar.ts
│   │   ├── properties.ts
│   │   ├── runScript.ts
│   │   ├── size.ts
│   │   └── spacings.ts
│   ├── playground
│   │   ├── context.ts
│   │   ├── index.ts
│   │   ├── libraryInstances
│   │   │   ├── findByLibrary.ts
│   │   │   └── index.ts
│   │   ├── selection
│   │   │   ├── index.ts
│   │   │   └── scope.ts
│   │   └── swatches.ts
│   ├── sketch
│   │   ├── document.ts
│   │   ├── index.ts
│   │   ├── layer
│   │   │   ├── alignment.ts
│   │   │   ├── index.ts
│   │   │   └── resizingConstraint.ts
│   │   ├── rectangle.ts
│   │   ├── shapePath.ts
│   │   ├── symbolInstance.ts
│   │   ├── text
│   │   │   ├── index.ts
│   │   │   └── textFragment.ts
│   │   └── ui
│   │       ├── confirm.ts
│   │       ├── finder.ts
│   │       ├── index.ts
│   │       └── savePanel.ts
│   └── webviewPanel
│       ├── MochaJSDelegate.ts
│       ├── dispatchFirstClick.ts
│       ├── index.ts
│       ├── keepAround.ts
│       └── webviewScripts.ts
├── tsconfig.json
├── ui(界面部分)
│   ├── common.ts
│   ├── events（事件）
│   │   ├── alignElement.ts
│   │   ├── artboards.ts（画板）
│   │   ├── delegate.ts
│   │   ├── distance.ts
│   │   ├── dragExportable.ts
│   │   ├── flow.ts
│   │   ├── hashChange.ts
│   │   ├── helper.ts
│   │   ├── index.ts
│   │   ├── inspector.ts（属性面板）
│   │   ├── keyboard（键盘）
│   │   │   ├── switch.ts
│   │   │   └── zoom.ts
│   │   ├── layerEvents.ts
│   │   ├── navigate.ts
│   │   ├── notes.ts
│   │   ├── panMode.ts
│   │   ├── percentageMode.ts
│   │   ├── slices.ts
│   │   ├── tab.ts
│   │   ├── unit.ts
│   │   └── zoom.ts
│   ├── index.ts
│   ├── render（渲染）
│   │   ├── atlas.ts（瀑布流部分）
│   │   ├── artboards.ts（画板）
│   │   ├── colors.ts（颜色处理）
│   │   ├── helper.ts（单位处理）
│   │   ├── index.ts
│   │   ├── inspector（属性面板）
│   │   │   ├── borders.ts（边框）
│   │   │   ├── codeTemplate.ts（代码模板）
│   │   │   ├── exportable.ts（导出下载）
│   │   │   ├── fills.ts （填充）
│   │   │   ├── font.ts（字体）
│   │   │   ├── index.ts
│   │   │   ├── properties.ts （属性）
│   │   │   ├── shadows.ts（投影）
│   │   │   └── shared.ts
│   │   ├── layers.ts
│   │   ├── notes.ts
│   │   ├── screen.ts
│   │   ├── slices.ts
│   │   ├── unit.ts
│   │   └── zoom.ts
│   ├── static(静态资源和模板)
│   │   ├── jquery.js
│   │   ├── meaxure.css
│   │   ├── normalize.css
│   │   └── template.html
│   └── tsconfig.json
└── webpack.skpm.config.js
```