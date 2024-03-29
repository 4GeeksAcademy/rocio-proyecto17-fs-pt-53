import React, { useState } from "react";



//create your first component
const Input = () => {
    const [inputValue, setInputValue] = useState('');
    const validateInput = () => {
        if(inputValue === "") alert("The input cannot be empty");
        else(setList(list.concat([inputValue])))
        }
    const validate = (value) => {
        if(value === ' ') alert("That is an invalid character")
        else(setInputValue(value))
        }    

    const [list, setList] = useState([]);
    const handleOnKeyDown = (e) => {
        if (e.key === "Enter") {
            validateInput()
            setInputValue("")
        };
    
    }
    return (
        <div className="body">
            <h1 className="text-center mt-5"> To do list</h1>
            <ul className="list-group list-group-flush">
                <li>
                    <input type="text" onChange={e => validate(e.target.value)} value={inputValue} placeholder="What needs to be done?"
                        onKeyDown={handleOnKeyDown} />
                </li>
                {list.map((element,index) => (
                    <li className="element list-group-item d-flex justify-content-between align-items-center">
                       {element}
                       <i className="close fa-regular fa-circle-xmark" 
                       onClick={()=> 
                        setList(list.filter((_,currentIndex) =>index != currentIndex))}></i>
                    </li>))
                
                }
                <li className="number list-group-item">{list.length === 0 ? "No tasks, add new task" : `${list.length} task${list.length === 1 ? '' : 's' }` } </li>
            </ul>
            
        </div>
    );
};


export default Input;