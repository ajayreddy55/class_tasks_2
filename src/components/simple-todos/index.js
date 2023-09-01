import { Component } from "react";
import TodoSimpleItem from "./simpletodo";
import "./index.css";

const simpleTodoList = [
    {
        id: 1,
        title: "Book the ticket for today evening",
    },
    {
        id: 2,
        title: "Rent the movie for tomorrow movie night",
    },
    {
        id: 3,
        title: "Confirm the slot for the yoga session tomorrow morning",
    },
    {
        id: 4,
        title: "Drop the parcel at Bloomingdale",
    },
    {
        id: 5,
        title: "Order fruits on Big Basket",
    },
    {
        id: 6,
        title: "Fix the production issue",
    },
    {
        id: 7,
        title: "Confirm my slot for saturday night",
    },
    {
        id: 8,
        title: "Get essentials for sunday car wash",
    },
]

class SimpleTodo extends Component {

    state = { todoList: simpleTodoList };

    deleteTodoFromList = (uniqueId) => {
        const { todoList } = this.state;
        const listAfterDeletion = todoList.filter(eachTodo => eachTodo.id !== uniqueId);

        this.setState({ todoList: listAfterDeletion });

    }

    render() {

        const { todoList } = this.state;

        return (
            <div className="simple-todo-bg">
                <div className="simple-todo-card">
                    <h1 className="simple-todo-heading">Simple Todos</h1>
                    <ul className="simple-todo-list-container">
                        {todoList.map(eachItem => (
                            <TodoSimpleItem eachItem={eachItem} key={eachItem.id} deleteTodoFromList={this.deleteTodoFromList} />
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default SimpleTodo;

