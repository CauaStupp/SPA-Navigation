export default function moduleChangeText() {
    const btns = document.querySelectorAll('.container-nav-link a');
    const about = document.querySelector('.container.text');
    const texts = document.querySelectorAll('.container-text');

    btns[0].classList.add('active');

    about.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        const element = document.getElementById(id);

        if (id) {
            btns.forEach(btn => {
                e.preventDefault();
                btn.classList.remove('active');
                e.target.classList.add('active');
            });

            texts.forEach(text => {
                text.classList.remove('active');
                element.classList.add('active');
            })
        }
        
    })
}


