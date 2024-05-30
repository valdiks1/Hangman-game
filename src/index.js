import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import Header from './Pages/Header/Header';
import Game from './Pages/GameField/Game';
import Admin from './Pages/Admin/Admin';
import Welcome from './Pages/Welcome/Welcome';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet
} from 'react-router-dom';

const Root = () => {
  return(
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<Welcome />} />
      <Route path='/game' element={<Game/>} />
      <Route path='/admin' element={<Admin />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

