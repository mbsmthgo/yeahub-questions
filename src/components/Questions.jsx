import '../styles/questions.css'
import Pagination from "./Pagination.jsx";
import QuestionItem from "./QuestionItem.jsx";
import filtersIcon from '../assets/filters.svg'

export default function Questions({
                                      questions, totalPages, currentPage, error, loading, open,
                                      handleQuestionToggle, handleNextPage, handlePreviousPage, handlePageClick,
                                      setMenuOpen
                                  }) {

    return (
        <section className='questions-container'>
            <div className='questions__title-container'>
                <h1 className='questions__title'>Вопросы React, JavaScript</h1>
                <button onClick={() => setMenuOpen(prev => !prev)}
                        className='menu-btn'>
                    <img src={filtersIcon} alt='Filters Icon'/>
                </button>
            </div>
            {error ? <p className='error-message'>К сожалению, не удалось загрузить данные... {error}</p> :
                loading ? <p>Загрузка...</p> : (
                    <>
                        <ul className='questions__list'>
                            {questions.data?.length === 0 && <li className='notFound-msg'
                                                                 style={{listStyle: 'none'}}>
                                К сожалению, По Вашему запросу ничего не найдено...
                            </li>}
                            {questions.data?.map(question => (
                                <QuestionItem key={question.id} question={question} isOpen={open.includes(question.id)}
                                              onToggle={handleQuestionToggle}/>
                            ))}
                        </ul>
                        {totalPages > 1 && (
                            <Pagination totalPages={totalPages} currentPage={currentPage}
                                        handlePageClick={handlePageClick} handleNextPage={handleNextPage}
                                        handlePreviousPage={handlePreviousPage}/>
                        )}
                    </>
                )}
        </section>
    )
}