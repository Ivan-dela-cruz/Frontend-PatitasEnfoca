import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { array } from 'prop-types';

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false }
];


const permisos = [
    { id: "1", nombre: "Empresa Giller", completed: true },
    { id: "2", name: "Empresa Andrade", completed: false },
    { id: "3", name: "Empresa Carlos", completed: false }
  ];

  let myInt = 5;
  let myFloat = 6.667;
  //console.log(myInt+myFloat);

  //console.log("Aumentadores");
  let num1=100;
  //console.log(num1++)
  //.log(num1++)

  let x=50;
  x*=4;
   // console.log("Remainder")
//console.log(x);

let y;
//y=(457-7)/3
y=50*3;
y+=50;
//console.log("Remainder y")
//console.log(y);


/// exam 
let a=[2,1,3,5,3,2];

//cojo el numero de indice 0
//luego busco ese numero si es ducplicado le ingreso en un array 
//y guardo el indice en otro array

function duplicateb(a){
  for(let i=0; i<a.length; i++){
   const  num=a[i];
   if(a.indexOf(num)!==i) return num;
  }
  return -1
};




function duplicate(a){
let arregloduplicados=[];
let arregloindices=[];

for(let i=0; i<a.length; i++){
let u=a[i];
//console.log(u);
  for(let h=i+1; h<a.length;  h++ ){
     if(u===a[h]){
      arregloduplicados.push(u);
      arregloindices.push(h);
     }
  }   
}

if(arregloduplicados.length===0){

return -1;
 
}else{

console.log(arregloduplicados);
console.log(arregloindices);
let min=arregloindices[0];
let indicemenor=0;
for(let i=1; i<arregloindices.length; i++){
 if(min>arregloindices[i]){
    min=arregloindices[i];
    indicemenor=i;
 }
}
return  arregloduplicados[indicemenor];
}

}
console.log('------');
console.log(duplicateb(a));
console.log('------');


let result = 1042;
let result2 = 0.01
result=result* result2;
let finalResult = result.toFixed(2);
console.log(finalResult);
console.log(typeof finalResult );
let finalNumber= finalResult*1;
console.log(typeof finalNumber );



class AppIndex extends React.Component {
    render() {
      return (
    <React.Fragment>
    <App tasks={DATA} permisos={permisos}/>
    </React.Fragment>
    )
}
}

export default AppIndex
