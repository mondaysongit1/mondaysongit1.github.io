

    // ------------------- PRELOADER FADE OUT -------------------
    window.addEventListener('load', function() {
        const preloader = document.getElementById('preloader');
        if(preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => { preloader.style.display = 'none'; }, 400);
        }
    });

    


