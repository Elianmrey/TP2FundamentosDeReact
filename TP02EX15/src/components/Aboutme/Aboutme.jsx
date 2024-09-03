import AboutmeStyle from './AboutmeStyle.module.css';
import img from '../img/images.jpg'




export default function AboutmeStyleComp()
{
    
    return (
        <div className={AboutmeStyle.componentContainer}>
        <div className={AboutmeStyle.cardAboutContainer}>
            <div className={AboutmeStyle.photoContainer}>
                <img src={ img } alt="Foto de Perfil" title="Elian M. Reyes" className={AboutmeStyle.profilePhoto} />
            </div>

            <div className={AboutmeStyle.descriptionContainer}>

                <h1 className={AboutmeStyle.title}>Elian M. Reyes</h1>
                <p className={AboutmeStyle.description}>
                   Desenvolvedor com experiencia em C#, Java, SQL, JavaScript e Python,
                    com frameworks como .Net, Spring Boot, React etc.
                </p>
            </div>
        </div>
        
        <div className={AboutmeStyle.descriptionExtendedContainer}>
                <h2 className={AboutmeStyle.titleExtended}>Sobre mim</h2>
                <p className={AboutmeStyle.descriptionExtended}>
                    Sou um desenvolvedor de software, com conhecimento em C#,
                    Java, SQL, JavaScript e Python. Tenho habilidade no uso de frameworks
                    como .NET, Spring Boot e React para criar soluções robustas e escaláveis.
                    Meu conhecimento em SQL, me ajuda na otimização de bancos de dados para
                    conseguir desempenho notavelmente mais alto, sobre a base do estudo e aplicação
                    de tecnicas aprendidas. No front-end, desenvolvo interfaces interativas e responsivas
                    em JavaScript e React. Além disso, utilizo Python para automação e análise
                    de dados. Comprometido com a qualidade, entrego código limpo e eficiente,
                    sempre buscando as melhores práticas da indústria e me mantendo informado sobre as 
                    tendencias de produtividade do mercado.
                </p>
                
            </div>
        </div>
    );
 }
