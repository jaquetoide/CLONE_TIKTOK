import './App.css';
import React, { useEffect, useState } from 'react';
import db from './config/firebase'
import Video from './pages/Video';
import { collection, getDocs } from 'firebase/firestore/lite'

function App() {

  let maxHeight;
  if (window.innerHeight <= 800){
    maxHeight = window.innerHeight
  }

  const [video, setVideos] = useState([])

  async function getVideos () {
      const videosCollection = collection(db, "videos")
      const videosSnapshoot = await getDocs(videosCollection)
      const videosLists = videosSnapshoot.docs.map(doc => doc.data())
      setVideos(videosLists)
  }

  useEffect(()=> {
    getVideos();

  }, [])


  return (
    <div className="App" style={{ maxHeight: maxHeight + "px" }}>
      <div className='app_videos'> 
       { video.map((item) => {
        return (
          <Video 
            likes={item.likes}
            messages={item.messages}
            shares={item.shares}
            name={item.name}
            description={item.description}
            music={item.music}
            url={item.url}
          />
        )
      }) }
      </div>
    </div>
  );
}

export default App;
