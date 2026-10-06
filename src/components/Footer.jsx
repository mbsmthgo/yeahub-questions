import '../styles/footer.css'

const media = [
    {
        id: 1,
        name: 'Figma',
        icon: 'src/assets/figma.svg'
    },
    {
        id: 2,
        name: 'Telegram',
        icon: 'src/assets/tg.svg'
    },
    {
        id: 3,
        name: 'Youtube',
        icon: 'src/assets/youtube.svg'
    },
    {
        id: 4,
        name: 'TikTok',
        icon: 'src/assets/tt.svg'
    },
    {
        id: 5,
        name: 'Github',
        icon: 'src/assets/git.svg'
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