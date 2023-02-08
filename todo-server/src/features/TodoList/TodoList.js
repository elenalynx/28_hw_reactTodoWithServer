import './TodoList.css';
import TodoListItem from "../TodoListItem/TodoListItem";

export default function TodoList({list, onTodoRemove, onTodoEdit, onTodoCheck}) {
    return (
        <div className={'todoListWrapper'}>
            <ul>
                {list.map(todo => (
                    <TodoListItem
                        key={todo.id}
                        todo={todo}
                        onTodoCheck={onTodoCheck}
                        onTodoRemove={onTodoRemove}
                        onTodoEdit={onTodoEdit}
                    />
                ))}
            </ul>
        </div>
    );
}