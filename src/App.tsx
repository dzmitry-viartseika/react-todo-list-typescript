import React, {useState} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar';
import { TodoForm } from './components/Todo/TodoForm';
import { TodoList } from "./components/Todo/TodoList";
import { ITodoItem } from './model/index';

const App: React.FC = () => {
  const [todosList, setTodosList] = useState<ITodoItem[]>([]);

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
        setTodosList(prev => prev.filter((todo) => todo.id !== id));
    }

  return (
    <BrowserRouter>
      <NavBar />
        <TodoForm onAddTodo={addNewTodo}/>
        <TodoList
            todos={todosList}
            removeTodoItem={removeTodoItem}
            toggleHandler={toggleHandler}
        />
      <div className="container">
        <Switch>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
