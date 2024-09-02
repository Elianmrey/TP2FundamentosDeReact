import HeaderLayout from './header.module.css'
import ProfilePhoto from '../img/profile.png'
export default function HeaderComponent()
{
    return (
        <div className={HeaderLayout.header}>
            <img src={ProfilePhoto} alt="profile" className={HeaderLayout.profilePhoto} />
            <div className={HeaderLayout.container}>
                <h1 className={HeaderLayout.title}>My Profile</h1>
            </div>
        </div>
    )
 }