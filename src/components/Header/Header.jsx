import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            Header
            <Link to='/'>toHome</Link>
            <hr/>
        </div>
    );
};

export default Header;