import FooterLayout from './footer.module.css'

export default function HeaderComponent()
{
    return (
        <div className={FooterLayout.footer}>
            <div className={FooterLayout.container}>
                <span className={FooterLayout.text}>Todos os direitos reservados | Infnet 2024</span>
            </div>
        </div>
    )
 }