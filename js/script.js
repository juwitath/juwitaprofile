const txtElement = ['Welcome To My Profile Website']
let count = 0
let txtindex = 0
let currentTxt = '';
let words = '';

(function ngetik() {
    if (count == txtElement.length){
        count = 0;
    }

    currentTxt = txtElement [count];

    words = currentTxt.slice (0, ++txtindex);
    document.querySelector ('.efek-ngetik').textContent = words;

    setTimeout (ngetik, 500);
})()
