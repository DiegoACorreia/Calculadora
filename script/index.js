var tela = document.querySelector('#tela');
var clearButton = document.querySelector('#cleaner');
var deleteButton = document.querySelector('#delete')
function add(value){
    tela.value += value;
    switch (tela.value[0]){
        case '*':
            tela.value = '';
        case '/':
            tela.value = '';
        case '.':
            tela.value = '';
        case '**':
            tela.value = '';
        case '-':
            if(tela.value[1] === '+' || tela.value[1] === '.' || tela.value[1] === '/' || tela.value[1] === '*' || tela.value[1] === '-' || tela.value[1] === '**'){
                tela.value= '-';
            }
        case '+':
            if (tela.value[1] === '+' || tela.value[1] === '.' || tela.value[1] === '/' || tela.value[1] === '*' || tela.value[1] === '-' || tela.value[1] === '**'){
                tela.value= '+';
            }
    }
}
function result(){
    tela.value = eval(tela.value);
}
deleteButton.onclick = function(){
    tela.value = tela.value.substring(0, (tela.value.length -1))
}
clearButton.onclick = function(){
    tela.value = '';
}