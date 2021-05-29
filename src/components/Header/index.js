import './Header.css';

import React from 'react';

 const Header  =({black}) => {
    
        return (
            <header className={black ? 'black' : ''}>
                <div className="header--logo">
                    <a href="/">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="logo" />
                    </a>
                </div>
                <div className="header--user">
                    <a href="/">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjLIbMn5sDFXEXwIGSfKvUWDuZKMJ3xVGISw&usqp=CAU" />
                    </a>
                </div>
            </header>
        );
  
}
export default Header;