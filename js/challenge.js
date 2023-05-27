const timer = document.getElementById('counter');
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const likeButton = document.getElementById('heart');
let pauseButton = document.getElementById('pause');

const likesList = document.querySelector('.likes');


document.addEventListener('DOMContentLoaded', () => {
    let counter = 0
    const likes = {};

    const timerCounter = () => {
        counter++;
        timer.textContent = counter;
    };

    let intervalId = setInterval(timerCounter, 1000);

    const pauseTimer = () => {
        if (pauseButton.textContent === 'pause') {
            clearInterval(intervalId);
            minusButton.disabled = true;
            plusButton.disabled = true;
            likeButton.disabled = true;
            pauseButton.textContent = 'resume';
        } else {
            intervalId = setInterval(timerCounter, 1000);
            minusButton.disabled = false;
            plusButton.disabled = false;
            likeButton.disabled = false;
            pauseButton.textContent = 'pause';
        }
    };

    const resumeTimer = () => {
        intervalId = setInterval(timerCounter, 1000);
        minusButton.disabled = false;
        plusButton.disabled = false;
        likeButton.disabled = false;
        resumeButton.textContent = 'pause';
        resumeButton.id = 'pause'
    };

    pauseButton.addEventListener('click', pauseTimer);
    resumeButton.addEventListener('click', resumeTimer);

    minusButton.addEventListener('click', () => {
        counter--;
        timer.textContent = counter;
    })
    plusButton.addEventListener('click', () => {
        counter++;
        timer.textContent = counter;
    });

    const updateLikes = () => {
        if(likes[counter]) {
            likes[counter]++
        } else {
            likes[counter] = 1
        };
        console.log(likes);

        likesList.innerHTML='';
        for (let number in likes) {
            const listItem = document.createElement('li');
            if (likes[number] > 1) {
            listItem.textContent = `${number} has been liked ${likes[number]} times`;
            } else {
                listItem.textContent = `${number} has been liked 1 time`;
            };
            likesList.appendChild(listItem);
        }
    };

    likeButton.addEventListener('click', updateLikes);

});