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
    if (computerChoice === 'scissors') { //현재 가위라면 -> 바위로 변경
        computerChoice = 'rock';
    } else if (computerChoice === 'rock') { //바위라면
        computerChoice = 'paper';
    } else if (computerChoice === 'paper') { //보라면
        computerChoice = 'scissors';
    }
    $computer.style.background = `url(${IMG_URL}) ${rspX[computerChoice]} 0`;
    $computer.style.backgroundSize = 'auto 200px';
};
let intervalId = setInterval(changeComputerHand, 50);


let clickable = true;
const clickButton = () => {
    if (clickable) {
        clearInterval(intervalId);
        clickable = false; //Flag변수 설정

        setTimeout(() => { //1초 후에 다시 인터벌 실행
            intervalId = setInterval(changeComputerHand, 50);
            // $rock.addEventListener('click', clickButton);
            // $scissors.addEventListener('click', clickButton);
            // $paper.addEventListener('click', clickButton);
        }, 1000)

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
