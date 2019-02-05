var wordsLeft = document.querySelector('.words-left'),
    wordsRight = document.querySelector('.words-right'),
    wordsTop = document.querySelector('.words-top');
var leftDoor = document.querySelector('.left-door'),
    rightDoor = document.querySelector('.right-door');
var openDiv = document.querySelector('#open');
var fuFront = document.querySelector('#fu-front');
var footer = document.querySelector('#footer');
var bulletScreen = document.querySelector('.bullet-screen');
var input = document.querySelector('#input');
var inputText = document.querySelector('.input-text');
var inputBtn = document.querySelector('.input-btn');
var audio = document.querySelector('#mp3');
var words = [
    '新年快乐',
    '万事如意',
    '心想事成',
    '猪年大吉',
    '喜气洋洋',
    '恭喜发财',
    '鸿运当头',
    '福星高照',
    '财源广进'
];
var li = document.createElement('li');
var wordsFlag = true;

function openDoor() {
    leftDoor.style.transform = 'rotateY(-60deg)',
        rightDoor.style.transform = 'rotateY(60deg)';
    leftDoor.style.webkitTransform = 'rotateY(-60deg)',
        rightDoor.style.webkitTransform = 'rotateY(60deg)';
    fuFront.style.opacity = 0;
    openDiv.style.display = 'block';
    footer.style.transform = 'scale(0)';
    input.style.display = 'block';
    wordsStart();
}

function wordsStart() {
    setInterval(function () {
        var tmpLi = li.cloneNode();
        var wordIndex = Math.floor(Math.random() * (words.length));
        tmpLi.innerText = words[wordIndex] || '';
        tmpLi.style.top = Math.random() * 90 + '%';
        bulletScreen.appendChild(tmpLi);
    }, 300);
    setInterval(function () {
        if (bulletScreen.childNodes.length > 20) {
            bulletScreen.removeChild(bulletScreen.childNodes[0]);
        }
    }, 0);
}

inputText.onfocus = function() {
    this.onkeydown = function(evt){
        if (evt.keyCode == 13) {
            inputClick();
        }
    }
}

function inputClick() {
    if (inputText.value) {
        if (wordsFlag) {
            words = [];
            wordsFlag = false;
        }
        words.unshift(inputText.value);
        inputText.value = '';
    }
}

function inputClear() {
    words = [];
}

window.onload = function () {
    wordsTop.style.width = '10rem',
        wordsLeft.style.height = '20rem',
        wordsRight.style.height = '20rem';
}
