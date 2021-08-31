import React, { useState } from "react";
import './drop.styles.scss'



function Drop() {


  return (
    <Navbar>
      
      <NavItem txt='CURRENCY'>
        <DropdownMenu />
      </NavItem>
      
    </Navbar>
  );
}

function DropdownMenu() {

  function DropdownItem (props) {
    return (
      <a href ='#'>
        <span className='icon-button'></span>
        {props.children}
      </a>
    )
  }

  return (
    <div className='dropdown'>
      <DropdownItem>U.S.Dollar</DropdownItem>
      <DropdownItem>Euro</DropdownItem>
      <DropdownItem>Yan</DropdownItem>
      <DropdownItem>Lira</DropdownItem>
      <DropdownItem>Pound</DropdownItem>
    </div>
  )
}

function Navbar(props) {

  return (
    <nav>
      <ul>{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <a href='#' className='txt-button' onClick={() => setOpen(!open)}>
        {props.txt}
      </a>
      {open && props.children}
    </li>
  );
}

export default Drop;

