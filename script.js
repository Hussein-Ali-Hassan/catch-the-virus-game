const score = document.getElementById('score');
const timeLeft = document.getElementById('time-left');
const squars = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    btn.disabled = 'true';
    let result = 0;
    let currentTime = timeLeft.textContent;


    function randomSquare() {
        squars.forEach(square => {
            square.classList.remove('mole');
        })
        let randomPosition = Math.floor(Math.random() * 9);
        squars[randomPosition].classList.add("mole");
    
        // assign the id of the randomPosition to hitPosition
        hitPosition = squars[randomPosition].id;
    }
    let timeId = setInterval(randomSquare, 550); // move the Mole

    // score++
    squars.forEach(square => {
        square.addEventListener('click', () => {
            if (square.id === hitPosition)
                result++;
            score.textContent = result;
        })
    })

    // Time++
    function countDown() {
        currentTime--;
        timeLeft.textContent = currentTime;
        if (currentTime === 0) {
            clearInterval(timer);
            clearInterval(timeId); // stop moveMole() after 60 sec
            alert('Game Ended! You score is ' + score.textContent);
            window.location.reload(false); 
        }
    }
    let timer = setInterval(countDown, 1000);

})