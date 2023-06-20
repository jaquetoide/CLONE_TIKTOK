import React, {useState} from 'react'
import './sidebar.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';

function VideoSidebar({likes, messages, shares}) {

  const [liked, setLiked] = useState(false)

  function Like() {
    setLiked(!liked)
  }

  return (
    <div className='sidebar'>
        <div className='sidebar_options'
          onClick={Like}
        >
          { liked ? <FavoriteIcon fontSize='large'/> : <FavoriteBorderIcon fontSize='large'/>}
          <p> { liked ? likes + 1 : likes} </p>
        </div>

        <div className='sidebar_options'>
          <ChatIcon fontSize='large' />
          <p> {messages} </p>
        </div>

        <div className='sidebar_options'>
          <ShareIcon fontSize='large'/>
          <p> {shares} </p>
        </div>


    </div>
  )
}

export default VideoSidebar