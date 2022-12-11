import { Component } from "react";
import completedTask from "./completedTasks";
import { useState } from "react";

// child component name
function TaskList(props) {
    console.log(props)

    // return jsx
    return (
        <div className="task-list">
            <h3 className="task-list-header">Task List</h3>

            {/* javascript start */}
            {/* props receive from Appjs parent, for printing one by one */}
            {props.task1.map((arr, index) => {
                return (
                    <div className="task-list-item" key={index} >
                        <div className="task1">
                            <input type="checkbox" onClick={() => props.checktask(index)} />
                            {/* <p className="task-name">{arr}</p> */}
                        </div>


                        {/* if condition for edit and tick */}
                        <div className="image">
                            {
                                props.edit === index ?
                                    <div className="images">
                                        <input defaultValue={arr}
                                            type="text"
                                            placeholder="add task"
                                            onChange={props.newinput}>
                                        </input>
                                        <img className="check-img" src="/assets/check.png" alt="#" onClick={() => props.editbtn()} />
                                    </div>
                                    :
                                    <div className="images">
                                        <p>{arr}</p>
                                        <img className="edit-img" src="/assets/edit.png" alt="#" onClick={() => props.editbuttton(index)} />
                                    </div>
                            }

                            {/* <img className="edit-img" src="/assets/edit.png" alt="#" onClick={editbtn} /> */}
                            <img src="/assets/delete.png" alt="#" onClick={() => props.deletetask(index)} />
                        </div>
                    </div>
                )
            })

            }

            {/* javascript end */}
        </div>
    )
}

export default TaskList;