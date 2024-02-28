import './App.css';
import React, {useEffect, useState} from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";

function App() {
  const [isCompleteScreen,setIsCompleteScreen] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [newTitle,setNewTitle] = useState("");
  const [newDescription,setNewDescription] = useState("");

  const handleAddTodo = () => {
    let newTodoItem = {
      title:newTitle,
      description:newDescription,
    };

    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr);
    localStorage.setItem('todolist',JSON.stringify(updatedTodoArr))
  };

  useEffect(()=>{
    let savedTodo = JSON.parse(localStorage.getItem('todolist'));
    if(savedTodo){
      setTodos(savedTodo);
    }
  }, [])

  return (
    <div className="App">
      <h1>My Todos</h1>

      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title</label>

              <input type="text" 
              value={newTitle} 
              onChange={(e)=>setNewTitle(e.target.value) }
               placeholder="작업 제목."/>
                 </div>

        <div className="todo-input-item">
            <label>설명</label>
              <input type="text" value={newDescription} 
              onChange={ e =>setNewDescription(e.target.value)} 
                 placeholder="작업에 대해 설명."/>
        </div>
             <div className="todo-input-item">

                 <button className="primary-btn" type="button" onClick={handleAddTodo}>추가</button>
             </div>
        </div>
      <div className="btn-area">

            <button 
            className={`secondaryBtn 
            ${isCompleteScreen===false && 'active'}`}
             onClick={()=>setIsCompleteScreen(false)}
            >Todo
            </button>

            <button 
             className={`secondaryBtn 
              ${isCompleteScreen===true && 'active'}`}
             onClick={()=>setIsCompleteScreen(true)}                                
                >
                    Completed
                  </button>
              </div>

      <div className="todo-list">

        {allTodos.map((item,index) => {

          return(
            <div className="todo-list-item" key={index}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                </div>

                <div>
                  <AiOutlineDelete className="icon" title="Delete?" />
                  <BsCheckLg className="check-icon" title="Complete?" />
                </div>

            </div>

        )
        }
        
        
        )}

        

      </div>
        
   </div>
          
  </div>

          
    );
}

export default App;
