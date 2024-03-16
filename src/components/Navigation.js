import React from 'react';
import { Link,  } from 'react-router-dom';

import './Navigation.css';

const Navigation = () => {
  return (
    
    <nav>
      <ul>
        <li><Link to="">Strona główna</Link></li>
        <li><Link to="about">O mnie</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;