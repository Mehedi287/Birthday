import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FristPage from './Components/FristPage/FristPage';
import ScondPage from './Components/ScondPage/ScondPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <FristPage></FristPage>
          </Route>
          <Route path="/scondPage">
            <ScondPage></ScondPage>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
