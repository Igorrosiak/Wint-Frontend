import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { SignUpView } from './views/signUp/signUpView';
import { SignInView } from './views/signIn/signInView';
import { ProfileView } from './views/myProfile/profileView';
import { EditProfileView } from './views/profile/editProfileView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/registro" element={<SignUpView/>} />
      <Route path="/" element={<SignInView/>} />
      <Route path="/edit-profile" element={<EditProfileView/>} />
      <Route path="/perfil" element={<ProfileView/>} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();