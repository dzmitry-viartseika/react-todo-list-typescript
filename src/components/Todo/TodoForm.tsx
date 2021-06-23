import React, { useState } from 'react';

interface ITodoFormProps {
    onAddTodo(title: string): void;
}

export const TodoForm: React.FC<ITodoFormProps> = (props) => {
    const [title, setTitle] = useState<string>('');

    const changeTitleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }


    const keyPressHandler = (event: any) => {
        if (event.key === 'Enter') {
            setTitle(event.target.value);
            props.onAddTodo(event.target.value);
        }
    }

    return (
        <div className="input-field mt2">
            <input
                type="text"
                id="title"
                placeholder="Введите название дела"
                onChange={changeTitleHandler}
                onKeyPress={keyPressHandler}
                value={title}
            />
            <label htmlFor="title" className="active">
                Введите название дела
            </label>
        </div>
    )
}