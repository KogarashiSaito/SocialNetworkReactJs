import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Dialogs from './Components/Dialogs/Dialogs';
import Profile from './Components/Profile/Profile';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import { Route } from 'react-router-dom'

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
            profilePage={props.state.profilePage}
            dispatch={props.dispatch} />} />
        <Route path='/dialogs'
          render={() => <Dialogs
            store={props.store} />} />
      </div>
    </div>
  );
}

export default App;
