import './style.css';
import imgService from './apiService';
import imgCard from './templates/image-card.hbs';
import debounce from 'lodash.debounce';

let inputText = document.querySelector('.input_text');
let loadButton = document.querySelector('.load_button');
let page = 1;
let search = async() => {
    page = 1;
    if (inputText.value) {
        let result = await imgService(inputText.value, page);
        document.querySelector('.image_list').innerHTML = imgCard(result.hits);
        loadButton.style.display = 'block';
    } else {
        document.querySelector('.image_list').innerHTML = '';
        loadButton.style.display = 'none';
    }
};
let loadMore = async() => {
    page++;
    let result = await imgService(inputText.value, page);
    document
        .querySelector('.image_list')
        .insertAdjacentHTML('beforeend', imgCard(result.hits));
    window.scrollTo({
        top: window.scrollY + window.screen.height,
        left: 0,
        behavior: 'smooth',
    });
};
loadButton.addEventListener('click', loadMore);
inputText.addEventListener('input', debounce(search, 500));