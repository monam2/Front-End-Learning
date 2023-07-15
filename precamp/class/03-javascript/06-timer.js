const display = function () {
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    document.getElementById("target").innerText = token;
}

let timer_started = false; // t : 작동중 / f : 작동중x 

const timer = function () {
    if (timer_started === false) { //타이머가 작동중x 라면
        timer_started = true; // 타이머 작동
        document.getElementById("complete").disabled = false;

        let time = 5;
        let timerInterval;
        timerInterval = setInterval(() => {
            if (time >= 0) {
    
                let min = Math.floor(time / 60);
                let sec = String(time % 60).padStart(2, '0');
                document.getElementById("timer").innerText = min + ':' + sec;
                time = time - 1
            } else {
                document.getElementById("complete").disabled = true;
                timer_started = false;
                clearInterval(timerInterval);
            }
        }, 1000);
    } else {

    }
}