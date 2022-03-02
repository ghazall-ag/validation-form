import "./App.css";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Redirect from="/" to="/signup" />
      </Switch>
    </div>
  );
}

export default App;
