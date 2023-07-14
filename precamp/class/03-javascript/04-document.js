function greeting() {
    if (document.getElementById("target").innerText === "Hello") {
    document.getElementById("target").innerText = "World"

    } else {
        document.getElementById("target").innerText = "Hello"
    }
}