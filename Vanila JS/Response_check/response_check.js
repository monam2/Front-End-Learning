const $screen = document.querySelector('#screen');
const $result = document.querySelector('#result');

$screen.addEventListener('click',(e)=>{
    if (e.target.classList.contains('waiting')) {
        $screen.classList.remove('waiting');
        $screen.classList.add('ready');
        $screen.textContent = '초록색이 되면 클릭하세요.';
    } else if (e.target.classList.contains('ready')) {

    } else if (e.target.classList.contains('now')) {
        
    }
})
