export const swiper = async () => {

    const {
        Swiper,
        Autoplay,
    } = await


        import ( /* webpackChunkName: "swiper" */ 'swiper');

    let anchors = document.querySelectorAll('.js-swiper-anchor');

    let top_slider = new Swiper('.js-swiper', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
    })

    for(let i =0 ; i < anchors.length; i++){
        anchors[i].onclick = () => {switchSlide(i)}
    }

    function switchSlide(index){
        console.log(index)
        top_slider.slideTo(index, 600, false)
    }

    
        
}