import React, { useEffect } from 'react'
import "./content.css"
import Card from '../card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { addAllVideos } from '../../slices/videoListSlice'

const Content = () => {
  const dispatch = useDispatch()

  const url = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&chart=mostPopular&key=AIzaSyBr0NNDQM46OCioWNyBU0tyiZgfCG0CsnQ&regionCode=US&maxResults=42"

  useEffect(() => {
      fetchVideos().then((d)=>{
        console.log(d.items)
        dispatch(addAllVideos(d.items))
      })
  }, [])

  const fetchVideos = async () => {
    const response = await fetch(url)
    const data = await response.json()
    return data
  }

  const videosList = useSelector(state => state.videoListSlice.videoList)
  console.log("hello", videosList)

  return (
    <div className='contentDiv'>
        {videosList.map(video => 
          <Card key={video.id} videoId={(typeof video.id == "string" ? video.id : video.id.videoId)} thumbnail={video.snippet.thumbnails.high.url} title={video.snippet.title} views={video.statistics?.viewCount || 0} channel={video.snippet.channelTitle} releaseDate={video.snippet.publishedAt} duration={video.contentDetails?.duration || "PT0H0M0S"} />
        )}
    </div>
  )
}

export default Content