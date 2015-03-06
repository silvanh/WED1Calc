/**
 * Created by silvan on 3/6/15.
 */
window.addEventListener("load", function(){
    var numberFields = document.querySelectorAll(".numberFields *");
    var operators = document.querySelectorAll(".operations *");
    for(var i=0;i<numberFields.length;i++) {
        numberFields[i].addEventListener('click',setValueOfHeader);
    }
    for(var i=0;i<operators.length;i++) {
        operators[i].addEventListener('click',setValueOfHeader);
    }
    document.querySelector(".sum *").addEventListener('click',clearValueOfHeader );
});


function setValueOfHeader(){
    var headField = document.querySelector(".header *");
    headField.value=this.value;
}

function clearValueOfHeader(){
    var headField = document.querySelector(".header *");
    headField.value="";
}