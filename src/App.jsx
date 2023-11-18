import React from 'react';


import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';

import UpdatePlace from './places/pages/UpdatePlace';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';
import Auth from './user/pages/Auth';
import { AuthContext } from './shared/context/auth-context';
import { useAuth } from './shared/hooks/auth-hook';
import './App.css'


function App() {
  const { token, login, logout, userId } = useAuth();

  let routes;
  if (token) {
    routes = (
      <>
        <Route path="/" exact element={<Users />} />
        <Route path="/:userId/places" exact element={<UserPlaces />} />
        <Route path="/places/new" exact element={<NewPlace />} />
        <Route path="/places/:placeId" element={<UpdatePlace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </>
    );
  } else {
    routes = (
      <>
        <Route path="/" exact element={<Users />} />
        <Route path="/:userId/places" exact element={<UserPlaces />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </>
    );
  }

  return (
    <AuthContext.Provider value={{isLoggedIn: !!token, token : token, userId:userId, login: login, logout: logout}}> 
      <Router>
        <MainNavigation />
        <main >
        <Routes>
          {routes}
        </Routes>
        </main>
      </Router>
    </AuthContext.Provider>
  )
}

export default App
