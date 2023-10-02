const $computer = document.querySelector('#computer');
const $score = document.querySelector('#score');
const $rock = document.querySelector('#rock');
const $scissors = document.querySelector('#scissors');
const $paper = document.querySelector('#paper');
const IMG_URL = './rsp.png';
$computer.style.background = `url(${IMG_URL}) -464px 0`;
$computer.style.backgroundSize = 'auto 200px';

const rspX = {
    scissors: '0',
    rock: '-220px',
    paper: '-440px',
};

let computerChoice = 'scissors'; //현재 상태
function changeComputerHand() {
    if (computerChoice === 'rock') { //현재 가위라면 -> 바위로 변경
        computerChoice = 'scissors';
    } else if (computerChoice === 'scissors') { //바위라면
        computerChoice = 'paper';
    } else if (computerChoice === 'paper') { //보라면
        computerChoice = 'rock';
    }
    $computer.style.background = `url(${IMG_URL}) ${rspX[computerChoice]} 0`;
    $computer.style.backgroundSize = 'auto 200px';
};
let intervalId = setInterval(changeComputerHand, 50);
const scoreTable = {
    rock: 0,
    scissors: 1,
    paper: -1,
};

let clickable = true;
let score = 0;
let computerScoreSelf = 0;
let myScoreSelf = 0;
let gameCount = 0;
const clickButton = (e) => {
    if (clickable) {
        clearInterval(intervalId);
        clickable = false; //Flag변수 설정

        const myChoice = e.target.textContent === '바위'
            ? 'rock'
            : e.target.textContent === '가위'
                ? 'scissors'
                : 'paper';

        const myScore = scoreTable[myChoice];
        const computerScore = scoreTable[computerChoice];
        const diff = myScore - computerScore;

        let message;

        //2,-1 : 승리조건 / -2, 1 : 패배조건
        if (diff === 2 || diff === -1) {
            message = '승리';
            myScoreSelf += 1;
            gameCount += 1;
        } else if (diff === -2 || diff === 1) {
            message = '패배';
            computerScoreSelf += 1;
            gameCount += 1;
        } else {
            message = '무승부';
        }

        if (myScoreSelf >= 3) {
            $score.textContent = `${message} ${gameCount}회차 나 : ${myScoreSelf} 컴퓨터 : ${computerScoreSelf}
            당신의 승리입니다!`;
        } else if (computerScoreSelf >= 3) {
            $score.textContent = `${message} ${gameCount}회차 나 : ${myScoreSelf} 컴퓨터 : ${computerScoreSelf}
            컴퓨터의 승리입니다!`;
        } else {
            $score.textContent = `${message} ${gameCount}회차 나 : ${myScoreSelf} 컴퓨터 : ${computerScoreSelf}
            게임을 계속 진행하세요!`;
            setTimeout(() => { //1초 후에 다시 인터벌 실행
                clickable = true;
                intervalId = setInterval(changeComputerHand, 50);

                // $rock.addEventListener('click', clickButton);
                // $scissors.addEventListener('click', clickButton);
                // $paper.addEventListener('click', clickButton);
            }, 1000)
        }
    }

    // clearInterval(intervalId);
    // $rock.removeEventListener('click', clickButton);
    // $scissors.removeEventListener('click', clickButton);
    // $paper.removeEventListener('click', clickButton);
    // remove이벤트리스너 쓰지 않는게 좋은 이유?
    // -> add이벤트리스너와 remove이벤트리스너에 들어가는 콜백함수는 같은 함수여야 한다.
    // -> 그러나, a(1)===a(1) -> false 임(객체 파트 다시 공부하기. 함수도 객체임)
    // + {}==={} -> false, []===[] -> false, (()=>{}) === (()=>{}) -> false.
    //이걸 같게하는 방법? 변수에 넣어야함. const a = {}, const b = a; ->a===b true.


}
$rock.addEventListener('click', clickButton);
$scissors.addEventListener('click', clickButton);
$paper.addEventListener('click', clickButton);
