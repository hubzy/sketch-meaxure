import { eventDelegate } from "./delegate";

export function dragExportableEvents() {
    eventDelegate(document.body, 'dragstart', '.exportable .dragExp', function (event) {
        this.style.width = 'auto';
        this.style.height = 'auto';
        let rect = this.getBoundingClientRect();
        let left = event.pageX - rect.left - this.offsetWidth / 2;
        let top = event.pageY - rect.top - this.offsetHeight / 2;
        this.style.left = left + 'px';
        this.style.top = top + 'px';
    });
    eventDelegate(document.body, 'dragend', '.exportable .dragExp', function (event) {
        this.style.left = '';
        this.style.top = '';
        this.style.width = '';
        this.style.height = '';
    });
}