import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Page1 from './page1';
import Page2 from './page2';

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
          <App/>
      <Routes>
        <Route>
          <Route path="/page1" element={<Page1 /> } />
          <Route path="/page2" element={<Page2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);


