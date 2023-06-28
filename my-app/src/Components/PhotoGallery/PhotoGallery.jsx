import React from 'react'
import '../../Styles/PhotoGallery.css'

import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';



function PhotoGallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className='PhotoGallery'>
            <div className="container">
                <LightGallery
                    onInit={onInit}
                    speed={500}
                >


                    <a href="https://iso.500px.com/wp-content/uploads/2020/08/stock-photo-240662573.jpg">
                        <img alt="img1" src="https://iso.500px.com/wp-content/uploads/2020/08/stock-photo-240662573.jpg" />
                    </a>


                    <a href="assets/img/about-gallerya9f39b.jpg">
                        <img alt="img2" src="assets/img/about-gallerya9f39b.jpg" />
                    </a>


                    <a href="https://i.pinimg.com/564x/e7/6f/86/e76f86a7889232e98e2c6533d11f1c43.jpg">
                        <img alt="img3" src="https://i.pinimg.com/564x/e7/6f/86/e76f86a7889232e98e2c6533d11f1c43.jpg" />
                    </a>


                    <a href="https://i.pinimg.com/564x/6a/26/51/6a265150c3565db3cab9d9e77e024f06.jpg">
                        <img alt="img4" src="https://i.pinimg.com/564x/6a/26/51/6a265150c3565db3cab9d9e77e024f06.jpg" />
                    </a>


                    <a href="https://i.pinimg.com/564x/ac/20/1f/ac201ffa1e72f769e6bfbc8322c2483d.jpg">
                        <img alt="img5" src="https://i.pinimg.com/564x/ac/20/1f/ac201ffa1e72f769e6bfbc8322c2483d.jpg" />
                    </a>


                    <a href="https://i.pinimg.com/474x/09/2e/9a/092e9aed9ea7c56bcdbeb0cda6609bc2.jpg">
                        <img alt="img1" src="https://i.pinimg.com/474x/09/2e/9a/092e9aed9ea7c56bcdbeb0cda6609bc2.jpg" />
                    </a>


                    <a href="https://i.pinimg.com/564x/38/54/54/385454c603d3a2fc92eafdb30fe7b462.jpg">
                        <img alt="img1" src="https://i.pinimg.com/564x/38/54/54/385454c603d3a2fc92eafdb30fe7b462.jpg" />
                    </a>

                    <a href="https://i.pinimg.com/564x/ce/ba/23/ceba2303eadd931f3d5e0ca1192b9698.jpg">
                        <img alt="img1" src="https://i.pinimg.com/564x/ce/ba/23/ceba2303eadd931f3d5e0ca1192b9698.jpg" />
                    </a>

                    <a href="https://i.pinimg.com/564x/f8/44/a5/f844a5af52c33e38f90e606c3693bc8c.jpg">
                        <img alt="img1" src="https://i.pinimg.com/564x/f8/44/a5/f844a5af52c33e38f90e606c3693bc8c.jpg" />
                    </a>

                    <a href="https://i.pinimg.com/564x/33/82/cb/3382cbe05aa49a045d2d227b97a40cb5.jpg">
                        <img alt="img1" src="https://i.pinimg.com/564x/33/82/cb/3382cbe05aa49a045d2d227b97a40cb5.jpg" />
                    </a>

                    <a href="https://i.pinimg.com/236x/73/78/5d/73785dac544872504ec7203666d39de6.jpg">
                        <img alt="img1" src="https://i.pinimg.com/236x/73/78/5d/73785dac544872504ec7203666d39de6.jpg" />
                    </a>

                    <a href="https://i.pinimg.com/236x/f0/bc/0b/f0bc0b17dc1a40361e86030011e69d25.jpg">
                        <img alt="img1" src="https://i.pinimg.com/236x/f0/bc/0b/f0bc0b17dc1a40361e86030011e69d25.jpg" />
                    </a>

                    <a href="https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-640w.jpeg">
                        <img alt="img1" src="https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-640w.jpeg" />
                    </a>

                    <a href="https://www.rangefinderonline.com/wp-content/uploads/2019/05/featuredAmanda_Alex_Yosemite_Elopement_The_Foxes_Photography_232-2.jpg">
                        <img alt="img1" src="https://www.rangefinderonline.com/wp-content/uploads/2019/05/featuredAmanda_Alex_Yosemite_Elopement_The_Foxes_Photography_232-2.jpg" />
                    </a>

                    <a href="https://i.pinimg.com/564x/96/d6/74/96d6748356b7da8aca6a71563dfa54ea.jpg">
                        <img alt="img1" src="https://i.pinimg.com/564x/96/d6/74/96d6748356b7da8aca6a71563dfa54ea.jpg" />
                    </a>

                    <a href="https://modernteen.co/wp-content/uploads/2023/04/94fd4eec8171e68f99d52a3a32e8063a.jpeg">
                        <img alt="img1" src="https://modernteen.co/wp-content/uploads/2023/04/94fd4eec8171e68f99d52a3a32e8063a.jpeg" />
                    </a>

                </LightGallery>
            </div>


        </div>
    )
}

export default PhotoGallery