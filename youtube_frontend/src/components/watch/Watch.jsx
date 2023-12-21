import React from 'react'
// import { useParams } from 'react-router-dom';
// import { useSearchParams } from 'react-router-dom';
import { NavLink, useLocation } from 'react-router-dom';
import "./watch.css"
import dp from "../../assets/dp.png"
import { Chip } from '../suggestion/Category';
import {useSelector} from "react-redux"
import { MoreHorizontal, Share2, ThumbsDown, ThumbsUp } from 'lucide-react';

const adjustTitle = (title, maxLength=30) => {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + "...";
    }
    return title;
}

const Tile = ({ videoId, thumbnail, title, channelName, views, releasedAt }) => {
    return (
      <NavLink to={`/watch?v=${videoId}`} style={{textDecoration: "None", color: "#606060"}}>
        <div className='tileMainDiv'>
          <img src={thumbnail} alt="thumbnail" />
          <div>
            <p id='tileTitle'>{title}</p>
            <p id='tileChannel'>{channelName}</p>
            <p id='tileVideoInfo'>{views} views : {releasedAt}</p>
          </div>
        </div>
      </NavLink>
    )
}

const Watch = () => {

  const location = useLocation()
  const searchParam = new URLSearchParams(location.search)
  const videoId = searchParam.get("v")
  console.log(videoId)
  
  const videosList = useSelector(state => state.videoListSlice.videoList)
  console.log("watch", videosList)
  
  const filteredVideo = videosList.filter((video) => video.id == videoId || video.id.videoId == videoId)[0]

    console.log("view after fetch", filteredVideo)

    const titleArray = ["All", "Python", "Gaming", "Music", "UFC"]

  return (
    <div className='watchPageDiv'>
      <div className='videoPlayer'>
        <iframe width="656" height="369" src={`https://www.youtube.com/embed/${videoId}?si=mrqMQApHO4QZkQRd&autoplay=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <div id='player_videoTitle'>{filteredVideo.snippet.title}</div>

        <div id='player_bar'>
          <div>
            <img id='player_avatar' src={(dp) ? dp : "https://via.placeholder.com/36x36"} alt="avatar" width={40} height={40}  />

            <div className='player_detail'>
              <span className="player_channelName">{filteredVideo.snippet.channelTitle}</span>
              <span className="player_subscriberCount">75.2K subscribers</span>
            </div>

            <button className='subscribeButton'>Subscribe</button>
          </div>

          <div>
            <span>
              <button className='likeButton' style={{fontSize: '14px', fontFamily: "Roboto"}}><ThumbsUp width={'1.2rem'} height={'1rem'} strokeWidth={1} /> {filteredVideo.statistics?.likeCount || 999}</button>
              <button className='dislikeButton' style={{fontSize: '14px',  fontFamily: "Roboto"}}><ThumbsDown width={'1.2rem'} height={'1rem'} strokeWidth={1} /></button>
            </span>

            <button className='shareButton' style={{fontSize: '14px'}}><Share2 width={'1.2rem'} height={'1rem'} strokeWidth={1} /> Share</button>

            <button className='moreButton'><MoreHorizontal/></button>
          </div>
        </div>
        <div className='player_description'>
            <p>{filteredVideo.statistics?.viewCount || 99999} views,  {filteredVideo.snippet.publishedAt} </p>
            <p>{filteredVideo.snippet.description}</p>
        </div>

        <div className="commentSection">
          <h1>COMMENT SECTION</h1>
        </div>
      </div>


      <div className='suggestedVideo'>
        <div className='categoryList'>
          {titleArray.map((chip, id) => {
          return (
            <Chip title={chip} key={id} />
          )})}
        </div>
        <div>
          {videosList.map((video) => {
            return (
              <Tile key={(typeof video.id == "string" ? video.id : video.id.videoId)} videoId={(typeof video.id == "string" ? video.id : video.id.videoId)} thumbnail={video.snippet.thumbnails.high.url} title={adjustTitle(video.snippet.title)} views={video.statistics?.viewCount || 0} channelName={video.snippet.channelTitle} releasedAt={video.snippet.publishedAt} />
            )
          })}
        </div>

      </div>
    </div>
  );
}

export default Watch;

  
    // const [videoObject, setVideoObject] = useState({})
    // const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoId}&key=AIzaSyBr0NNDQM46OCioWNyBU0tyiZgfCG0CsnQ`
    // console.log(url)
    // const fetchVideos = async () => {
    //   const response = await fetch(url)
    //   const data = await response.json()
    //   return data
    // }
    // useEffect(() => {
    //   fetchVideos().then((d) => {
    //     console.log(d)
    //     setVideoObject(d.items[0])
    //   })
    // }, [])
    // console.log("viewState after fetch", videoObject)