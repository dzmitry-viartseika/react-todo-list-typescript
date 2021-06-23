import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar';
import { TodosPage } from './pages/TodosPage';
import { AboutPage } from './pages/AboutPage';

declare const confirm: (string: string) => boolean;

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
          <Switch>
              <Route component={TodosPage} path="/" exact />
              <Route component={AboutPage} path="/about" />
          </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
