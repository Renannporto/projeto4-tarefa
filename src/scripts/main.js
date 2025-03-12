document.addEventListener("DOMContentLoaded", function(){
    const buttons = document.querySelectorAll("[data-tab-button]");
    // Seleciona o modal e os elementos internos
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const closeBtn = document.querySelector(".close");
     // Gerenciar navegação entre as tabs
    const tabButtons = document.querySelectorAll('.fotografias__tabs__button');
    const tabLists = document.querySelectorAll('.fotografias__list');

    // Função para mudar de aba
    tabButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Desmarcar a aba ativa
            tabButtons.forEach(btn => btn.classList.remove('fotografias__tabs__button--is-active'));
            // Tornar a aba clicada ativa
            button.classList.add('fotografias__tabs__button--is-active');

            // Ocultar todas as listas de fotos
            tabLists.forEach(list => list.classList.remove('fotografias__list--is-active'));

            // Exibir a lista de fotos da aba clicada
            const tabId = button.getAttribute('data-tab-button');
            const activeList = document.querySelector(`[data-tab-id="${tabId}"]`);
            activeList.classList.add('fotografias__list--is-active');
        });
    });

    // Adiciona evento para todas as imagens
    document.querySelectorAll(".fotografias__list__item img").forEach(img => {
        img.addEventListener("click", function() {
            modal.style.display = "flex";
            modalImg.src = this.src;
        });
    });

    // Fecha o modal ao clicar no botão "X"
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Fecha o modal ao clicar fora da imagem
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });  
})