import React, { useState } from 'react';
import {useSelector, useDispatch} from "react-redux";
import {increment} from "./actions";
import {decrement} from "./actions";
import {addTask} from "./actions";
import {connect} from "redux";
import {UsersList} from "./reducers/UsersList";
 

function App() {
  const counter = useSelector(state=> state.counterReducer);
  const isLogged= useSelector(state=>state.isLogged);
  const taskList= useSelector(state=> state.addTaskReducer);
  const [taskName, setTaskName] = React.useState("");
  const usersList= useSelector(state=>state.usersReducer);

  const dispatch = useDispatch();

  return (
    <div className="container"
    width=""
    >
      <h1>Ana's counter = {counter} </h1>
    
      <button onClick={()=>dispatch(increment())}
      >+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>

      {isLogged? 
      <h3>Valuable information that's a secret </h3>
      :'' }


        <form>
        <h1>Make your todo list here</h1>
        <p>Enter your Tasks:</p>
        <input
          type="taskname"
          name="taskname"
          value={taskName}
          onChange={(e)=>setTaskName(e.target.value)}
        />
      </form>
        <br/>
         <button
         onClick={()=> dispatch(addTask(taskName))}
         
         >Submit</button>

        <h3>And here's the task list:</h3>
        {taskList.map?
          taskList.map((task)=>
          <p>{task.taskName}</p>)
          :null}
        <h4>And here is the users List: </h4>
        {UsersList}
          
          
    </div>

  );
}

export default App;
