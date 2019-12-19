import React from 'react';
import { configure , shallow,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ToDoList from "../components/objects/toDoList/ToDoList";
import {todoData} from "../static/staticData";
configure({ adapter: new Adapter() });

describe("<ToDoList>",()=>{
    let afterDelete=[];
    const onUpdateToDos=(res)=>{
        afterDelete=res;
    }
    it("Test for check no of todo list after init",()=>{
        const wrapper = shallow(<ToDoList toDos={[]} /> );
        const tr      = wrapper.find("tbody").find("tr");
        expect(tr.length).toEqual(1);
    }) 
   const wrapper = mount(
        <ToDoList 
           toDos={todoData}
           onUpdateToDo={onUpdateToDos}
        />
      );
    it("Test for check no of todo list after init",()=>{
        const tr      = wrapper.find("tbody").find("tr");
        expect(tr.length).toEqual(2);
    }) 
    it("Test for check no of todo list after done button",()=>{
        wrapper.find("tbody").last().find("tr").first().find("button").first().simulate("click");
        const wrapperDone = mount(
            <ToDoList 
               toDos={afterDelete}
               onUpdateToDo={onUpdateToDos}
            />
          );
        const button=wrapperDone.find("tbody").find("tr").first().find("button");
        expect(button.length).toEqual(1);
     })

    it("Test for check no of todo list after delete button",()=>{
        wrapper.find("button").last().simulate("click");
        const wrapperDelete = mount(
            <ToDoList 
               toDos={afterDelete}
               onUpdateToDo={onUpdateToDos}
            />
          );
          const tr      = wrapperDelete.find("tbody").find("tr");
          expect(tr.length).toEqual(1);
        
    })

  
})



