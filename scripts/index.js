let search = document.querySelector('.search__input');

function offPlaceholder(){
    search.setAttribute('placeholder', '')
}

function onPlaceholder(){
    search.setAttribute('placeholder', '🔍Поиск')
}

search.addEventListener('focus', offPlaceholder);
search.addEventListener('blur', onPlaceholder);