import React from 'react'
import "./SidebarOption.css"
const SidebarOption = ({active ,text,Icon}) => {
  return (
    <div className={`SidebarOption ${active && 'sidebarOption--active'}`}>
    <Icon/>
    <h5>{text}</h5>
    </div>
  )
}

export default SidebarOption