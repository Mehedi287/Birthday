import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FristPage from './Components/FristPage/FristPage';
import ScondPage from './Components/ScondPage/ScondPage';
import GetLove from './Components/GetLove/GetLove';

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
          <Route path="/getLove">
            <GetLove></GetLove>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
