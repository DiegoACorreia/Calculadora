var screen = document.querySelector('#screen');
var cleanerButton = document.querySelector('#cleaner');
var deleteButton = document.querySelector('#delete');
function addToScreen(value){
    screen.value += value;
    function verifyAtualValor(value){
        if (value === '+' || value === '-' || value === '*' || value === '/' || value === '.'){ return true}
        else { return false }
    }
    if (verifyAtualValor(value)){
        var valorAnterior = screen.value.length - 2;
        if (screen.value[valorAnterior] === '+' || screen.value[valorAnterior] === '-' || screen.value[valorAnterior] === '*' || screen.value[valorAnterior] === '/' || screen.value[valorAnterior] === '.'){
            screen.value = screen.value.substring(0, (screen.value.length - 2));
            screen.value = screen.value + value;
        }
    }
    switch (screen.value[0]){
        case '*':
            screen.value = '';
        case '/':
            screen.value = '';
        case '.':
            screen.value = '';
        case '**':
            screen.value = '';
    }
}
function result(){
    screen.value = eval(screen.value);
}
deleteButton.onclick = function(){
    screen.value = screen.value.substring(0, (screen.value.length -1));
}
cleanerButton.onclick = function(){
    screen.value = '';
}