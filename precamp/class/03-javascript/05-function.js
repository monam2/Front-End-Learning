        // const display = () => {
        //     const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0");
        //         document.getElementById("target").innerText = token;
        //} //화살표 함수

        // function auth() {
        //     const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0");
        //         document.getElementById("target").innerText = token;
        // } 함수 선언식

        const display = function() {
            const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0");
                document.getElementById("target").innerText = token;
                document.getElementById("target").style.color = "#"+token;
        }