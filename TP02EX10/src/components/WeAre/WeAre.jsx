import WeAreStyle from './WeAre.module.css'
import imgwhoweare01 from '../Img/img02.jpg'
import imgwhoweare02 from '../Img/img03.jpg'
import imgwhoweare03 from '../Img/img04.jpg'

export default function WeAre()
{
    return (
        <div className={WeAreStyle.container}>
            <div className={WeAreStyle.weAreInsideContainer}>
                <h1 className={WeAreStyle.title} >Quem somos</h1> 
                <p  className={WeAreStyle.paragraph}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Reiciendis nostrum, dolore inventore fugiat molestiae
                    necessitatibus illo sint dignissimos laudantium officia
                    maxime, at cumque quis, voluptas veritatis odio voluptatibus
                    a? Quae!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Reiciendis nostrum, dolore inventore fugiat molestiae
                    necessitatibus illo sint dignissimos laudantium officia
                    maxime, at cumque quis, voluptas veritatis odio voluptatibus
                    a? Quae!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Reiciendis nostrum, dolore inventore fugiat molestiae
                    necessitatibus illo sint dignissimos laudantium officia
                    maxime, at cumque quis, voluptas veritatis odio voluptatibus
                    a? Quae!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Reiciendis nostrum, dolore inventore fugiat molestiae
                    necessitatibus illo sint dignissimos laudantium officia
                    maxime, at cumque quis, voluptas veritatis odio voluptatibus
                    a? Quae!
                </p>

            </div>

            <div className={WeAreStyle.imgContainer}>
                
                <img src={imgwhoweare01 } className={WeAreStyle.img} alt="imagem Quem Somos" />
                <img src={imgwhoweare02 } className={WeAreStyle.img} alt="imagem Quem Somos" />
                <img src={ imgwhoweare03} className={WeAreStyle.img} alt="imagem Quem Somos" />

        </div>
            
        </div>
        );
}