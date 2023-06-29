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


                    <a href="https://www.newindianmodels.com/wp-content/uploads/2020/09/Walking-pose-male-model-poses.jpg">
                        <img alt="img2" src="https://www.newindianmodels.com/wp-content/uploads/2020/09/Walking-pose-male-model-poses.jpg" />
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


                    <a href="https://www.clphotography.co.uk/portfolio/files/imgFull-48677.jpg">
                        <img alt="img6" src="https://www.clphotography.co.uk/portfolio/files/imgFull-48677.jpg" />
                    </a>


                    <a href="https://i.pinimg.com/564x/38/54/54/385454c603d3a2fc92eafdb30fe7b462.jpg">
                        <img alt="img7" src="https://i.pinimg.com/564x/38/54/54/385454c603d3a2fc92eafdb30fe7b462.jpg" />
                    </a>

                    <a href="https://i.pinimg.com/564x/ce/ba/23/ceba2303eadd931f3d5e0ca1192b9698.jpg">
                        <img alt="img8" src="https://i.pinimg.com/564x/ce/ba/23/ceba2303eadd931f3d5e0ca1192b9698.jpg" />
                    </a>

                    <a href="https://i.pinimg.com/564x/f8/44/a5/f844a5af52c33e38f90e606c3693bc8c.jpg">
                        <img alt="img9" src="https://i.pinimg.com/564x/f8/44/a5/f844a5af52c33e38f90e606c3693bc8c.jpg" />
                    </a>

                    <a href="https://i.pinimg.com/564x/33/82/cb/3382cbe05aa49a045d2d227b97a40cb5.jpg">
                        <img alt="img10" src="https://i.pinimg.com/564x/33/82/cb/3382cbe05aa49a045d2d227b97a40cb5.jpg" />
                    </a>

                    <a href="https://i.pinimg.com/236x/73/78/5d/73785dac544872504ec7203666d39de6.jpg">
                        <img alt="img11" src="https://i.pinimg.com/236x/73/78/5d/73785dac544872504ec7203666d39de6.jpg" />
                    </a>

                    <a href="https://bidunart.com/wp-content/uploads/2019/12/Portrait064a-1280x640.jpg">
                        <img alt="img12" src="https://bidunart.com/wp-content/uploads/2019/12/Portrait064a-1280x640.jpg" />
                    </a>

                    <a href="https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-640w.jpeg">
                        <img alt="img13" src="https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-640w.jpeg" />
                    </a>

                    <a href="https://www.rangefinderonline.com/wp-content/uploads/2019/05/featuredAmanda_Alex_Yosemite_Elopement_The_Foxes_Photography_232-2.jpg">
                        <img alt="img14" src="https://www.rangefinderonline.com/wp-content/uploads/2019/05/featuredAmanda_Alex_Yosemite_Elopement_The_Foxes_Photography_232-2.jpg" />
                    </a>

                    <a href="https://i.pinimg.com/564x/96/d6/74/96d6748356b7da8aca6a71563dfa54ea.jpg">
                        <img alt="img15" src="https://i.pinimg.com/564x/96/d6/74/96d6748356b7da8aca6a71563dfa54ea.jpg" />
                    </a>

                    <a href="https://i.pinimg.com/564x/c2/57/8a/c2578acd994c19a058e475c4f04a9cc3.jpg">
                        <img alt="img16" src="https://i.pinimg.com/564x/c2/57/8a/c2578acd994c19a058e475c4f04a9cc3.jpg" />
                    </a>
                    <a href="https://photos.smugmug.com/photos/i-gDSDQWh/0/L/i-gDSDQWh-L.jpg">
                        <img alt="img17" src="https://photos.smugmug.com/photos/i-gDSDQWh/0/L/i-gDSDQWh-L.jpg" />
                    </a>
                    <a href="https://i.pinimg.com/originals/8b/07/3c/8b073cd8b513cd11567b129d381e85e8.jpg">
                        <img alt="img18" src="https://i.pinimg.com/originals/8b/07/3c/8b073cd8b513cd11567b129d381e85e8.jpg" />
                    </a>
                    <a href="https://img.freepik.com/premium-photo/portrait-young-woman-with-red-dress_855221-442.jpg">
                        <img alt="img19" src="https://img.freepik.com/premium-photo/portrait-young-woman-with-red-dress_855221-442.jpg" />
                    </a>
                    <a href="https://i.pinimg.com/564x/73/ce/42/73ce429d3fcac2a412d026fe08d6bde1.jpg">
                        <img alt="img20" src="https://i.pinimg.com/564x/73/ce/42/73ce429d3fcac2a412d026fe08d6bde1.jpg" />
                    </a>

                </LightGallery>
            </div>


        </div>
    )
}

export default PhotoGallery