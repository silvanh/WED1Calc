$(function() {
    var operand1;
    var operand2;
    var operator = '';
    var isResult = false;

    $(".numberFields > input").on('click', function(){
        var number = $(this).attr('name');
        $('#outputField').attr('value', function(i, origValue) {
            if(origValue === operator || origValue === '0' ){
                return number;
            }else if(isResult){
                isResult=false;
                operator='';
                return number;
            }
            return origValue + number;
        });
    });

    $(".operations > input").on('click',function(){
        operator = $(this).attr('name');
        $('#outputField').attr('value', function(i, origValue) {
            operand1 = origValue;
            isResult=false;
            return operator;
        });
    });

    $('#sumButton').on('click', function() {
        $('#outputField').attr('value', function(i, origValue) {
            if(!isResult) {
                operand2 = origValue;
            }
            if(operator === '+'){
                operand1=parseInt(operand1) + parseInt(operand2);
                isResult=true;
                return operand1;
            } else if(operator === '-'){
                operand1=parseInt(operand1) - parseInt(operand2);
                isResult=true;
                return operand1;;
            } else if(operator === '*'){
                operand1=parseInt(operand1) * parseInt(operand2);
                isResult=true;
                return operand1;
            } else if(operator === '/'){
                operand1=parseInt(operand1) / parseInt(operand2);
                isResult=true;
                return operand1;
            }else {
                return origValue;
            }
        });
    });
});