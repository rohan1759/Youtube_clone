import React, {useState} from 'react'
import './navBar.css'
import ytLogo from"../../assets/youtube_Logo.svg"
import { Menu, Youtube, Search, Mic, Video, Bell, AwardIcon } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { updateList } from '../../slices/videoListSlice';
import { NavLink, Navigate } from 'react-router-dom';

const NavBar = () => {
  const dispatch = useDispatch()
  const [searchKey, setSearchKey] = useState("")

  const url = `https://youtube.googleapis.com/youtube/v3/search?maxResults=42&part=snippet&q=${searchKey}&key=AIzaSyBr0NNDQM46OCioWNyBU0tyiZgfCG0CsnQ&type=video,playlist`

  const handleSearch = async () => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    dispatch(updateList(data.items))
  };

  return (
    <div className='navbar'>
      <div className='navbar_1stDiv'>
        <Menu className='menuIcon'size={25} strokeWidth={1.2} />
        <img src={ytLogo} alt="youtube" />
        <NavLink to={"/home"} style={{textDecoration: "None"}}><p>YouTube</p></NavLink>
      </div>

      <div className='navbar_2ndDiv'>
        <div>
          <input type="text" name='searchKey' value={searchKey} onChange={e => setSearchKey(e.target.value)} placeholder='Search' />
          <Search className='searchIcon' size={24} strokeWidth={1.2} onClick={handleSearch} />
        </div>
        <Mic className='micIcon' size={22} strokeWidth={1.5} />
      </div>

      <div className='navbar_3rdDiv'>
        <Video className='videoIcon' size={26} strokeWidth={1.2}   />
        <Bell className='notificationIcon' size={26} strokeWidth={1.2}  />
        <p>P</p>
      </div>
    </div>
  )
}

export default NavBar