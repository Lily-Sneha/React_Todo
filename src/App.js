import "./App.css";
import TaskList from "./components/taskList";
import CompletedTask from "./components/completedTasks";
import State from "./components/state";
import { useState } from "react";
import { hasPointerEvents } from "@testing-library/user-event/dist/utils";
import completedTask from "./components/completedTasks";


// App component declaration hai
function App() {
  const [name, setName] = useState("");   // get input value
  const [newname, setnewName] = useState([]);  // Add task in new list
  const [checkboxes, setnewcheckBoxes] = useState([]);  // Add task to the completed task
  const [edittask, seteditTask] = useState(false);   // new input state
  const [editchange, seteditChange] = useState(" ")


  // added value in task list after clicking on add button
  const handleClick = () => {
    // ...(spread operator)se purani value jo name dala gya hai vo v aa rha hai sath hi new name me dala gya value v store ho rha hai.
    setnewName([...newname, name])
    setName("")
    // console.log(handleClick)
  }


  // *** Task delete button 
  const deleteitem = (id) => {
    console.log(id);

    // window.confirm used for asking delete confirmation like alert
    if (window.confirm("confirm delete")) {
      var newList = newname.filter((elem, i) => {
        console.log(newList)
        return id !== i;
      })
      setnewName(newList)
    }
  };
  // ***********************************************************


  // Removing taskList item when clicking on checkbox
  const check = (id) => {
    var List = newname.filter((elem, i) => {
      console.log(newname)
      return id !== i;
    })


    // Add tasklist item in completed task when clicking on checkbox
    setnewName(List)
    var dltList = newname.filter((elem, i) => {
      console.log(newname)
      return id == i;
    })
    setnewcheckBoxes([...checkboxes, ...dltList])
  }
  // **************************************************


  // Undo Tasklist item from completed task in Tasklist
  const undo = (id) => {
    var undoList = checkboxes.filter((elem, i) => {
      console.log(checkboxes)
      return id !== i;
    })
    setnewcheckBoxes(undoList)
    var udlst = checkboxes.filter((elem, i) => {
      console.log(checkboxes)
      return id == i;
    })
    setnewName([...newname, ...udlst])
  }
  // ***********************************************************


  // tick button ****************************************
  function editFunc(element) {
    seteditTask(element)
    console.log(element)
  }

  function editbutton(element) {
    console.log(element)
    seteditTask("")
  }
  // **********************************


  // delete item from completedTask
  const deletetasks = (id) => {
    console.log(id);

    if (window.confirm("confirm delete")) {
      var newarray = checkboxes.filter((elem, i) => {
        console.log(newarray)
        return id !== i;
      })
      setnewcheckBoxes(newarray)
    }
  };


  // add value in new array after input items 
  const tickclick = (e) => {
   var newInputArray=[...newname]
   newInputArray[e]=editchange
   setnewName(newInputArray)
   seteditChange("")
  }



  // jsx start
  return (
    <div className="App">
      <h1 className="app-header">Welcome to your To-Do List</h1>
      <div className="container">
        <div className="add-task">
          <input type="text" value={name} placeholder="Add a new task" onChange={event => setName(event.target.value)}></input>
          <button onClick={handleClick}>Add</button>
        </div>

        <div className="tasks-row">
          <TaskList
            task1={newname}
            deletetask={deleteitem}
            checktask={check}
            editbtn={editbutton}
            editbuttton={editFunc}
            edit={edittask}
            newinput={editchange}
            tick={tickclick}
          />

          <CompletedTask
            checktask={checkboxes}
            back={undo}
            dltcompletetsk={deletetasks} />

          {/* <State /> */}
        </div>
      </div>
    </div>

  );
}
export default App;
