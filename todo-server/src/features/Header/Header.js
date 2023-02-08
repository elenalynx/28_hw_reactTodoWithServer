import {useEffect, useState} from "react";
import './Header.css';

export default function Header({ onTodoSubmit, todo }) {
    const [title, setTitle] = useState(todo?.title ?? '');

    useEffect(() => {
        setTitle(todo.title);
    }, [todo])

    function onFormSubmit(e) {
        e.preventDefault();
        const newTodo = {
            // id: Math.random().toString(),
            ...todo,
            title,
        };
        onTodoSubmit(newTodo);
        setTitle('');
    }

    return (
        <div className={'formWrapper'}>
            <form className={'form-control form_app'} onSubmit={onFormSubmit}>
                <label htmlFor='title'>Title</label>
                <input
                    type='text'
                    id='title'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </form>
        </div>
    );
}