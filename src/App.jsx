// import React from 'react'
import Navbar from "./components/Navbar";
import "./App.css";
import Cards from "./components/Cards";
import Input from "./components/Input ";
import { useState } from "react";
// import Icons from "./components/Icons";
const App = () => {
  function addOrUpdateTodo(title, description) {
    // Retrieve existing todos from local storage
    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    // Find the index of the todo with the specified title
    // const existingTodoIndex = todos.findIndex((todo) => todo.title === title);

    // if (existingTodoIndex !== -1) {
      
    //   alert(`Todo with title "${title}" already exists. Please choose a different title.`);
      
    // } else {
    //   // If the todo with the specified title does not exist, add it
    // a  todos.push({ title, description});
    // }
    const isDuplicate = todos.some(todo => todo.title === title );

    if (isDuplicate) {
    alert(`Todo with title "${title}" already exists. Please choose a different title.`);
    // console.log(`Todo with title "${title}"  already exists. Please choose a different title.`);
    // console.log(todos);
  } else {
    // Add new todo to the array
    todos.push({ title, description });}
    // Sort todos based on titles
    todos.sort((a, b) => a.title.localeCompare(b.title));
    // Save the updated todos back to local storage
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  
  
  let [inp,setInp]= useState("-translate-y-[200%]") ;
  const inputa = () => {
  if(inp !=="-translate-y-[200%]"){
    setInp('-translate-y-[200%]')
  }
  else{
    setInp('translat')
  }
}
  
  return (
    <div className=" relative w-screen h-screen bg-slate-900  pt-20  overflow-x-hidden">
      <Navbar create={inputa} />
      <Cards />
      <Input toggle={inp} create={inputa} addTodo={addOrUpdateTodo} />
      {/* <Icons/> */}
    </div>
  );
};

export default App;
