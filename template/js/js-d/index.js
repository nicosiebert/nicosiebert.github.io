
let header_search_button = $('.header-search-button');
let header_search_input = $('.header-search-input');
    header_search_button.addEventListener('click', e=>{
    header_search_input.classList.remove('invisible');
    header_search_input.style = "width:180px"
})
header_search_input.addEventListener('mouseleave', e=>{
    header_search_input.classList.add('invisible')
    header_search_input.style = "width:0"
})
header_search_input.addEventListener('keypress', e=>{
    $('.section').innerHTML = header_search_input.value
})

