const { body } = document;

const $table = document.createElement('table');
const $result = document.createElement('div');
const row = [];
let turn = 'O';

for (let i = 0; i < 3; i++) {
    $tr = document.createElement('tr');
    const cells = [];
    for (let j = 0; j < 3; j++) {
        const $td = document.createElement('td')
        cells.push($td)
        $td.addEventListener('click', (event) => {

            //칸에 글자가 표시(글자)가 있는가? -> O/X가 있으면 그냥 바로 종료
            //비동기에서 클릭을 하면 안되는 경우엔 이렇게 return 시켜서 종료해도 됨.
            if (event.target.textContent) return;
            event.target.textContent = turn;

            //승부 확인
            if (turn === 'O') {
                turn = 'X';
            } else if (turn === 'X') {
                turn = 'O';
            }
            //turn = turn === 'O' ? 'X' : 'O'; 삼항연산자 사용
        })

        $tr.appendChild($td);
    }
    $table.append($tr);
    row.push(cells)
}



document.body.append($table);
document.body.append($result);
