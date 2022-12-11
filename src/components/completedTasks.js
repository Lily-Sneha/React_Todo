// import { Component } from "react"

// Child Component
function completedTask(props) {
    console.log(props)

    // return jsx
    return (
        <div className="completed-task">
            <h3 className="task-list-header">Completed Tasks</h3>
            
            {/* javascript start */}
            {props.checktask.map((arr, index) => {
                console.log(arr)
                return (

                    <div className="task-list-item" key={index}>
                        <img src="/assets/undo.png" alt="#" onClick={() => props.back(index)} />
                        <p className="completed-task-name" >{arr}</p>
                        <img src="/assets/delete.png" alt="#" onClick={() => props.dltcompletetsk(index)} />
                    </div>)
            })}
            {/* javascript end */}
        </div>
    )
}
export default completedTask;