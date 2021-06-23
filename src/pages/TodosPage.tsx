import React, { useState, useEffect } from 'react'
import { TodoForm } from '../components/Todo/TodoForm'
import { TodoList } from '../components/Todo/TodoList'
import { ITodoItem } from '../model';

declare var confirm: (question: string) => boolean

export const TodosPage: React.FC = () => {
    const [todosList, setTodosList] = useState<ITodoItem[]>([]);

    useEffect(() => {
        const savedList = JSON.parse(localStorage.getItem('todosList') || '[]') as ITodoItem[];
        setTodosList(savedList);
    }, [])

    useEffect(() => {
        localStorage.setItem('todosList', JSON.stringify(todosList))
    }, [todosList])

    const addNewTodo = (title: string) => {
        const newTodo: ITodoItem = {
            id: Date.now(),
            completed: false,
            title: title
        }
        setTodosList([newTodo, ...todosList]);
    }

    const toggleHandler = (id: number) => {
        setTodosList(prev => prev.map((todo: ITodoItem) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        }));
    }

    const removeTodoItem = (id: number) => {
        const shouldRemoveItem = confirm('Вы уверены, что хотите удалить элемент');
        if (shouldRemoveItem) {
            setTodosList(prev => prev.filter((todo) => todo.id !== id));
        }
    }

    return (
        <React.Fragment>
            <TodoForm onAddTodo={addNewTodo} />

            <TodoList
                todos={todosList}
                toggleHandler={toggleHandler}
                removeTodoItem={removeTodoItem}
            />
        </React.Fragment>
    )
}