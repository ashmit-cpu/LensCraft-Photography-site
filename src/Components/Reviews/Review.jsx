import React, { useEffect } from 'react'
import '../../Styles/Reviews.css'
import Flickity from 'flickity';
import 'flickity/css/flickity.css';



function Review() {

    useEffect(() => {
        const flickityCarousel = new Flickity('.review-carousel', {
            cellAlign: 'left',
            freeScroll: true,
            wrapAround: true,
            groupCells: 2,
            contain: true,
            autoPlay: true,
            selectedAttraction: 0.01,
            friction: 0.40
        });

        return () => {
            flickityCarousel.destroy();
        };
    }, []);

    return (
        <div className='Review'>
            <div className="container">
                <h2>Guest Reviews</h2>
                <div className="review-carousel"data-aos="fade-up">
                    <div className="carousel-cell">
                        <div className="card">
                            <div className="card-content">
                                <h4>Brad Pitt</h4>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <p>I had the pleasure of working with this incredible photographer team for my wedding, and I couldn't be happier with the results. They captured every special moment with such artistry and attention to detail. The team's professionalism, creativity, and friendly demeanor made the entire experience enjoyable. I highly recommend their services!</p>

                            </div>
                        </div>
                    </div>
                    <div className="carousel-cell">
                        <div className="card">
                            <div className="card-content">
                                <h4>Leonardo DiCaprio</h4>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <p>I had an amazing photoshoot experience with this talented photographer team. They were not only skilled in capturing stunning images but also made the whole process fun and relaxing. Their ability to bring out the best in their subjects is truly remarkable. I am beyond thrilled with the final photos and would definitely work with them again.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-cell">
                        <div className="card">
                            <div className="card-content">
                                <h4>Tom Hanks</h4>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <p>I can't thank this photographer team enough for the incredible memories they captured during our family photoshoot. Their patience, professionalism, and ability to work with children were outstanding. The photographs beautifully showcase our love and happiness. It was a pleasure working with such a talented team!</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-cell">
                        <div className="card">
                            <div className="card-content">
                                <h4>Denzel Washington</h4>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <p>I had the opportunity to collaborate with this photographer team for a professional headshot session, and I am blown away by the results. They have a keen eye for capturing unique angles and bringing out the best features of their subjects. The team's attention to detail and commitment to delivering high-quality images truly impressed me. I highly recommend their services!</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-cell">
                        <div className="card">
                            <div className="card-content">
                                <h4>Christian Bale</h4>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <p>Working with this photographer team was an absolute delight. Their passion for photography is evident in the way they meticulously plan each shot and their dedication to capturing genuine emotions. The team's creativity and professionalism made the entire photoshoot experience enjoyable and stress-free. The photographs turned out to be absolutely stunning, exceeding my expectations!</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-cell">
                        <div className="card">
                            <div className="card-content">
                                <h4>Matt Damon</h4>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <p>I had the privilege of working with this photographer team for a fashion photoshoot, and I couldn't have asked for a better experience. Their vision and ability to bring concepts to life are truly exceptional. The team's attention to detail, excellent communication, and technical expertise resulted in stunning images that surpassed my expectations. I highly recommend their services to anyone seeking top-notch photography.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-cell">
                        <div className="card">
                            <div className="card-content">
                                <h4>Natalie Portman</h4>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <p>I recently had a newborn photoshoot with this photographer team, and I am overwhelmed with joy at the beautiful images they captured. Their patience, gentle approach, and ability to work with infants were remarkable. The team's artistic flair and ability to capture the innocence and tenderness of my baby are truly commendable. I will cherish these precious memories forever.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-cell">
                        <div className="card">
                            <div className="card-content">
                                <h4>Lionel Messi</h4>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <p>I hired this photographer team for a corporate event, and they delivered outstanding results. Their professionalism, punctuality, and ability to blend into the event seamlessly were impressive. The team's candid shots and attention to capturing key moments made for a fantastic visual narrative of the occasion. I highly recommend their services for any corporate photography needs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-cell">
                        <div className="card">
                            <div className="card-content">
                                <h4>Cristiano Ronaldo</h4>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <p>I can't thank this photographer team enough for the incredible engagement photos they captured. From the very beginning, they took the time to understand our vision and made us feel comfortable throughout the entire process. Their creativity and ability to find unique locations resulted in breathtaking images that truly reflect our love story. We are thrilled with the outcome and highly recommend their talent and expertise.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-cell">
                        <div className="card">
                            <div className="card-content">
                                <h4>Kevin De Bruyne</h4>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star "></span>
                                <span class="fa fa-star"></span>
                                <p>This photographer team has an exceptional eye for detail and a knack for capturing the essence of a place. I hired them for a destination wedding, and they beautifully documented every special moment, showcasing the venue's beauty and the love between us and our guests. Their dedication, flexibility, and ability to capture the natural ambiance of the location were truly remarkable. I am forever grateful for their artistry.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="book-now">
                    <a href="#/"data-aos="fade">Book Now</a>
                </div>
            </div>
        </div>
    );
}

export default Review