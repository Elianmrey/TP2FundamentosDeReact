import Imag from '../img/img01.png'
import Style from './style.module.css'

export default function BlogIndex() {
  return (
 <div className={Style.containerBox}>
    <div className={Style.container} >

      <img src={Imag} alt="Capa" title='Foto de Capa' className={Style.img} />
      <h1 className= {Style.title}>Blog sobre cosmonautas</h1>

      <p className={Style.paragraph}>
        Este é um blog sobre cosmonautas, onde você pode encontrar informações sobre a vida no
        espaço, missões espaciais e muito mais.

        No vasto e silencioso vazio do espaço, os cosmonautas enfrentam desafios inimagináveis,
        desde a adaptação à microgravidade até a convivência em um ambiente fechado por longos
        períodos. Estes exploradores não apenas conduzem experimentos científicos de ponta, mas
        também representam o espírito de exploração humana, rompendo as fronteiras do desconhecido.
        No nosso blog, mergulhe na fascinante rotina desses heróis do espaço, descubra as histórias das
        missões espaciais mais icônicas e entenda como a vida fora da Terra molda o futuro da
        humanidade.
      </p>
      <p className={Style.paragraph}>
        Além das exigências físicas e psicológicas, a vida de um cosmonauta é repleta de rigorosos
        treinamentos e preparação intensa. Eles passam anos se preparando para missões que podem
        durar meses, aprendendo a operar complexos sistemas espaciais, realizar reparos críticos e até
        cultivar alimentos em órbita. No entanto, as recompensas são igualmente grandes: a oportunidade
        de ver a Terra de uma perspectiva única, contribuir para avanços científicos significativos e, talvez,
        preparar o caminho para futuras gerações de exploradores espaciais. No nosso blog, você vai
        explorar esses aspectos fascinantes, desde os detalhes técnicos até as experiências pessoais dos
        cosmonautas em missão.
      </p>
      </div>
  </div>
  );
}
