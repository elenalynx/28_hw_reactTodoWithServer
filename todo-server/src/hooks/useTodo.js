import {useEffect, useState} from "react";
import TodoApi from "../api/TodoApi";

const initialTodoState = [];
const DEFAULT_TODO = {
    title: '',
    done: false,
}

export default function useTodo() {
    const [list, setList] = useState(initialTodoState);
    const [editTodo, setEditTodo] = useState(DEFAULT_TODO);

    useEffect(() => {
        TodoApi
            .getList()
            .then((listFromServer) => {
                setList(listFromServer);
            })
    }, [])

    function onTodoSubmit(todo) {

        if (editTodo.id) { //edit
            const newList = list.map(todoItem => todoItem.id === editTodo.id ? todo : todoItem);

            TodoApi
                .update(editTodo.id, todo)
                .then(() => {
                    setList(newList);
                    setEditTodo(DEFAULT_TODO);
                })

        } else {  //create

            TodoApi
                .create(todo)
                .then((newTodo) => {
                    setList([...list, newTodo]);
                    setEditTodo(DEFAULT_TODO);
                })
        }
        // setEditTodo(DEFAULT_TODO);
    }

    function onTodoRemove(id) {
        TodoApi
            .delete(id)
            .then(() => {
                const newList = list.filter(todoItem => todoItem.id !== id);
                setList(newList);
            })
    }

    function onTodoEdit(todo) {
        setEditTodo(todo);
    }

    function onTodoCheck(todo) {
        const editTodo = todo.done === false ? {...todo, done: true} : {...todo, done: false};
        // console.log(todo)
        // console.log(editTodo)
        const newList = list.map(todoItem => todoItem.id === editTodo.id ? editTodo : todoItem);
        // console.log(newList)

        TodoApi
            .update(todo.id, editTodo)
            .then(() => {
                setList(newList);
                setEditTodo(DEFAULT_TODO);
            })
    }

    return {
        list,
        editTodo,
        onTodoSubmit,
        onTodoRemove,
        onTodoEdit,
        onTodoCheck,
    }
}