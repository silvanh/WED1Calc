$(function() {
    var operand1;
    var operand2;
    var operator = '';

    $('.numberButton').on('click', function() {
        var number = $(this).attr('name');
        $('#outputField').attr('value', function(i, origValue) {
            if(origValue === operator || origValue === '0'){
                return number;
            }
            return origValue + number;
        });
    });

    $('.operatorButton').on('click', function() {
        operator = $(this).attr('name');
       $('#outputField').attr('value', function(i, origValue) {
            operand1 = origValue;
            return operator;
       });
    });

    $('#sumButton').on('click', function() {
        $('#outputField').attr('value', function(i, origValue) {
            operand2 = origValue;
            if(operator === '+'){
                return parseInt(operand1) + parseInt(operand2);
            } else if(operator === '-'){
                return parseInt(operand1) - parseInt(operand2);
            } else if(operator === '*'){
                return parseInt(operand1) * parseInt(operand2);
            } else if(operator === '/'){    
                return parseInt(operand1) / parseInt(operand2);
            }else {
                return origValue;
            }
        });
    });
});