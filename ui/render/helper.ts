import { project, state } from "../common";

export function zoomSize(size: number) {
    return size * state.zoom / project.resolution;
}

export function percentageSize(size: number, size2: number) {
    return (Math.round(size / size2 * 1000) / 10) + "%";
}

export function unitSize(value: number, isText?: boolean) {
    // logic point
    let pt = value / project.resolution;
    // convert to display value
    let sz = Math.round(pt * state.scale * 100) / 100;
    let units = state.unit.split("/");
    let unit = units[0];
    if (units.length > 1 && isText) {
        unit = units[1];
    }
    return sz + unit;
}
export function unitCss(value) {
    let fontSize = /font-size:/;
    let borderRadius = /border-radius:/;
    let border = /border:/;
    let width = /width:/;
    let height = /height:/;
    return value.map(item => {
        if (fontSize.test(item)) {
            return 'font-size: ' + cssName(item);
        }
        if (width.test(item)) {
            return 'width: ' + cssName(item);
        }
        if (height.test(item)) {
            return 'height: ' + cssName(item);
        }
        if (borderRadius.test(item)) {
            return 'border-radius: ' + cssName(item);
        }
        if (border.test(item)) {
            return 'border: ' + unitBorder(item);
        }
        return item
    })
}
function cssName(name) {
    let p = name.replace(/[^0-9]/ig, "");
    let pt = p / project.resolution;
    // convert to display value
    let sz = Math.round(pt * state.scale * 100) / 100;
    let units = state.unit.split("/");
    let unit = units[0];
    return sz + unit
}
function unitBorder(e) {
    let i = e.indexOf(":");
    let o = e.substr(i + 1, 5);
    let f = o.replace(/[^0-9]/ig, "");
    let n
    if (f == 0) {
        f = 0.5
        n = 0
    } else {
        n = 'px'
    }
    let sz = Math.round(f * state.scale * 100) / 100;
    let units = state.unit.split("/");
    let unit = units[0];
    return sz + unit + e.split(n)[1];
}

let msgTimeout;
export function message(msg) {
    let message = document.querySelector('#message') as HTMLDivElement;
    message.innerText = msg;
    message.style.display = 'inherit';
    if (msgTimeout) {
        clearTimeout(msgTimeout);
        msgTimeout = undefined;
    }
    msgTimeout = setTimeout(() => message.style.display = 'none', 1000);
}