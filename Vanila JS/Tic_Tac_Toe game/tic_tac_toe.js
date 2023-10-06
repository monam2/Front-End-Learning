const { body } = document;

const $table = document.createElement('table');
const $result = document.createElement('div');
const rows = [];
let turn = 'O';

//가로,세로,대각선 을 확인해서 승자가 있는지 확인
const checkWinnner = (target) => { //타겟 : 지금 보고 있는 칸
    let rowIndex;
    let cellIndex;
    rows.forEach((row, ri) => {
        row.forEach((cell, ci) => {
            if (cell === target) {
                rowIndex = ri;
                cellIndex = ci;
            }
        });
    })

    let hasWinner = false;
    if ( // 가로줄 체크
        rows[rowIndex][0].textContent === turn &&
        rows[rowIndex][1].textContent === turn &&
        rows[rowIndex][2].textContent === turn
    ) {
        hasWinner = true;
    }
    if ( // 세로줄 체크
        rows[0][cellIndex].textContent === turn &&
        rows[1][cellIndex].textContent === turn &&
        rows[2][cellIndex].textContent === turn
    ) {
        hasWinner = true;
    }
    if ( //대각선 체크1
    rows[0][0].textContent === turn &&
    rows[1][1].textContent === turn &&
    rows[2][2].textContent === turn
    ) {
        hasWinner = true;
    }
    if ( //대각선 체크2
    rows[0][2].textContent === turn &&
    rows[1][1].textContent === turn &&
    rows[2][0].textContent === turn
    ) {
        hasWinner = true;
    }
    
    return hasWinner;
};

const callback = (event) =>{
            //칸에 글자가 표시(글자)가 있는가? -> O/X가 있으면 그냥 바로 종료
            //비동기에서 클릭을 하면 안되는 경우엔 이렇게 return 시켜서 종료해도 됨.
            if (event.target.textContent) return; // o/x인 경우 
            event.target.textContent = turn; //빈칸일때 실행

            //빈칸에 o또는 x가 채워질때마다 승자가 있는지 판단
            if (checkWinnner(event.target)) {
                $result.textContent = `${turn}님이 승리!`;
                $table.removeEventListener('click', callback);
                return;
            };

            //무승부 검사(칸이 꽉 차면)
            let draw = true;
            rows.forEach((row) => {
                row.forEach((cell) => {
                    if (!cell.textContent) { //빈칸이 있으면
                        draw = false;
                    }
                })
            });
            //빈칸이 없다? = 칸이 꽉찼다 => 무승부(종료)
            if (draw) {
                $result.textContent = '무승부입니다.';
                return;
            }

            //차례 넘기기
            if (turn === 'O') {
                turn = 'X';
            } else if (turn === 'X') {
                turn = 'O';
            }
            //turn = turn === 'O' ? 'X' : 'O'; 삼항연산자 사용
        
}

for (let i = 0; i < 3; i++) {
    const $tr = document.createElement('tr');
    const cells = [];
    for (let j = 0; j < 3; j++) {
        const $td = document.createElement('td');
        cells.push($td);
        $table.addEventListener('click', callback);
        $tr.appendChild($td);
    }
    $table.append($tr);
    rows.push(cells)
}



body.append($table);
body.append($result);
