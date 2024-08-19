function toggleSidebar() {
    var navegationHeader = document.querySelector('.navegation_header');
    var isVisible = navegationHeader.style.marginLeft === '0px';

    if (isVisible) {

        navegationHeader.style.marginLeft = '-100vw';
        navegationHeader.style.animationName = ''; 
    } else {
        navegationHeader.style.marginLeft = '0';
        navegationHeader.style.animationName = 'showSidebar';
    }
}

document.querySelector('.btn_icon_header').addEventListener('click', toggleSidebar);