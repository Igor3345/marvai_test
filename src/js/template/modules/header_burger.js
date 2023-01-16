export const header_burger = () => {
    const burger = document.querySelector('.js-header_burger');
    const navigation = document.querySelector('.js-header_navigation');
    const burger_side = document.querySelector('.js-burger-side');
    const header = document.querySelector('.js-header');

    burger.onclick = burger_switch

    function burger_switch(){
        burger.classList.toggle('header__burger--open');
 
            navigation.classList.toggle('--opened');
    }
}