document.querySelector('html').addEventListener('mousemove', rgbXY);


function rgbXY (e) {
    document.querySelector('h1').textContent = `R:${e.clientX % 255} G:${e.clientY % 255} B:${(e.clientX + e.clientY) % 255}`;
    document.querySelector('html').style.backgroundColor = `rgb(${e.clientX % 255}, ${e.clientY % 255}, ${(e.clientX + e.clientY) % 255})`;
}
