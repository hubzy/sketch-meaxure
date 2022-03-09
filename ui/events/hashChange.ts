import { navigateByURLHash, parseURLHash } from "./navigate";
import { state } from "../common";

let shouldBackToAnother = false;
export function hashChangeEvents() {
    window.addEventListener('hashchange', function (ev) {
        if (shouldBackToAnother) {
            let currentIndex = parseURLHash().artboardIndex;
            if (currentIndex == state.artboardIndex) {
                history.back();
                return;
            } else {
                shouldBackToAnother = false;
            }
        }
        navigateByURLHash(false);
    });
}
export function setShouldBackToAnother(value: boolean) {
    shouldBackToAnother = value;
}