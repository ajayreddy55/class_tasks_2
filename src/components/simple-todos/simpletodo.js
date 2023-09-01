import "./index.css";

const TodoSimpleItem = (props) => {

    const { eachItem, deleteTodoFromList } = props;
    const { id, title } = eachItem;

    const deleteSimpleTodo = () => {
        deleteTodoFromList(id);
    }

    return (
        <li className="simple-todo-list-item">
            <p className="simple-todo-title">{title}</p>
            <button className="btn btn-outline-danger ml-1" type="button" onClick={deleteSimpleTodo}>Delete</button>
        </li>
    );
}

export default TodoSimpleItem;

