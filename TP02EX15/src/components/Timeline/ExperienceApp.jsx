import StyleTimeline from './ExperienceTimeline.module.css';



export default function ExperienceTimeline() {
    const experiences = [
        {
            title: 'Analista Sênior de Suporte Técnico de reprogramação automotiva',
            date: '12 Jul 2021 - Presente',
            description: 'Suporte tecnico ao cliente na area de reprogramação (Chipagem) automotiva com tecnologias de interpretação de sinais de rede CAN e K-Line.'
        },
        {
            title: 'Produção e Pós-Produção de audiovisual para Marketing Digital na Empresa Lotus Produtora',
            date: 'Jun 2020 - Abr 2021',
            description: 'Ciclo completo desde filmagem até a pós-produção, efeitos audiovisuais e acabado profisional de videos para Marketing Digital'
        },
        {
            title: 'Produção de vídeo para divulgação de empresas e turbinamento de insights e engajamento',
            date: 'Jan 2019 - Mai 2020',
            description: 'Alabancagem de empresas por medio de destaque audiovisual e promoção de produtos e servios.'
        }
    ];

    return (
        <div className={StyleTimeline.generalContainerBox}>
            <div className={StyleTimeline.generalContainer}>
                
<div className={StyleTimeline.holderContainer}>
                <div className={StyleTimeline.holderUp}></div>
</div> 
                
                <div className={StyleTimeline.title}>
                <h2>Timeline Profissional:</h2>
            </div>
            <div className={StyleTimeline.timelineArrow}></div>

            <div className={StyleTimeline.timelineContainer}>
                {experiences.map((experience, index) => (
                    <div key={index} className={StyleTimeline.timelineItem}>
                        <div className={StyleTimeline.timelineContent}>
                            <h3 className={StyleTimeline.timelineTitle}>{experience.title}</h3>
                            <p className={StyleTimeline.timelineDate}>{experience.date}</p>
                            <p className={StyleTimeline.timelineDescription} >{experience.description}</p>
                        </div>
                        
                        <div className={StyleTimeline.timelineMarker}></div>
                    </div>
                ))}
               
            </div>
            </div>
        </div>         
    );
};



