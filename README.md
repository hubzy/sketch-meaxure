# Sketch MeaXure

> 感谢[@utom](https://github.com/utom)、[@jebbs](https://github.com/qjebbs)
> 插件由原来的[@utom](https://github.com/utom)的`Sketch Measure`升级到[jebbs](https://github.com/qjebbs) `Sketch MeaXure`
> 而我在[jebbs](https://github.com/qjebbs) `Sketch MeaXure`的基础上进行优化升级,感谢🙏两位大佬。

Sketch MeaXure是使用TypeScript对`Sketch Measure`的重新实现，它使用Sketch JavaScript API。
# [Demo](http://hubzyy.gitee.io/sketch-meaxure/)

## NEW
最新添加切图功能。还在测试阶段，切图和原来的有所差别，慢慢更新完善

## [文件目录](./Directory.md)


其目标是：

1. 更稳定，更新Sketch后不会崩溃。
1. 易于维护。
1. 完善用户体验

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
1. 切图素材可点击下载---“本地打开index.html无法直接下载”，部署到线上或者通过IP网络的形式访问可一键下载。
1. 新增可选择`像素(px)2x、3x`倍数选项切换、设计稿建议为一倍图，默认导出即可。
1. 在代码提示中新增width、height代码，对字体信息进行了优化，修复切换倍数时字体倍数不变的bug、圆角边框的优化。
1. 复制CSS代码功能
1. 新增切图标注


## 注意

如果您在管理由Sketch Measure创建的标记（切换隐藏/锁定，删除和导出）时遇到问题，请运行菜单“插件-Sketch MeaXure-帮助-重命名旧标记”。

## 安装

- [下载](https://gitee.com/hubzyy/sketch-meaxure/attach_files/780454/download/sketch-meaxure.sketchplugin.zip)该插件的最新版本
- 解压缩
- 双击Sketch-Meaxure.sketchplugin