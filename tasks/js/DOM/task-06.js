//01
/*const list = document.getElementById('list');

const firstItem = list.firstElementChild;
const lastItem = list.lastElementChild;
const secondItem = firstItem.nextElementSibling;
const fourthItem = lastItem.previousElementSibling;
const thirdItem = secondItem.nextElementSibling;

const result = `${firstItem.textContent}, ${lastItem.textContent}, ${secondItem.textContent}, ${fourthItem.textContent}, ${thirdItem.textContent}`;

alert(result);*/


//02
const header = document.querySelector('h1');
const firstParagraph = document.querySelector('div#myDiv p:first-of-type');
const secondParagraph = document.querySelector('div#myDiv p:nth-of-type(2)');
const thirdParagraph = document.querySelector('div#myDiv p:nth-of-type(3)');
const fourthParagraph = document.querySelector('div#myDiv p:nth-of-type(4)');
const list = document.querySelector('#myList');

header.style.backgroundColor = 'green';
header.style.fontWeight = 'bold';

firstParagraph.style.fontWeight = 'bold';

secondParagraph.style.color = 'red';

thirdParagraph.style.textDecoration = 'underline';

fourthParagraph.style.fontStyle = 'italic';

list.style.display = 'flex';
list.style.flexDirection = 'row';
list.style.listStyleType = 'none';

//03
const body = document.createElement("body");
const main = document.createElement("main");
main.setAttribute("class", "mainClass check item");
const div = document.createElement("div");
div.setAttribute("id", "myDiv");
const p = document.createElement("p");
p.textContent = "First paragraph";

div.appendChild(p);
main.appendChild(div);
body.appendChild(main);

document.documentElement.appendChild(body);

//04
const submitButton = document.querySelector('.btn');
const inputFields = document.querySelectorAll('.arr');
const outBlock = document.querySelector('.out');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  let output = '';
  inputFields.forEach((input) => {
    output += `${input.dataset.form}: ${input.value}<br>`;
  });
  
  outBlock.innerHTML = output;
});

//05
const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
  const animationClass = circle.getAttribute('data-anim');
  circle.classList.add(animationClass);
});

circles.forEach(circle => {
  console.log(circle.classList.contains('animate__animated'));
});

//06
const colorElements = document.querySelectorAll('.color');
const priceBlock = document.getElementById('outprice');

let totalPrice = 189.99;

colorElements.forEach(colorElement => {
    colorElement.addEventListener('click', () => {
        const colorPrice = parseInt(colorElement.dataset.price);
        totalPrice += colorPrice;
        priceBlock.innerHTML = totalPrice.toFixed(2);
        colorElements.forEach(otherColorElement => {
            if (colorElement === otherColorElement) {
                otherColorElement.classList.add('active');
            } else {
                otherColorElement.classList.remove('active');
            }
        });
    });
});

const sizes = document.querySelectorAll('.size');

sizes.forEach(size => {
  size.addEventListener('click', () => {
    const price = size.getAttribute('data-price');
    document.getElementById('outprice').textContent = price;
    sizes.forEach(s => s.classList.remove('active'));
    size.classList.add('active');
  });
});

const types = document.querySelectorAll('.type');

types.forEach(type => {
  type.addEventListener('click', () => {
    const price = type.getAttribute('data-price');
    document.getElementById('outprice').textContent = price;
    types.forEach(t => t.classList.remove('active'));
    type.classList.add('active');
  });
});