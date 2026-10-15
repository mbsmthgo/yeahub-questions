import '../styles/footer.css'
import figmaIcon from '../assets/figma.svg'
import tgIcon from '../assets/tg.svg'
import youtubeIcon from '../assets/youtube.svg'
import ttIcon from '../assets/tt.svg'
import gitIcon from '../assets/git.svg'

const media = [
    {
        id: 1,
        name: 'Figma',
        icon: figmaIcon
    },
    {
        id: 2,
        name: 'Telegram',
        icon: tgIcon
    },
    {
        id: 3,
        name: 'Youtube',
        icon: youtubeIcon
    },
    {
        id: 4,
        name: 'TikTok',
        icon: ttIcon
    },
    {
        id: 5,
        name: 'Github',
        icon: gitIcon
    }
]

export default function Footer() {
    return (
        <div className='footer'>
            <h2>Yeahub</h2>
            <div className='footer__extra'>
                <p>Выбери, каким будет IT завтра, вместе c нами</p>
                <p className='footer__about'>YeaHub — это полностью открытый проект, призванный объединить и улучшить
                    IT-сферу. Наш исходный код доступен для просмотра на GitHub. Дизайн проекта также открыт для
                    ознакомления в Figma.</p>
            </div>
            <div className='footer__contacts'>
                <p>© 2024 YeaHub Документы</p>
                <div className='footer__media'>
                    <p>Ищите нас и в других соцсетях @yeahub_it</p>
                    {media.map(item => <img className='footer__mediaItem' key={item.id} src={item.icon}
                                            alt={`${item.name} Icon`}/>)}
                </div>
            </div>
        </div>
    )
}