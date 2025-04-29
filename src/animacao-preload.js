function loading() {
    const boxLoad = document.getElementsByClassName('box-load')[0];
    const content = document.getElementsByClassName('content')[0];

    // Aplica o fade-out
    boxLoad.classList.add('fade-out');

    // Espera o tempo da transição antes de esconder de vez
    setTimeout(() => {
        boxLoad.style.display = "none";
        content.style.display = "block";
    }, 500); // 500ms = mesmo tempo da transição definida no CSS
}