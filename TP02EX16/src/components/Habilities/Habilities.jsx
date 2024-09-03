import HabilitiesStyle from './Habilities.module.css';
import csharp from '../img/Capabilities/csharp.png';
import java from '../img/Capabilities/java.png';
import sql from '../img/Capabilities/sql.png';
import javascript from '../img/Capabilities/javascript.png';
import python from '../img/Capabilities/python.png';
import netFramework from '../img/Capabilities/dotnet.svg';
import springBoot from '../img/Capabilities/spring.svg';
import react from '../img/Capabilities/react.png';



export default function Habilities()
{

    const languages = [csharp, java, sql, javascript, python]

    const frameworks = [netFramework, springBoot, react]
    
     return (   
        <div className={HabilitiesStyle.container}>
             
             <div className={HabilitiesStyle.title}>
                 <h2>Habilidades</h2>
             </div>
              <div className={HabilitiesStyle.capabilitiesContainer}>
             <div className={HabilitiesStyle.categoryContainer}>
                 <span>Linguagens de Programação:</span>
             </div>
            
            
                
                <div className={HabilitiesStyle.imageContainer}> 
                        { languages.map((item, index) =>(
                            <img src={item} key={index} alt="Capacidades / Habilidades" title="Habilidades e conhecimentos"  className={HabilitiesStyle.ImageCapabilities} />
                        ))}
                </div>
                  
                    <div className={HabilitiesStyle.categoryContainer}>
                         <span>Frameworks:</span>
                     </div>   
                
                 <div className={HabilitiesStyle.imageContainer} >  
                        { frameworks.map((item, index) =>(
                            <img src={item} key={index} alt="Capacidades / Habilidades" title="Habilidades e conhecimentos"  className={HabilitiesStyle.ImageCapabilities} />
                         ))}
                </div>
                           
            </div>
        </div>
     );
 }