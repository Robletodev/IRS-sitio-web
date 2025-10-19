 
        // JavaScript para el menú móvil
        document.getElementById('menuToggle').addEventListener('click', function () {
            const navMenu = document.getElementById('navMenu');
            navMenu.classList.toggle('nav-active');
        });

        // JavaScript para el selector de fondo
        document.querySelectorAll('.bg-option').forEach(option => {
            option.addEventListener('click', function () {
                const bgType = this.getAttribute('data-bg');
                document.querySelector('.hero').className = 'hero bg-' + bgType;

                document.querySelectorAll('.bg-option').forEach(opt => {
                    opt.classList.remove('active');
                });
                this.classList.add('active');
            });
        });

        // JavaScript básico para el carrusel
        document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
            dot.addEventListener('click', function () {
                const track = document.querySelector('.carousel-track');
                track.style.transform = `translateX(-${index * 100}%)`;

                document.querySelectorAll('.carousel-dot').forEach(d => {
                    d.classList.remove('active');
                });
                this.classList.add('active');
            });
        });
    

      
        // JavaScript para el carrusel de tarjetas
        document.addEventListener('DOMContentLoaded', function () {
            const track = document.querySelector('.carousel-track');
            const cards = document.querySelectorAll('.carousel-card');
            const dots = document.querySelectorAll('.carousel-dot');

            let currentIndex = 0;
            const cardWidth = cards[0].offsetWidth + 20; // Ancho de la tarjeta + margen

            // Función para mover el carrusel
            function moveCarousel(index) {
                track.style.transform = `translateX(-${index * cardWidth}px)`;

                // Actualizar dots activos
                dots.forEach((dot, i) => {
                    dot.classList.toggle('active', i === index);
                });

                currentIndex = index;
            }

            // Event listeners para los dots
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    moveCarousel(index);
                });
            });

            // Auto slide cada 5 segundos
            setInterval(() => {
                let nextIndex = (currentIndex + 1) % dots.length;
                moveCarousel(nextIndex);
            }, 4000);

        });
    