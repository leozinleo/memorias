document.querySelectorAll('.ver-mais').forEach((btn) => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        console.log(`Clicou no botão: ${targetId}`);
        const target = document.querySelector(targetId);
        if (target) {
            target.classList.toggle('d-none');
            console.log(`Togglando visibilidade de: ${targetId}`);
        } else {
            console.error(`Elemento não encontrado: ${targetId}`);
        }
    });
});

const topBtn = document.getElementById('topBtn');

window.onscroll = () => {
    topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
};

topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
