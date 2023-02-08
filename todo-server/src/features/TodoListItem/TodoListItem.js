import './TodoListItem.css';

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
        <li className={'todoItem'}>
            <div className={'todoInput'}>
                <input onChange={onCheckClick} type={"checkbox"} data-done={isChecked()} checked={isChecked()}/>
                {todo.title}
            </div>
            <div className={'btnWrapper'}>
                <button className={'btn btn-outline-secondary'} onClick={onEditBtnClick}>Edit</button>
                <button className={'btn btn-outline-secondary'} onClick={onRemoveBtnClick}>Remove</button>
            </div>
        </li>
    );
}