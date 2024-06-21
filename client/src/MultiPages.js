import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App"
import NotFound from './NotFound';
import Cart from './Cart';



function MultiPages() {
  return (
      <Router>
          <Routes>
              <Route exact path="/" element={<App></App>} />
              <Route exact path="/buy" element={<Cart></Cart>} />

              <Route path="*" element={<NotFound />} />

          </Routes>
      </Router>
  );
}


export default MultiPages;