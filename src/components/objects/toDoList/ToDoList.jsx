

import React from 'react';
import PropTypes from 'prop-types';

/**
 *Name: ToDoList
 *Desc: Render ToDoList with edit add functions
 * @param {*} toDos
 * @param {*} onUpdateToDo
 */


function ToDoList(props) {
  const { toDos, onUpdateToDo } = props;

  const onDeleteButtonClick = (id) => {
    onUpdateToDo(toDos.filter((toDo) => { return (toDo.id !== id) }));
  }

  const onDoneButtonClick = (id) => {
    onUpdateToDo(toDos.map(toDo => (toDo.id === id ? { ...toDo, status: true } : toDo)));
  }

  
  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <th>Title</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        { toDos.length > 0 ? (toDos.map((toDo, index) =>
              <tr key={index}>
                <td>{toDo.title}</td>
                <td>
                  <div className="btn-group f-r" role="group" >
                    {
                      !toDo.status && <button type="button" className="btn btn-success" onClick={() => onDoneButtonClick(toDo.id)}>Done</button>
                    }
                    <button type="button" className="btn-delete btn btn-danger" onClick={() => onDeleteButtonClick(toDo.id)}>Delete</button>
                  </div>
                </td>
              </tr>
            ))
            :
            <tr>
              <td colSpan="2" className="text-center">No Task</td>
            </tr>
        }
      </tbody>
    </table>
  )
}

// Props Validation
ToDoList.propTypes = {
  toDos: PropTypes.array,
  onUpdateToDo: PropTypes.func
}

export default ToDoList;