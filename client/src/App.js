import './App.css';
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react"
import { Routes } from './components/Routes';
import LogIn from './Pages/LogIn';
import Register from './Pages/Register';
import FetchUser from './components/FetchUser';
function App() {
  const renderRoutes = () => {
    return Routes.map((route) => (
      <Route exact path={route.pathname} component={route.component} />
    ))}
  return (
   <>
  <FetchUser>
    <NavBar />
      <Container>
        <Switch>
          {renderRoutes()}
          <Route exact path="/login" component= {LogIn} />
          <Route exact path="/register" component= {Register} />
          <Route component={() => <b> React Router 404, Path Not Found </b> } />
        </Switch>
      </Container>
  </FetchUser>
   </>
  );
}
export default App;