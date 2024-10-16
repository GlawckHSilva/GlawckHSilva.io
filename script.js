const moveBtn = document.getElementById('moveBtn');
const heartBtn = document.getElementById('heartBtn');
const heartBackground = document.getElementById('heartBackground');
const retryBtn = document.getElementById('retryBtn');
const message = document.getElementById('message');

// Função para mover o botão quando o mouse passar por cima
moveBtn.addEventListener('mouseover', () => {
    const randomX = Math.floor(Math.random() * 200) - 100;
    const randomY = Math.floor(Math.random() * 200) - 100;

    moveBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

// Impedir que o botão de movimento seja clicado
moveBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Impede qualquer ação de clique
});

// Mostrar coração grande no fundo ao clicar no outro botão
heartBtn.addEventListener('click', () => {
    heartBackground.classList.remove('hidden');
    heartBackground.style.display = 'block'; // Faz o coração aparecer
    moveBtn.style.display = 'none'; // Esconde o botão "Não"
    heartBtn.style.display = 'none'; // Esconde o botão "Sim"
    retryBtn.style.display = 'block'; // Mostra o botão "Tente Novamente"
});

// Reiniciar a tela ao clicar em "Tente Novamente"
retryBtn.addEventListener('click', () => {
    heartBackground.classList.add('hidden');
    heartBackground.style.display = 'none'; // Esconde o coração
    retryBtn.style.display = 'none'; // Esconde o botão "Tente Novamente"
    moveBtn.style.display = 'block'; // Mostra o botão "Não"
    heartBtn.style.display = 'block'; // Mostra o botão "Sim"
    message.innerText = 'caneco quando a gente se ver?'; // Restaura a mensagem
});
