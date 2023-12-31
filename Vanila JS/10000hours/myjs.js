const $startButton = document.querySelector('.start_btn');
const $result = document.querySelector('.result');
const $modal = document.querySelector('#modal');
const $openButton = document.querySelector('.modal_btn');
const $closeButton = document.querySelector('.close_btn');
const $shareButton = document.querySelector('.share_btn');
const $loading = document.querySelector('.result_loading');
const $body = document.querySelector("body");


function calculator() {
    const $fieldValue = document.querySelector("#field_value");
    const $timeValue = document.querySelector("#time_value");
    const $timeValue_int = Number($timeValue.value);
    
    const $fieldResult = document.querySelector(".field_result");
    const $timeResult = document.querySelector(".time_result");

    if ($fieldValue.value == '') {
        alert("분야가 입력되지 않았습니다.");
        $fieldValue.focus();
        return false
    } else if ($timeValue.value == '') {
        alert("시간이 입력되지 않았습니다.");
        $timeValue.focus();
        return false;
    } else if ($timeValue_int >24) {
        alert("잘못된 입력 값입니다. 24 이하의 값을 입력하세요.")
        return false;
    }

    $result.style.display = 'none';
    $loading.style.display = 'flex';

    setTimeout(() => {
        $fieldResult.innerHTML = $fieldValue.value;
        $timeResult.innerHTML = parseInt(10000/($timeValue_int), 10);
        $loading.style.display = 'none';
        $result.style.display = 'flex';
    }, 1800);
}

function openModal() { //모달창 열기
    $modal.style.display = 'flex';
}
function closeModal() { //모달창 닫기
    $modal.style.display = 'none';
}
//모달창 열린 상태에서 모달창 바깥 화면 클릭시 닫기
window.onclick = function(e){
    if (e.target == $modal) {
        closeModal()
    }
}

//공유하기 -> 링크 복사
function copyUrl() {
    let url = window.location.href;
    let tmp = document.createElement('input');

    document.body.appendChild(tmp);
    tmp.value = url;
    tmp.select();
    document.execCommand("copy");
    document.body.removeChild(tmp);

    alert("URL이 복사되었습니다.")
}


$shareButton.addEventListener('click', copyUrl);
$openButton.addEventListener('click', openModal);
$closeButton.addEventListener('click', closeModal);
$startButton.addEventListener('click', calculator);
