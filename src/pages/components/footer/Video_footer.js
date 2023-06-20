import React from 'react'
import './video_footer.css'
import AudiotrackIcon from '@mui/icons-material/Audiotrack';

function Video_footer({name, description, music}) {
  return (
    <div className='videofooter'>
        <div className='video_ft_text'>
        <h3> @{name} </h3>
        <p> {description} </p>
        <div className='footer_msc'>
            <AudiotrackIcon className='footer_icon'/>
            <div className='footer_text'>
             <p> {music}  </p>
            </div>
        </div>
        </div>

        <img className='record'
        alt='Imagem do vinil girando'
        src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z'
        />
        
    </div>
  )
}

export default Video_footer