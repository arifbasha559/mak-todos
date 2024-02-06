// import React from 'react'
import { useEffect, useState } from "react";
import Card from "./Card";

const Cards = () => {
  // eslint-disable-next-line no-unused-vars
  const refresh = ()=>{

    location.reload();
  }
  function deleteTodo(title) {
    // Retrieve existing todos from local storage
    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    // Find the index of the todo with the specified title
    const indexToDelete = todos.findIndex((todo) => todo.title === title);
    console.log(indexToDelete);
    // If the todo with the specified title is found, remove it
    if (indexToDelete !== -1) {
      todos.splice(indexToDelete, 1);

      // Save the updated todos back to local storage
      localStorage.setItem("todos", JSON.stringify(todos));

      
    } else {
      console.log(` `);
    }
    refresh();
  }
  
  // const storedTodos = JSON.parse(localStorage.getItem('todos'));
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    // Fetch todos from local storage when the component mounts
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
    
  }, []);
  
  // console.log(todos);
  return (
    <div className="md:px-36 flex flex-wrap gap-5 ">
      
      {
        todos.map((todo, index) => {
          // console.log(todo);
          if (todo.title==""||todo.description=="") {
            
            deleteTodo(todo.title)
            
          } else {
            
            return (
              <Card key={index} no={index} title={todo.title} desc={todo.description} icon={todo.icon} deleteBtn={deleteTodo}  />
            )
          }
        })}
    </div>
  );
};

export default Cards;
