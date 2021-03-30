import React, { useState } from "react";



function Form(props) {
  const [name, setName] = useState('INTERESANTE');


  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) {
      return;
    }
    props.addTask(name);
    setName("");
  }

  function handleChange(e) {
      console.log(e.target.value);
    setName(e.target.value);
  }

  function paraButtonCLick(){
    let myName="Andres Piedra";
    let myAge;
    let name = prompt('What is your name?'+myName +" Cuya edad ahora es de  "+myAge);
    alert('Hello ' + name + ', nice to see you!');
  }

  let myAge=null;

  const myhu= "andres";


  let dolphinGoodbye = "So long and thanks for all the fish";


  console.log(dolphinGoodbye);

  let dog = { name : 'Spot', breed : 'Dalmatian' };

  
  console.log(dog.name);

  console.log(typeof myAge);


  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
        Escriba las tareas que se van agregar por favor 
        </label>
      </h2>

      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Agregar
      </button>
      <button type="button" className="btn btn__primary btn__lg" onClick={paraButtonCLick}>
        Accion Agregada
      </button>
    </form>
  );
}

export default Form;
