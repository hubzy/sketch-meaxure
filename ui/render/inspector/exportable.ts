import { LayerData } from "../../../src/meaxure/interfaces";
import { propertyType } from "./shared";
export function renderExportable(layerData: LayerData): string {
    if (!layerData.exportable || !layerData.exportable.length)
        return '';
    var expHTML = [], path = 'assets/';
    expHTML.push('<ul class="exportable">');
    layerData.exportable.forEach(exportable => {
        var filePath = path + exportable.path;
        expHTML.push('<li>', '<a href="' + filePath 
        + '"target="_blank" download '
        + 'data-format="' + exportable.format.toUpperCase() 
        + '"><img class="dragExp" src="' + filePath + '" alt="' + exportable.path 
        + '"><img class="thumbExp" src="' + filePath + '" alt="' + exportable.path 
        + '">'
        + exportable.path.replace('drawable-', '') 
        + '</a>', '</li>');
    });
    expHTML.push('</ul>');
    if(document.location.protocol == 'file:'){
        expHTML.push('按(option)或(alt)点击即可下载')
    }
    return propertyType('EXPORTABLE', expHTML.join(''));
}
