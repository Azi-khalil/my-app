
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ContactUs from './pages/ContactUs'
import Gallary from './pages/Gallary'
import Home from './pages/Home'
import Services from './pages/Services'
import WhoWe from './pages/WhoWe'


function App() {
  return (
<Router>
    <div className="App">
      <Navbar /> 
      <Switch>
      <Route path='/' exact component={Home} />  
      <Route path='/Gallary' component={Gallary} />  
      <Route path='/ContactUs' component={ContactUs} /> 
      <Route path='/Services' component={Services} /> 
      <Route path='/WhoWe' component={WhoWe} />
      </Switch>   
    </div>

</Router>
  );
}

export default App;
