import React from 'react'
import "./card.css"
import dp from "../../assets/dp.png"
import { Navigate, NavLink } from 'react-router-dom'

const Card = ({videoId, thumbnail, duration, title, channel, profilePicture, views, releaseDate}) => {

  const defaultView = 0
  const defaultDuration = "00:00:00"

  function convertDurationToHHMMSS(durationString) {
    const match = durationString.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  
    if (!match) {
      return "Invalid duration format";
    }
  
    const hours = match[1] ? parseInt(match[1], 10) : 0;
    const minutes = match[2] ? parseInt(match[2], 10) : 0;
    const seconds = match[3] ? parseInt(match[3], 10) : 0;
  
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
  
    const formattedDuration = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  
    return formattedDuration;
  }

  function formatTimeAgo(publishDate) {
    const currentDate = new Date();
    const publishDateObj = new Date(publishDate);
    const timeDifference = currentDate - publishDateObj;
  
    const secondsInMillisecond = 1000;
    const minutesInMillisecond = secondsInMillisecond * 60;
    const hoursInMillisecond = minutesInMillisecond * 60;
    const daysInMillisecond = hoursInMillisecond * 24;
    const monthsInMillisecond = daysInMillisecond * 30.44; // Average days in a month
  
    if (timeDifference < minutesInMillisecond) {
      const secondsAgo = Math.floor(timeDifference / secondsInMillisecond);
      return `${secondsAgo} second${secondsAgo !== 1 ? 's' : ''} ago`;
    } else if (timeDifference < hoursInMillisecond) {
      const minutesAgo = Math.floor(timeDifference / minutesInMillisecond);
      return `${minutesAgo} minute${minutesAgo !== 1 ? 's' : ''} ago`;
    } else if (timeDifference < daysInMillisecond) {
      const hoursAgo = Math.floor(timeDifference / hoursInMillisecond);
      return `${hoursAgo} hour${hoursAgo !== 1 ? 's' : ''} ago`;
    } else if (timeDifference < monthsInMillisecond) {
      const daysAgo = Math.floor(timeDifference / daysInMillisecond);
      return `${daysAgo} day${daysAgo !== 1 ? 's' : ''} ago`;
    } else {
      const monthsAgo = Math.floor(timeDifference / monthsInMillisecond);
      return `${monthsAgo} month${monthsAgo !== 1 ? 's' : ''} ago`;
    }
  }

  function formatViewsCount(viewsCount) {
    if (viewsCount >= 1000000) {
      // If viewsCount is a million or more, display in millions
      return `${(viewsCount / 1000000).toFixed(1)}M`;
    } else if (viewsCount >= 1000) {
      // If viewsCount is a thousand or more, display in thousands
      return `${(viewsCount / 1000).toFixed(0)}K`;
    } else {
      // Otherwise, display the viewsCount as is
      return viewsCount.toString();
    }
  }

  return (
    <NavLink to={`/watch?v=${videoId}`} style={{textDecoration: "None"}}>
      <div className='cardDiv'>
              <img id='thumbnail' src={thumbnail} alt="video thumbnail" />
              <span id='duration'>{duration ? convertDurationToHHMMSS(duration) : defaultDuration}</span>
          <div className='card_lower'>
              <img id='avatar' src={(dp) ? dp : "https://via.placeholder.com/36x36"} alt="avatar" width={36} height={36}  />
              <div className='detail'>
                  <div id='title'>{title}</div>
                  <div id='channel'>{channel}</div>
                  <div id='views'>{views ? formatViewsCount(views) : defaultView} views : {formatTimeAgo(releaseDate)}</div>
              </div>
          </div>
      </div> 
    </NavLink>
  )
}

export default Card