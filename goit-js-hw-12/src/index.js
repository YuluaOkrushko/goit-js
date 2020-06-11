import './style.css';
import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core';
import fetchCountries from './fetchCountries.js';
import debounce from 'lodash.debounce';

let input_text = document.querySelector('.input_text');

let search = async() => {
    let promise = fetchCountries(input_text.value);
    let result = await promise;
    if (!result) {
        error({
            text: 'No Countries Found',
            closer: false,
            sticker: false,
            destroy: true,
            delay: 500,
        });
    }
    if (result.length > 10) {
        error({
            text: 'Too many matches found. Please enter a more specific query!',
            closer: false,
            sticker: false,
            destroy: true,
            delay: 500,
        });
    }
};
input_text.addEventListener('input', debounce(search, 500));