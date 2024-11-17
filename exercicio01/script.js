function carregar() {
    let msg = document.getElementById("msg");
    let img = document.getElementById("imagem");
    let data = new Date();
    let hora = data.getHours();
    let min = data.getMinutes();
    msg.innerHTML = `Agora são ${hora}:${min} horas.`;
    if (hora >= 0 && hora < 12) {
        img.src = "img/1.jpg";
        document.body.style.background = "#e2cd9f";
        document.body.style.fontSize = "25px";
        document.body.style.transition = ".5s";
    } else if (hora >= 12 && hora <= 18) {
        img.src = "img/2.jpg";
        document.body.style.background = "#ff0000";
        document.body.style.fontSize = "25px";
        document.body.style.transition = ".5s";
    } else {
        img.src = "img/3.jpg";
        document.body.style.background = "#000000";
        document.body.style.fontSize = "25px";
        document.body.style.transition = ".5s";
    }
}