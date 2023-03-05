// Remove icon
function removeItem(e) {
    e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode)
}
function remove(){
    const items = document.getElementsByClassName('remove-item')
    for (const item of items) {
        item.addEventListener('click', function (e) {
            removeItem(e);
        })
    }
}
// Common Function for All
let pNo = 0;
function displayData(cardTitle, cardResult){
    const container = document.getElementById('table-container');
    pNo = parseInt(document.getElementById('table-container').children.length) + 1;
    const tr = document.createElement('tr');
    tr.innerHTML=`
    <td>${pNo}</td>
    <td>${cardTitle}</td>
    <td id="card-result">${cardResult} cm<sup>2</sup></td>
    <td><button class="btn-primary">Covert to m<sup>2</sup></button></td>
    <td ><i class="fa fa-trash remove-item" aria-hidden="true"></i>
    </td>
    `;
    container.appendChild(tr);
    remove();
}



function getNumberValueById(elementId){
    const xField = document.getElementById(elementId);
    const x = xField.value;
    if(x <= 0){
        alert('Please put positive number');
        removeItem(e);

    }
    else{
        return x;

    }
}

// Function For 3 multipication

function calculateThreeValueNumber(value1, value2){
    const fieldX = getNumberValueById(value1);    
    const fieldY = getNumberValueById(value2);
    const resultThreeMultipication = (0.5 * fieldX * fieldY).toFixed(1);
   return resultThreeMultipication;
   
}

// Triangle

document.getElementById('triangle-btn').addEventListener('click', function(){
    const resultTriangle = calculateThreeValueNumber('base-field', 'height-field');
    const cardTitle = document.getElementById('first-card-title').innerText;
    const cardResult = resultTriangle;
    displayData(cardTitle, cardResult);


});

// Rhombus
document.getElementById('rhombus-btn').addEventListener('click', function(){
    const resultRhombus = calculateThreeValueNumber('d1-field', 'd2-field');

    const cardTitle = document.getElementById('fourth-card-title').innerText;
    const cardResult = resultRhombus;
    
    displayData(cardTitle, cardResult);

});

// Pentagon
document.getElementById('pentagon-btn').addEventListener('click', function(){
    const resultPentagon =calculateThreeValueNumber('perimeter-field', 'bottom-field');
    const cardTitle = document.getElementById('fifth-card-title').innerText;
    const cardResult = resultPentagon;
    
    displayData(cardTitle, cardResult);
})

// Function For 2 multipication
function calculateTwoValueNumber(value1, value2){
    const fieldA = getNumberValueById(value1);    
    const fieldB = getNumberValueById(value2);
    const resultTwoMultipication = (fieldA * fieldB).toFixed(1);
    return resultTwoMultipication;
}
// Rectangle
document.getElementById('rectangle-btn').addEventListener('click', function(){
    const resultRectangle = calculateTwoValueNumber('width-field', 'length-field');

    const cardTitle = document.getElementById('second-card-title').innerText;
    const cardResult = resultRectangle;
    
    displayData(cardTitle, cardResult);
});
// Parallelogram
document.getElementById('parallelogram-btn').addEventListener('click', function(){
    const resultParallelogram= calculateTwoValueNumber('body-field', 'high-field');
    const cardTitle = document.getElementById('third-card-title').innerText;
    const cardResult = resultParallelogram;
    
    displayData(cardTitle, cardResult);
});

// Ellipse 
function calculateValueNumber(value1, value2){
    const field1 = getNumberValueById(value1);    
    const field2 = getNumberValueById(value2);
    const resultMultipication = (3.14 * field1 * field2).toFixed(1);
    return resultMultipication;
}
document.getElementById('ellipse-btn').addEventListener('click', function(){
    const resultEllipse= calculateValueNumber('area-field', 'b-field');
    const cardTitle = document.getElementById('last-card-title').innerText;
    const cardResult = resultEllipse;
    
    displayData(cardTitle, cardResult);
});
