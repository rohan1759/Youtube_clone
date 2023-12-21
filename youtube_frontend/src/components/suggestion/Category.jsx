import React from 'react'
import './category.css'

const Chip = ({title}) => {
  return (
    <button className='chipItem'>{title}</button>
  )
}

const Category = () => {
  const titleArray = ["All", "New", "Mixes", "Python", "Gaming", "Music", "Live", "AI", "News", "Game Shows", "Anime", "UFC", "Street Foods", "Google"]
  return (
    <div className='categoryDiv'>
        {titleArray.map((chip, id) => {
          return (
            <Chip title={chip} key={id} />
          )
        })}
    </div>
  )
}

export {Chip}
export default Category;