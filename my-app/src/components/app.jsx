import React, { useState} from "react";

function App(){

     
  

    const [inputText,setInputText]=useState('')
    const [items, setITems]=useState([])

   
    

    function handlechange(event){
      
      const newvalue =event.target.value;
      setInputText(newvalue);
    }

    function addItem(){               
      setITems((prevItem)=>{
       return [...prevItem ,inputText]
      });
      setInputText('');
    }

    

  return (
    <div className="container">
      <div className="heading">
      <h1>To-Do-List</h1>
      </div>
      <div className="form">
        <input onChange={handlechange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
       
      </div>
      <div>
        <ul>
         {items.map(todoItem =>{
          return (
          <>
          <li>{todoItem}</li>
          
          </>
          )
         })}
        </ul>
      </div>

    </div>

  )

}

export default App;




