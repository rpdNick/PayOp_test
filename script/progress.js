const progressLine = document.querySelector('.progress__line');
const progressValue = document.querySelector('.progress__value');
let width = 0;
let progressInterval = setInterval(progressStatus, 60);

function progressStatus() {
    if (width == 100) {
        clearInterval(progressInterval);
    } else {
        width++;
        progressLine.style.width = width + '%';
        progressValue.innerText = width + '%';
    }
}