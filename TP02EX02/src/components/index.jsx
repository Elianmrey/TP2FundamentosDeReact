import Style from './index.module.css'
import Imag01 from '../img/img01.png'
import Imag02 from '../img/img02.png'
import Imag03 from '../img/img03.png'
import Imag04 from '../img/img04.png'

export default function PortfolioComp() {
  return (
    <div className={Style.containerBox}>
      <div className={Style.containerContent}>
        <div className={Style.imgsTopContainer}>
              <img src={Imag01} alt="Sucos naturais" className={Style.firstImag} />
              <img src={Imag02} alt="Sucos naturais" className={Style.secondImag} />
              <img src={Imag03} alt="Sucos naturais" className={Style.thirdImag} />
          </div>

   <div className={Style.paragrafTitleContainer}>
          <h1 className={Style.title}>Beneficios dos sucos naturais</h1>
          <p className={Style.paragraph}>
        O suco natural é uma excelente opção para quem busca uma alimentação saudável e equilibrada.
        Rico em vitaminas, minerais e antioxidantes, ele oferece uma forma prática de consumir nutrientes
        essenciais para o bom funcionamento do corpo. Por ser feito a partir de frutas frescas, o suco natural
        preserva uma alta concentração de fibras, que auxiliam na digestão e contribuem para a sensação
        de saciedade. Além disso, o consumo regular de suco natural pode fortalecer o sistema imunológico,
        ajudar na hidratação e fornecer energia de forma rápida e natural, sem os aditivos e açúcaresrefinados
        frequentemente encontrados em sucos industrializados. Incorporar suco natural à dieta diária pode ser
        um passo importante para melhorar a saúde geral e aumentar o bem-estar.
       </p>

        </div>
      <img src={Imag04} alt="" className={Style.verticalImag} />
      </div>
    </div>
  );
 }