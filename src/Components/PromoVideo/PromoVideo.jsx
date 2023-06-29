import React, { useEffect, useRef } from 'react'
import '../../Styles/PromoVideo.css'
import Plyr from'plyr';
import 'plyr/dist/plyr.css'



function PromoVideo() {

    const videoRef = useRef(null);

    useEffect(()=>{
        const player = new Plyr(videoRef.current);
    })
    
    return (
        <div className='PromoVideo'>
            <video ref={videoRef} id="player" playsinline controls data-poster="https://wallpaperaccess.com/full/3148602.jpg">
                <source src="assets/vid/JL Studioo [ Photography Promo Video ].mp4" type="video/mp4" />

                <track kind="captions" label="English captions" src="/path/to/captions.vtt" srclang="en" default />
            </video>
        </div>
    )
}

export default PromoVideo