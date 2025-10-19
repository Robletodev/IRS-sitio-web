 
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
    