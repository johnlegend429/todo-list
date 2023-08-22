import React from "react";
import { Component } from "react";

class TodoItems extends Component{
    constructor(props){
        super(props);
        this.creatTasks = this.creatTasks.bind(this);
        }
        creatTasks(item){
            return <li onClick={() => this.delete(item.key)} key={item.key}>{item.text}</li>
        }
        delete(key){
            this.props.delete(key);
        }
        render(){
            var todoEntries = this.props.entries;
            var listItems = todoEntries.map(this.creatTasks);

            return(
                <ul className="theList">
                    {listItems}
                </ul>
            );
        }
    
};

export default TodoItems;