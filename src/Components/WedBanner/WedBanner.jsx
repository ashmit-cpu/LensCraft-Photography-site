import React from 'react'
import '../../Styles/WedBanner.css'


function WedBanner() {
    return (
        <div className='WebBanner'>
            <div className="container">
                <div className="card">
                    <div className="card-content">
                        <h2 className='grey-box-reveal'data-aos="custom-grey-box-animation">Wedding Photography</h2>
                        <p data-aos="fade-up">

                            We capture every precious moment of your special day with meticulous attention to detail. Our goal is to create a visually stunning collection of photographs that encapsulate the joy, emotions, and beauty of your wedding. With a blend of candid and posed shots, we craft an authentic narrative that tells the unique story of your love. Trust us to create treasured memories for a lifetime.</p>
                        <a href="#/"data-aos="fade">View Pricing & Information</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WedBanner