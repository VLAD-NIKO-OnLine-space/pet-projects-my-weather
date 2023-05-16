import React from "react";

const NavButton = ({children,...props}) => {
    return (
        <button {...props}>
            {children}
        </button>
    );
};



export default NavButton;