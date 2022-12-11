import { useState } from "react";

// state############3

function Mycomponent() {
    let [click, Setclick] = useState(false);
    // let [newcolor, SetColor] = useState("black");

    function clicked() {

        // ***** function to change state----------------------
        // SetText("upper");
        // SetColor("red");

        // **** condition to change state in color----dynamic condition------------
        // if (text == "lower") {
        //     SetText("upper");
        //     SetColor("red");

        // } else {
        //     SetText("lower");
        //     SetColor("black");

        // }
        // if (clicked == true) {
        //     SetText(<input type="text" placeholder="add task"></input>)
        //     SetColor((<input type="text" placeholder="add task"></input>))
        // }
        // else {
        //     SetText(<input type="text" placeholder="add task"></input>)
        //     SetColor((<input type="text" placeholder="add task"></input>))

        // }

        Setclick(true)
    }

    return (
        <div className="state-div">
            {/* <p style={{ color: newcolor }}>{text}</p> */}
            {/* <div>This paragraph will show in input field.</div> */}
            {
                click == true ?
                    <input type="text" placeholder="add task"></input>
                    :
                    <p>hello</p>
            }

            <button onClick={clicked}>click</button>

        </div>
    )
}
export default Mycomponent;