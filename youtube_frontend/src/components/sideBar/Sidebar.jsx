import React from 'react'
import './sidebar.css'
import { Home, ListVideo, PlaySquare, CopyPlus } from 'lucide-react'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar_block'>
        <Home size={26} strokeWidth={1.2} />
        <p>Home</p>
      </div>

      <div className='sidebar_block'>
        <PlaySquare size={26} strokeWidth={1.2} />
        <p>Shorts</p>
      </div>

      <div className='sidebar_block'>
        <CopyPlus size={26} strokeWidth={1.2} />
        <p>Subscription</p>
      </div>

      <div className='sidebar_block'>
        <ListVideo size={26} strokeWidth={1.2} />
        <p>You</p>
      </div>
    </div>
  )
}

export default Sidebar