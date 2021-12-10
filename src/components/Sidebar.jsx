import React from 'react';
import {SidebarDiv, SidebarHeader, SidebarBody} from './styles/Sidebar.styles';

export default function SideBar() {
  return (
    <SidebarDiv>
      <SidebarHeader>
        <h1>Your Pokémon</h1>
      </SidebarHeader>
      <SidebarBody>
        <ul>
          <li>Pickachu</li>
          <li>Charmander</li>
          <li>Gangar</li>
        </ul>
      </SidebarBody>
    </SidebarDiv>
  )
}
