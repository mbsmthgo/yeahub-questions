export default function ShortAnswerCard({shortAnswer}) {
    return (
        <div className='shortAnswer-card'>
            <h3 className='shortAnswer-title'>Краткий ответ</h3>
            <div className='shortAnswer-description'
                 dangerouslySetInnerHTML={{__html: `<p>${shortAnswer}</p>`}}/>
        </div>
    )
}