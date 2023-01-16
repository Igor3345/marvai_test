export const form = () => {

    const buttons = document.querySelectorAll('.js-form-call');
    const form = document.querySelector('.js-modal-form');
    const close = document.querySelector('.js-form-close');
    const inputs = document.querySelectorAll('.js_form-input');

    for(let i = 0 ; i < buttons.length; i++){
        buttons[i].onclick = modal_open
    }

    close.onclick = modal_close

    function modal_open(){
        form.classList.add('modal_layout--open')
    }

    function modal_close(){
        form.classList.remove('modal_layout--open')
    }


    for(let i = 0; i < inputs.length; i++){
        inputs[i].onclick = focused
    }

    function focused(e){
        let target = e.target;

        if(target.closest('.js_form-input')){
            let item = target.closest('.js_form-input')
            item.classList.add('modal_form__input-open');

            for(let i = 0; i < inputs.length; i++){
                if(inputs[i] !== item && inputs[i].querySelector('input').value === ''.trim()){
                    inputs[i].classList.remove('modal_form__input-open');
                }
            }
        }
    }

    form.onclick = (e) => {
        let target = e.target;
        for(let i = 0; i < inputs.length; i++){
            if(!target.closest('.js_form-input') && inputs[i].querySelector('input').value === ''.trim()){
                inputs[i].classList.remove('modal_form__input-open');
            }
        }
    }

    form.onsubmit = (e) => {
        let inputs = document.querySelectorAll('.js-validation');
        for(let i = 0; i < inputs.length; i++){
            if(inputs[i].value === ''.trim()){
                e.preventDefault()
                inputs[i].closest('.modal_form__input_wrapper').classList.add('modal_form__input_error')
            }else{
                inputs[i].closest('.modal_form__input_wrapper').classList.remove('modal_form__input_error')
            }
        }
    }
}