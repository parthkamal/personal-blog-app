import React from 'react';

function Navbar(props) {
    return ( <>
    <nav>
  <div className="logo"><a href="/">parth kamal</a></div>
  <ul>
    <a href="/about"><li>about</li></a>
    <a href="/posts"><li>posts</li></a>
    <a href="/resume"><li>resume</li></a>
    <a href="/projects"><li>projects</li> </a>
    <a href="/contact"><li>contact</li> </a>
    <a href="http://localhost:9000/"><li>admin</li> </a>
  </ul>
</nav>

    </> );
    
}

export default Navbar;