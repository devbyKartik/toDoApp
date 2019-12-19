import React, { useState, useRef } from 'react';
import "./toDo.scss";
import ToDoList from "../../objects/toDoList/ToDoList";
import { todoData, titleErrorMsg } from "../../../static/staticData";
import { randomId } from "../../../static/basicFunction";

/**
 *Name: ToDo
 *Desc: Render ToDo with ToDo child component with static data.
 */


function ToDo() {
    // set hook for useState.
    const [toDos, setToDo] = useState(todoData);
    const [titleError, setTitleError] = useState(false);
    // set hook for useReff.
    const labelInputRef = useRef();
    const onAddButtonClick = () => {
        const labelInput = labelInputRef.current;
        const title = labelInput.value.trim();
        if(title.length <= 0) {
            setTitleError(true);
            return false;
        } else {
            const id=randomId();
            setToDo([...toDos,{ id, title, status: false }
            ]);
            labelInput.value = "";
        }
     };
    
    const onUpdateToDos = (newToDos) =>setToDo(newToDos);
   
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <label>Title <span className="text text-danger">*</span></label>
                        <input type="text" placeholder="Enter Title"  ref={labelInputRef} className="form-control" />
                        {titleError && <p className="text text-danger">{titleErrorMsg}</p>}
                    </div>
                    <div className="form-group">
                        <button type="button" onClick={onAddButtonClick} className="btn btn-info">Submit</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <ToDoList
                        toDos={toDos}
                        onUpdateToDo={onUpdateToDos}
                    />
                </div>
            </div>
        </div>
    );
}

export default ToDo;