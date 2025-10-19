 
        // JavaScript para funcionalidades básicas
        document.addEventListener('DOMContentLoaded', function () {
            // Formulario de newsletter
            const newsletterForm = document.querySelector('.newsletter-form');
            if (newsletterForm) {
                newsletterForm.addEventListener('submit', function (e) {
                    e.preventDefault();
                    const email = this.querySelector('input[type="email"]').value;
                    alert(`¡Gracias por suscribirte con el email: ${email}!`);
                    this.reset();
                });
            }

            // Efecto de carga de posts
            const posts = document.querySelectorAll('.post');
            posts.forEach((post, index) => {
                post.style.opacity = '0';
                post.style.transform = 'translateY(20px)';
                post.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

                setTimeout(() => {
                    post.style.opacity = '1';
                    post.style.transform = 'translateY(0)';
                }, 100 + (index * 100));
            });

            console.log('Blog cargado correctamente');
        });
    