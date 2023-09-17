var modernSlider = new Swiper ('.swiper-container', {

    slidesPerView: 'auto',
    spaceBetween: 100,
    centeredSlides: true,
    mousewheel: true,
    autoplay: true,
});


modernSlider.on('slideChange', function(){
    TweenMax.to('.reveal', .2, {
        y: '-50px',
    })

    TweenMax.to('.swiper-slide', .2, {
        scale: .95,
    })
});

modernSlider.on('slideChangeTransitionEnd', function(){
    TweenMax.to('.reveal', 0, {
        y: '-50px',
    })

    TweenMax.to('.reveal', .2, {
        y:0,
        delay: .5,
    })

    TweenMax.to('.swiper-slide-active .port-text', 0, {
        autoAlpha: 1,
    })

    TweenMax.to('.swiper-slide-next .port-text', 0, {
        autoAlpha: 0,
    })

    TweenMax.to('.swiper-slide-prev .port-text', 0, {
        autoAlpha: 0,
    })

    TweenMax.to('.swiper-slide-active', .5, {
        scale: 1,
        ease: Power4.easeCut,
    })
});

TweenMax.to('.swiper-slide-prev .port-text', 0, {
    autoAlpha: 0,
})

TweenMax.to('.swiper-slide-next .port-text', 0, {
    autoAlpha: 0,
})

TweenMax.to('.swiper-slide-active', 0, {
    scale: 1,
    ease: Power4.easeCut,
})

TweenMax.to('.swiper-slide', 0, {
    scale: .95,
})


// Selecione os botões
const prevButton = document.getElementById('swiper-prev');
const nextButton = document.getElementById('swiper-next');

// Adicione ouvintes de eventos aos botões
prevButton.addEventListener('click', () => {
    modernSlider.slidePrev(); // Slide anterior
});

nextButton.addEventListener('click', () => {
    modernSlider.slideNext(); // Próximo slide
});