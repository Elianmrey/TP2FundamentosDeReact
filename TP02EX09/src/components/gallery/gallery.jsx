import GalleryStyle from './gallery.module.css';
import Img from '../img/imgTest.png';
import Img2 from '../img/imgTest2.png';
import Img3 from '../img/imgTest3.png';
import Img4 from '../img/imgTest4.png';
import Img5 from '../img/imgTest5.png';
import buttonNext from '../img/next.svg';
import buttonPrevious from '../img/previous.svg';
import { updateGallery, previous, next } from './gallery.module.js';
import { useState } from 'react';


export default function Gallery() {
    
    const images = [Img, Img2, Img3, Img4, Img5, Img, Img2, Img3, Img4, Img5];

    const [index, setIndex] = useState(0);
    
        return (
            <div className={GalleryStyle.containerGallery}>
                <h2 className={GalleryStyle.titleGallery}>Galeria</h2>
                <div className={GalleryStyle.galleryContainer} >
                
                    <div className={GalleryStyle.imageFader}>
                    
                        <div className={GalleryStyle.fadeLeft}></div>
                        <div className={GalleryStyle.fadeRight}></div>
                    
                    </div >
                    <div className={GalleryStyle.imageContainer} style= { updateGallery(index) }>
                    
                        { images.map( (item, indx) => (<img key={indx} src={item} alt="imagem" className={GalleryStyle.image} />)) }
                        
                    </div>
                </div>
                <div className={GalleryStyle.buttonContainer}>
                
                    <button className={GalleryStyle.button} onClick={() => previous(index, setIndex, images)}>
                        <img src={buttonPrevious} alt="imagem" className={GalleryStyle.galleryButtons} />
                    </button>

                    <button className={GalleryStyle.button} onClick={() => next(index, setIndex, images)}>
                        <img src={buttonNext} alt="imagem" className={GalleryStyle.galleryButtons} />
                    </button>
                
                </div>
            </div>
        )
    
}
