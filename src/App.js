import Signup from "./components/Signup"
import './components/Signup';
import {BrowserRouter, Route} from "react-router-dom";
import Homepage from "./components/Homepage"

function App() {
  return (
    <BrowserRouter>
    <div>
      <Route path="/Homepage" exact={true} strict component={Homepage}></Route>
      <Signup />
    </div>
    </BrowserRouter>
  );
}

export default App;
