import logo from './logo.svg';
import './App.css';
import NavBar from './components/nav/navbar';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Details from './pages/details/details';
import Favorites from './pages/favorites/favorites';
import Search from './pages/search/search';
import Register from './pages/register/register';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className='bg-dark min-vh-100'>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path={"/"} exact component={Home}/>
          <Route path={"/login"} exact component={Login}/>
          <Route path={'/register'} exact component={Register}/>
          <Route path={"/details/:id"} exact component={Details}/>
          <Route path={"/favorites"} exact component={Favorites}/>
          <Route path={"/search/"} exact component={Search}/>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
