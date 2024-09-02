import Style from './index.module.css'

export default function PortfolioComp() {
  return (
    <div className={Style.containerBox}>
      
      <div className={Style.containerContent}>
        
        <h1 className={Style.title}>Lorem Ipsum</h1>  

        <p className={Style.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora porro nihil,
          doloribus asperiores assumenda rem alias animi iste odio quibusdam ullam
          esse. Est repudiandae id, necessitatibus in voluptatibus atque ab!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique inventor
          e cumque saepe. Temporibus non ab dolorem dolore, et veniam voluptas,
          nostrum, aliquid hic fuga unde obcaecati perspiciatis beatae! Voluptatem, ea.
        </p>

      </div>

    </div>
  );
 }