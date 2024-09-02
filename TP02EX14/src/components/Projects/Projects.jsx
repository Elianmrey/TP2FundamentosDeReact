import Style from './ProjectsStyle.module.css'

import img1 from '../img/CardImages/unknownDoc.png'
import img2 from '../img/CardImages/unknownDoc.png'
import img3 from '../img/CardImages/LandPageCorretor.jpg'
import img4 from '../img/CardImages/LandPageEmpresa.jpg'
import img5 from '../img/CardImages/newsletter.png'
import img6 from '../img/CardImages/unknownDoc.png'


export default function Projects()
{
    const p1 = 'https://github.com/Elianmrey/AT-PROJETO-DE-BLOCO-TP-10.git';
    const p2 = 'https://github.com/Elianmrey/Torque_Computers'
    const p3 = 'https://github.com/Elianmrey/Cartao-Virtual-CAMoraes-sem-Instagram.git'
    const p4 = 'https://github.com/Elianmrey/Informa-o-de-contato-A2Pro'
    const p5 = 'https://github.com/Elianmrey/Newsletter.git'
    const p6 = 'https://github.com/Elianmrey/Projeto-de-Bloco-FastApi.git'
    
    
    
    const desc1 = ' Projeto de API para Petshop desenvolvido com Java, Framework: Spring boot. \
                                    Armazenamento em banco de dados SQL. Dispõe de capacidade para adicionar,\
                                    editar, apagar e responder requisições ao banco para leitura de dados.';

    const desc2 = ' Loja de peças automotivas desenvolvido com C# ASP .NET Core Razor,\
                             com funcionalidades de gerenciamento basico de produtos';
    
    const desc3 = 'Land Page de contatos para facilitar a comunicação de empresário\
                            do ramo imobiliário mostrando de forma funcional todos os contatos e redes sociais';

    const desc4 = 'Land Page de contatos para facilitar a comunicação de empresa\
                            do ramo automotivo mostrando de forma funcional todos os contatos e redes sociais';
    
    const desc5 = 'Projeto de front para NewsLetter do Site de www.frontendmentor.io'
    
    const desc6 = 'Projeto de API com Python para analise, transporte, gerenciamento\
                            de dados e armazenamento em banco de dados SQL.';



    const vectorProjects = [p1, p2, p3, p4, p5, p6]
    const vectorDesc = [desc1, desc2, desc3, desc4, desc5, desc6]
    const vectorTitle = ['Petshop Backend API','Torque Computers', 'Land Page Corretor', 'Land Page Empresa Automotiva', 'Frontend Mentor Newaletter', 'Fast API Analise de Dados']
    
    const cardImages = [img1, img2, img3, img4, img5, img6]
    
    
    return (

        <div className={Style.container}>

            <div className={Style.title}>
                <h2>Projetos</h2>
            </div>
            <div className={ Style.cardStockContainer } >
            {
               vectorProjects.map(
                            (item, index) => (

                   <div key={index} className={Style.card}>
                                       <div className={Style.imgContainer}>
                                           <img src={cardImages[index]} alt="Card imagem capa" title="Card Imagem Capa"  className={Style.img}/>
                                                </div>
                       
                                       <span>{ vectorTitle[index] }</span>
                        
                                                <p className={Style.info}>
                                                    {vectorDesc[index]}
                                                </p>

                                                <div className={Style.share}>
                                                    <a href={item} target='Ublank'>
                                                <svg className={Style.gitSvg} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z">
                                                            </path>
                                                        </svg>
                                                    </a>
                            
                                                </div>
                                                <button><a href={item} target='Ublank'>Visitar Repositorio</a></button>
                                            </div>
                   ))}
                </div>
             
          </div>
            

    
    
    
    );
}
 