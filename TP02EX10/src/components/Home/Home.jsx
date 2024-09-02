import HomeStyle from './Home.module.css'
import img01 from '../Img/img01.jpg'

export default function Home() {
    return (
        <div className={HomeStyle.containerHome} >
            <img src={img01} alt="Negocios" className={HomeStyle.image} />
            
            <div className={HomeStyle.paragraphContainer}>
                <h2 className={HomeStyle.title}>Lorem Ipsum</h2>
                <p className={HomeStyle.paragraph}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quam veniam est deserunt. Quaerat mollitia expedita obcaecati
                dolores corporis odit ullam, consequatur, impedit consequuntur,
                eveniet aspernatur! Perspiciatis tempora voluptatum mollitia quos?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quam veniam est deserunt. Quaerat mollitia expedita obcaecati
                dolores corporis odit ullam, consequatur, impedit consequuntur,
                eveniet aspernatur! Perspiciatis tempora voluptatum mollitia quos?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quam veniam est deserunt. Quaerat mollitia expedita obcaecati
                dolores corporis odit ullam, consequatur, impedit consequuntur,
                eveniet aspernatur! Perspiciatis tempora voluptatum mollitia quos?
                </p>
            </div>
        </div>
    );
}