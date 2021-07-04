'use strict';
console.log('Hello');
const FirstImageElement = document.getElementById('first-image');
const SecondImageElement = document.getElementById('second-image');
const ThirdImageElement = document.getElementById('third-image');

const maxAttempts = 10;
let counter = 0;
let NumberOfDisplays = 0;


function generateRandomIndex() {
    return Math.floor(Math.random() * Product.globalArray.length);
}

// Function constructor

function Product(Name, Source) {
    this.Name = Name;
    this.Source = Source;
    this.votes = 0;
    this.shownnumber = 0;
    Product.globalArray.push(this);
}

Product.globalArray = [];

new Product('bag', 'images/bag.jpg');
new Product('banana', 'images/banana.jpg');
new Product('bathroom', 'images/bathroom.jpg');
new Product('boots', 'images/boots.jpg');
new Product('breakfast', 'images/breakfast.jpg');
new Product('bubblegum', 'images/bubblegum.jpg');
new Product('chair', 'images/chair.jpg');
new Product('cthulhu', 'images/cthulhu.jpg');
new Product('dog-duck', 'images/dog-duck.jpg');
new Product('dargon', 'images/dragon.jpg');
new Product('pen', 'images/pen.jpg');
new Product('pet-sweep', 'images/pet-sweep.jpg');
new Product('scissors', 'images/scissors.jpg');
new Product('shark', 'images/shark.jpg');
new Product('sweep', 'images/sweep.png');
new Product('tauntaun', 'images/tauntaun.jpg');
new Product('unicorn', 'images/unicorn.jpg');
new Product('water-can', 'images/water-can.jpg');
new Product('wine-glass', 'images/wine-glass.jpg');
//console.log(Product.globalArray);

let FirstIndex;
let SecondIndex;
let ThirdIndex;

function renderThreeimages() {
    FirstIndex = generateRandomIndex();
    SecondIndex = generateRandomIndex();
    ThirdIndex = generateRandomIndex();

    while (FirstIndex === SecondIndex || FirstIndex === ThirdIndex || SecondIndex === ThirdIndex) {
        FirstIndex = generateRandomIndex();
        SecondIndex = generateRandomIndex();
        ThirdIndex = generateRandomIndex();

    }


    //console.log(FirstIndex);
    //console.log(SecondIndex);
    //console.log(ThirdIndex);
    FirstImageElement.src = Product.globalArray[FirstIndex].Source;
    Product.globalArray[FirstIndex].shownnumber++;
    console.log(  Product.globalArray);
    SecondImageElement.src = Product.globalArray[SecondIndex].Source;
    Product.globalArray[SecondIndex].shownnumber++;
    ThirdImageElement.src = Product.globalArray[ThirdIndex].Source;
    Product.globalArray[ThirdIndex].shownnumber++;


}

renderThreeimages()

function renderList() {
    //alert('Hi');
    const ul = document.getElementById('unList');
    for (let i = 0; i < Product.globalArray.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `${Product.globalArray[i].Name} had ${Product.globalArray[i].votes } votes, and was seen ${ Product.globalArray[i].shownnumber} `
    }
    FirstImageElement.removeEventListener('click', handleclick);
    SecondImageElement.removeEventListener('click', handleclick);
    ThirdImageElement.removeEventListener('click', handleclick);

}






// FirstImageElement.width = '50%';
//SecondImageElement.width='50%';
//ThirdImageElement.width='50%';

FirstImageElement.addEventListener('click', handleclick);
SecondImageElement.addEventListener('click', handleclick);
ThirdImageElement.addEventListener('click', handleclick);


function handleclick(event) {
    counter++;

    if (maxAttempts >= counter) {
        if (event.target.id === 'first-image') {
            Product.globalArray[FirstIndex].votes++;
            console.log('string test ');
        } else if (event.target.id === 'second-image') {
            Product.globalArray[SecondIndex].votes++;
        }
        else if (event.target.id === 'third-image') {
            Product.globalArray[ThirdIndex].votes++;
            
        } 
        renderThreeimages()
    } else {
        let clickMeButton = document.getElementById('myButton');
        clickMeButton.addEventListener('click', renderList);

        //renderList();
    }
}







//let clickMeButton = document.getElementById('myButton');
//clickMeButton.addEventListener('click', renderList);

