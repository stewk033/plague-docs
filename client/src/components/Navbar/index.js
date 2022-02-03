import React from "react";
import { NavLink, Flex } from 'theme-ui'
import Settings from "../Settings";

function Navbar() {
  return (
    <>
<Flex as="nav">
  <NavLink href="#!" p={2}>
    My Account
  </NavLink>
<Settings/>
</Flex>
    </>
  );
}

export default Navbar;
