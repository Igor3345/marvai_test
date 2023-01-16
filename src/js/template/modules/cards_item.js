export const cards_item = () => {
    let index = 10;
    const card_place = document.querySelector(".js-card_items");

    const more = document.querySelector('.js-more_link');

    function cach_query(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json =>  construct_items(json))
    }

    function construct_items(items){
        let card = 0;
        let element = document.getElementsByClassName('cards__item');
        while(element.length) {
            element[0].parentNode.removeChild(element[0]);
          }
        
        for(let i = 0; i < index; i++){
            if(card >9){
                card = 0
            }
            card++
            build_card(items[index] , card)
        }

    }

    function build_card(data , card){
        card_place.insertAdjacentHTML('beforeend', `
        <div class="cards__item">
            <div class="cards__item-image"><img src="./images/cards/card${card}.jpg" alt=""/></div>
                <div class="cards__item-content">
                <h3 class="cards__item-title">${data.title}</h3><span class="cards__subtitle">How to increase your productivity with a Music</span>
                <p>${data.body}</p>
                <div class="cards__info"><span class="cards__author">Posted by <a href="javascript:void(0)">Eugenia</a>, </span><span class="cards__date">on July  24, 2019</span></div><a class="card__link" href="javascript:void(0)">Continue reading</a>
            </div>
        </div>
    `)
    }

    more.onclick = () => {
        if(index < 30){
            index = index + 5;
            cach_query()
        }
    }

    document.querySelector('body').onload = cach_query;

}