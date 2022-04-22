import { LayerData } from "../../../src/meaxure/interfaces";
import { propertyType } from "./shared";
export function renderExportable(layerData: LayerData): string {
    if (!layerData.exportable || !layerData.exportable.length)
        return '';
    var expHTML = [], path = 'assets/';
    expHTML.push('<ul class="exportable">');
    layerData.exportable.forEach(exportable => {
        var filePath = path + exportable.path;
        if(['pdf','tiff','eps'].indexOf(exportable.format) == -1){
            expHTML.push('<li>', '<a href="' + filePath
            + '"target="_blank" download '
            + 'data-format="' + exportable.format.toUpperCase()
            + '"><img class="dragExp" src="' + filePath + '" alt="' + exportable.path
            + '"><img class="thumbExp" src="' + filePath + '">'
            + exportable.path.replace('drawable-', '')
            + '</a>', '</li>');
        }else{
            expHTML.push('<li>', '<a href="' + filePath
            + '"target="_blank" download '
            + 'data-format="' + exportable.format.toUpperCase()
            + '"><span style="color: #989A9C;margin-right: 2px;">[NotSupport]</span>'
            + exportable.path.replace('drawable-', '')
            + '</a>', '</li>');
        }
    });
    expHTML.push('</ul>');
    if (document.location.protocol == 'file:') {
        expHTML.push('按(option)或(alt)点击即可下载')
    }
    return propertyType('EXPORTABLE', expHTML.join(''));
}
