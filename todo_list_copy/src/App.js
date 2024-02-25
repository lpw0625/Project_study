import './App.css';
import React, {useState} from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";

function App() {
  const [isCompleteScreen,setIsCompleteScreen] = useState(false);
  const [allTodos, seTodos] = useState([]);
  const [newTitle,setNewTitle] = useState("");
  const [newDescription,setNewDescription] = useState("");
  return (
    <div className="App">
      <h1>My Todos</h1>

      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title</label>
            <input type="text" value={newTitle} 
              placeholder="작업 제목."/>
        </div>
        <div className="todo-input-item">
            <label>설명</label>
            <input type="text" placeholder="작업에 대해 설명."/>
        </div>
        <div className="todo-input-item">
          <button type="button"className="primaryBtn">추가</button>
          </div>
        </div>

        <div className="btn-area">
            <button className={`secondaryBtn 
                        ${isCompleteScreen===false && 'active'}`}
                          onClick={()=>setIsCompleteScreen(false)}
                            >Todo</button>

            <button className={`secondaryBtn 
                      ${isCompleteScreen===true && 'active'}`}
                          onClick={()=>setIsCompleteScreen(true)}                                
                              >Completed</button>
        </div>
         <div className="todo-list">
            <div className="todo-list-item">
              <div>
                  <h3>Plan</h3>
                  <p>설명</p>
                </div>

                  <div>
                   <AiOutlineDelete className= "icon"/>
                   <BsCheckLg className= "check-icon"/>
                  </div>

                  </div>

                </div>
              </div>
            </div>
          
  );
}

export default App;
