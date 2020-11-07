import { eventDelegate } from "./delegate";

export function tabEvents() {
    let tab = document.querySelector('.header-left .tab') as HTMLDivElement;
    let navbar = document.querySelector('.navbar') as HTMLDivElement;
    let showBtn = document.querySelector('.showBtn') as HTMLDivElement;
    eventDelegate(tab, 'click', 'li', function (event) {
        let current = tab.querySelector('.current');
        if (this === current) {
            // this.classList.remove('current');
            showBtnNav(false);
            return;
        }
        current?.classList.remove('current');
        let id = this.dataset.id;
        this.classList.add('current');
        showBtnNav(true);
        navbar.querySelectorAll('section').forEach(
            (sec: HTMLDivElement) => sec.style.display = 'none'
        );
        (navbar.querySelector('#' + id) as HTMLDivElement).style.display = '';
    });

    showBtn.addEventListener('click', function (event) {
        let on = navbar.classList.contains('on')
        if (on) {
            showBtnNav(false);
        } else {
            showBtnNav(true);
        }
    })
}

export function hideNavBar() {
    let tab = document.querySelector('.header-left .tab') as HTMLDivElement;
    tab.querySelector('.current')?.classList.remove('current');
    showBtnNav(false);
}
export function showNavBar() {
    let tab = document.querySelector('.icon-artboards') as HTMLDivElement;
    tab.classList.add('current');
    showBtnNav(true);
}

export function showBtnNav(even) {
    let navbar = document.querySelector('.navbar') as HTMLDivElement;
    let showBtn = document.querySelector('.showBtn') as HTMLDivElement;
    if (even) {
        navbar.classList.add('on');
        showBtn.style.backgroundPositionY = ''
    } else {
        navbar.classList.remove('on');
        showBtn.style.backgroundPositionY = 'top'
    }
}