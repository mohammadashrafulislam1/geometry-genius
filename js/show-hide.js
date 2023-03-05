// function getValueById(elementId){
//     const xField = document.getElementById(elementId);
//     const x = xField
// }
// function getTheField(value1, value2){
//     const fieldX = getNumberValueById(value1);    
//     const fieldY = getNumberValueById(value2);
    
// }

// Function for all to set numbers
function getValueNumber(value){
    const xField = document.getElementById(value);
    const x = parseInt(xField.value);
    return x;
}

function setElementNumber(value, elementId){
    const xElement = document.getElementById(value);
    xElement.innerText = elementId;

}
document.getElementById('edit-btn').addEventListener('click', function(){
    const hideArea = document.getElementById('hide-area');
    const showHideArea = hideArea.style.display ='block';
})
// For Tringle
document.getElementById('done-btn').addEventListener('click', function(){
    const hideArea = document.getElementById('hide-area');
    const showHideArea = hideArea.style.display ='none';
   
    const valueNumber1 = getValueNumber('base-field');
    const valueNumber2 = getValueNumber('height-field');
    const element1 = setElementNumber('base-element', valueNumber1);
    const element2 = setElementNumber('height-element', valueNumber2);
})