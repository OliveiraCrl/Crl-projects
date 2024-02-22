import { double, name} from './lib.js';
console.log(double(5));
console.log(name);



const elem = document.getElementById("name");

const elem2 = document.getElementById("calc");

elem.innerText=name;

elem2.innerText=double(5);