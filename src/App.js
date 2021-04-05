import React from 'react';

import './App.css';
import { Route, Link } from 'react-router-dom';
import { Page1 } from './Page_1';
import { Page2 } from './Page_2';
import { Page3 } from './Page_3';
import { Page4 } from './Page_4';
import AllPages from './All_Pages';
import OddPages from './Odd_Pages';
import EvenPages from './Even_Pages';

function App() {
  return (
    <main>
      <h1>Routing Assignment</h1>
      
      <Link to="/page_1">
        <button>Page 1</button>
      </Link>

      <Link to="/page_2">
        <button>Page 2</button>
      </Link>

      <Link to="/page_3">
        <button>Page 3</button>
      </Link>

      <Link to="/page_4">
        <button>Page 4</button>
      </Link>

      <Link to="/all_pages">
        <button>All Pages</button>
      </Link>

      <Link to="/odd_pages">
        <button>Odd Pages</button>
      </Link>

      <Link to="/even_pages">
        <button>Even Pages</button>
      </Link>

      <Route path="/page_1" component={Page1} />
      <Route path="/page_2" component={Page2} />
      <Route path="/page_3" component={Page3} />
      <Route path="/page_4" component={Page4} />
      <Route path="/all_pages" component={AllPages} exact />
      {/* <Route page="/odd_pages" component={OddPages} exact /> */}
      {/* <Route page="/even_pages" component={EvenPages} exact /> */}

    </main>
    
  );
} 

export default App;
