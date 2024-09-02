import ProductStyle from './Product.module.css';
import ImgImported from '../Img/Logo.png';

export default function Products()
{ 
  return (
        
<div className={ProductStyle.card}>
      <div className={ProductStyle.cardImage}>
        <img src={ImgImported } className={ProductStyle.image} alt="product image"/>
    </div>
    <div className={ProductStyle.category}> Imagem texto </div>
    <div className={ProductStyle.heading}> Lorem ipsum dolor 
        <div className={ProductStyle.other}> info info e mais info</div>
    </div>
</div>
    );
}