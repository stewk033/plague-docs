import React from "react";
import { Dropdown } from 'semantic-ui-react'

function Settings() {
  return(
    <Dropdown
    icon='cog'
    floating
    labeled
    button
    className='icon'
  >
    <Dropdown.Menu>
      <Dropdown.Header content='Settings' />
      <Dropdown.Divider />
      <Dropdown.Item text='Edit Account' />
      <Dropdown.Item text='Add Family Member' />
      <Dropdown.Item text='Log Out' />
    </Dropdown.Menu>
  </Dropdown>
)
}

export default Settings;