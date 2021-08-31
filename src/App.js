import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import { Route } from 'react-router-dom'
import DialogsContainer from './Components/Dialogs/DialogsContainer';

const App = (props) => {
  return (

    <div className="app__wrapper">
      <Header />
      <Navbar />
      <div className='app__wrapper-content'>
        {/* <Route path='/profile' component={Profile} /> */}
        {/* <Route path='/dialogs' component={Dialogs} /> */}
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />


        <Route path='/profile'
          render={() => <Profile
            store={props.store} />} />

        <Route path='/dialogs'
          render={() => <DialogsContainer
            store={props.store} />} />
      </div>
    </div>
  );
}

export default App;
