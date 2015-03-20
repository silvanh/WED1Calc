$(function () {
    "use strict";
    var operand1 = 0,
        operand2 = 0,
        operator = '',
        isResult = false;

    $(".numberFields > input").on('click', function () {
        var number = $(this).attr('name');
        $('#outputField').attr('value', function (i, origValue) {
            if (origValue === operator || origValue === '0') {
                return number;
            }
            if (isResult) {
                isResult = false;
                operator = '';
                return number;
            }
            return origValue + number;
        });
    });

    $(".operations > input").on('click', function () {
        operator = $(this).attr('name');
        $('#outputField').attr('value', function (i, origValue) {
            operand1 = origValue;
            isResult = false;
            return operator;
        });
    });

    $('#sumButton').on('click', function () {
        $('#outputField').attr('value', function (i, origValue) {
            if (!isResult) {
                operand2 = origValue;
            }
            if (operator === '+') {
                operand1 = parseInt(operand1, 10) + parseInt(operand2, 10);
                isResult = true;
                return operand1;
            }
            if (operator === '-') {
                operand1 = parseInt(operand1, 10) - parseInt(operand2, 10);
                isResult = true;
                return operand1;
            }
            if (operator === '*') {
                operand1 = parseInt(operand1, 10) * parseInt(operand2, 10);
                isResult = true;
                return operand1;
            }
            if (operator === '/') {
                operand1 = parseInt(operand1, 10) / parseInt(operand2, 10);
                isResult = true;
                return operand1;
            }
            return origValue;
        });
    });
});