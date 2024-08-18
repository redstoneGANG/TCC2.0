var header = document.getElementById('header');
var navegationHeader = document.getElementById('navegation_header');
var content = document.getElementById('content');
var showSidebar = false;

function toggleSidebar()
{
    showSidebar = !showSidebar;
    if(showSidebar)
    {
        //true
        navegationHeader.style.marginInleft = '-10vw';
        navegationHeader.style.animationName = 'showSidebar';
    }
    else
    {
        //false
        navegationHeader.style.marginInleft = '-100vw';

    }
}