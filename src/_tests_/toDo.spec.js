import React from 'react';
import { configure ,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ToDo from "../components/pages/toDo/ToDo";
configure({ adapter: new Adapter() });

describe("<ToDoList>",()=>{
    it("Test for check no of todo list after add new",()=>{
        const wrapperAdd = mount(<ToDo/>);
        wrapperAdd.find("input[type='text']").getDOMNode().value = "New item";
        wrapperAdd.find("button").first().simulate("click");
        const tr=wrapperAdd.find("ToDoList").find("table").find("tbody").find("tr");
        expect(tr.length).toEqual(3);
    })
    it("Test for check no of todo list and validaition after add new with blanck value",()=>{
        const wrapperAdd = mount(<ToDo/>);
        wrapperAdd.find("input[type='text']").getDOMNode().value = "";
        wrapperAdd.find("button").first().simulate("click");
        const tr=wrapperAdd.find("ToDoList").find("table").find("tbody").find("tr");
        expect(tr.length).toEqual(2);
    })

   

 })



