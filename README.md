# Sketch MeaXure

> 感谢[@utom](https://github.com/utom)、[@jebbs](https://github.com/qjebbs)
> 插件由原来的[@utom](https://github.com/utom)的`Sketch Measure`升级到[jebbs](https://github.com/qjebbs) `Sketch MeaXure`
> 而我在[jebbs](https://github.com/qjebbs) `Sketch MeaXure`的基础上进行优化升级,感谢🙏两位大佬。
Sketch MeaXure是使用TypeScript对`Sketch Measure`的重新实现，它使用Sketch JavaScript API。
## 安装
⚠️macOS Ventura13.0请下载sketch 94版本～

- [进入下载页面](https://gitee.com/hubzyy/sketch-meaxure/releases)
- 下载 `sketch-meaxure.sketchplugin.zip`
- 解压缩
- 双击Sketch-Meaxure.sketchplugin
  

[在线预览](http://hubzyy.gitee.io/sketch-meaxure/)

[项目源文件目录](./Directory.md)



## 改进

用户可以识别的改进：

1. 完全适用于最新版本的Sketch（v7.0）。
1. 最新的`色调`功能支持。
1. 轻松调整标记的大小，而不必担心破坏它们。 （`调整大小限制`功能）。
1. 在激活`动画堆栈`的情况下直接导出。
1. 自定义导出画板的顺序。
1. 更好地显示文本片段。
1. 重新组织功能和面板。
   [@jebbs](https://github.com/qjebbs/sketch-meaxure)GitHub

## 二次改进

1. 预览[Demo](http://hubzyy.gitee.io/sketch-meaxure/)
1. 添加瀑布流展示、方便预览、查找设计稿
1. 导出新增`icons`文件夹，文件夹放置缩略图，便于网络跟快的加载。
1. 切图素材可点击一键下载。
1. 新增可选择`像素(px)2x、3x`倍数选项切换、设计稿建议为一倍图，默认导出即可。
1. 在代码提示中新增width、height代码，对字体信息进行了优化，修复切换倍数时字体倍数不变的bug、圆角边框的优化。
1. 复制CSS代码功能
1. 还原了切图标注🥰


## 注意

如果您在管理由Sketch Measure创建的标记（切换隐藏/锁定，删除和导出）时遇到问题，请运行菜单“插件-Sketch MeaXure-帮助-”。



## 👍推荐相关项目

### files-preview-three

为了更好的管理管理导出的项目设计文件，弥补`meaxure`对项目管理上的缺失。

给大家推荐[files-preview-three](https://gitee.com/hubzyy/files-preview-three) 静态文件管理，使项目预览上体验更佳。

【新增】支持模型文件`gib` `gltf` 的预览，方便对模型文件预览，也方便了模型文件的研发对接，同时内嵌了[three-gltf-viewer](https://github.com/donmccurdy/three-gltf-viewer)方便模型调试。

![imga1](https://gitee.com/hubzyy/files-preview-three/raw/three/assets/01.png)

#### files-preview-three更新日志

- **新增文档模式**
- 支持预览 gif、bmp、webp、tif、svga 格式文件
- 项目封面支持 gif 格式
- 修复了 CentOS 下的运行问题
- 优化图片预览体验
- 新增支持模型gib gltf文件预览
- 内嵌[three-gltf-viewer](https://github.com/donmccurdy/three-gltf-viewer)
- 外部资源改为本地资源
- 简化了md文档目录
- 其他bug修复...
