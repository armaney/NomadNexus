
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';

import UpdatePlace from './places/pages/UpdatePlace';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';

import './App.css'

function App() {

  return (
    <Router>
      <MainNavigation />
      
      <main >
      <Routes>
      <Route path="/" exact element={<Users/>}></Route>
      <Route path="/:userId/places" exact element={<UserPlaces />} />
      <Route path="/places/new" exact element={<NewPlace />}></Route>
      <Route path="/places/:placeId" element={<UpdatePlace />}></Route>
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />




      </Routes>
      </main>
    </Router>
  )
}

export default App
