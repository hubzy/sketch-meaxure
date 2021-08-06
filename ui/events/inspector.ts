import { state } from "../common";
import { colors } from "../render/colors";
import { eventDelegate } from "./delegate";
import { message } from "../render/helper";

export function inspectorEvents() {
    let formats = ['color-hex', 'argb-hex', 'css-rgba', 'css-hsla', 'ui-color'];
    let inspector = document.querySelector('#inspector') as HTMLElement;
    eventDelegate(inspector, 'click', '.color label', function (event) {
        let current = formats.indexOf(state.colorFormat)
        let next = (current + 1) % formats.length;
        state.colorFormat = formats[next];
        document.querySelectorAll('.color input').forEach((i: HTMLInputElement) => {
            let colors = JSON.parse(decodeURI(i.dataset.color));
            i.value = colors[state.colorFormat];
        })
        colors();
    });
    eventDelegate(inspector, 'dblclick', 'input, textarea', function (event) {
        (this as HTMLInputElement).select();
    });

//复制代码
    function copy(id) {
        let center = $(id)
        center.select();
        document.execCommand("copy")
    }
    $('.inspector').mousedown(function () {
        $('.copyAll').click(function () {
            copy('.select #css')
            message('---✅ - ( ´´ิ∀´ิ` ) - 复制成功 ---');
        })
    })
}
