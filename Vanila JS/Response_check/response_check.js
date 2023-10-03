const $screen = document.querySelector('#screen');
const $result = document.querySelector('#result');

let startTime; //시간 기록
let endTime;

$screen.addEventListener('click',(e)=>{
    if (e.target.classList.contains('waiting')) { //파란색(대기) 일때
        $screen.classList.remove('waiting');
        $screen.classList.add('ready');
        $screen.textContent = '초록색이 되면 클릭하세요.';
        //이후에 바로 타이머 실행되어야 함.

        setTimeout(() => {
            startTime = new Date();
            $screen.classList.remove('ready');
            $screen.classList.add('now');
            $screen.textContent = '클릭하세요.';
            //클릭하면 이때부터 시작 시간 재기

        }, Math.floor(Math.random() * 1000)+2000);
        //math.random()은 0.~~~~~의 수를 반환. 1000을 곱하면 3자리 수 나옴.-> 2000~3000사이의 수를 획득

        //빨간색일때 타이머를 안넣는 이유? : 빨간색일때 클릭해서 타이머가 작동하는게 아님. 파란색(대기)에서 빨간색이 되자마자 타이머 실행되는 거임. 명백하게 따지면 파란색 조건문에 속한다.
    } else if (e.target.classList.contains('ready')) { //빨간색 일때

    } else if (e.target.classList.contains('now')) { //초록색 일때
        //끝 시간 재기 & 시간 차이를 표시(반응속도)
        endTime = new Date();
        $result.textContent = `${endTime - startTime}ms`;
        $screen.classList.remove('now'); //다시 대기 상태로 들어가야함.
        $screen.classList.add('ready');
        $screen.textContent = '클릭해서 시작하세요.';

    }
})
