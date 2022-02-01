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
      <Dropdown.Header icon='tags' content='Settings' />
      <Dropdown.Divider />
      <Dropdown.Item icon='attention' text='Edit Account' />
      <Dropdown.Item icon='comment' text='Add Family Member' />
      <Dropdown.Item icon='conversation' text='Log Out' />
    </Dropdown.Menu>
  </Dropdown>
)
}

export default Settings;