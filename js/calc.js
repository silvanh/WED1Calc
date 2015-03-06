/**
 * Created by silvan on 3/6/15.
 */
window.addEventListener("load", function(){
    var numberFields = document.querySelectorAll(".numberFields *");
    for(var i=0;i<numberFields.length;i++) {
        var currentValue = numberFields[i].value;
        numberFields[i].addEventListener('click',setValueOfHeader(numberFields[i].value));
    }
});


function setValueOfHeader(x){
    console.log("clicked with value = "+x);
    var headField = document.querySelector(".header *");
    headField.value=x;
}