export default function TodoListItem({todo, onTodoRemove, onTodoEdit, onTodoCheck}) {
    function onRemoveBtnClick() {
        onTodoRemove(todo.id);
    }

    function onEditBtnClick() {
        onTodoEdit(todo);
    }

    function onCheckClick() {
        isChecked();
        onTodoCheck(todo);
    }

    /**
     * @return {Boolean}
     */
    function isChecked() {
        return todo.done;
    }

    return (
        <li>
            <input onChange={onCheckClick} type={"checkbox"} data-done={isChecked()} checked={isChecked()}/>
            {todo.title}
            <button onClick={onEditBtnClick}>Edit</button>
            <button onClick={onRemoveBtnClick}>Remove</button>
        </li>
    );
}