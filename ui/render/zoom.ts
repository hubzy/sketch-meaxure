import { state } from "../common";
export function zoom() {
    var zoomText = state.zoom * 100 + '%';
    (state.zoom <= .25) ? zoomMethods(true, '.zoom-in') : zoomMethods(false, '.zoom-in');
    (state.zoom >= 4) ? zoomMethods(true, '.zoom-out') : zoomMethods(false, '.zoom-out');
    document.querySelector('.zoom-text').innerHTML = zoomText
}
function zoomMethods(Boolean, className) {
    let obtain = document.querySelector(className);
    if (Boolean) {
        obtain.setAttribute('disabled', 'disabled');
    } else {
        obtain.removeAttribute('disabled')
    }
}