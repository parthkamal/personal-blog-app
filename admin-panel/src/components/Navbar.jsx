import React from 'react';

function Navbar(props) {
  return (<>
    <nav>
      <div className="logo"><a href="/">parth kamal</a></div>
      <ul className='navbar-admin'>
        <a href="/about"><li>about</li></a>
        <a href="/posts"><li>posts</li></a>
        <a href="/resume"><li>resume</li></a>
        <a href="/projects"><li>projects</li> </a>
        <a href="/contact"><li>contact</li> </a>
      </ul>
    </nav>

  </>);

}

export default Navbar;