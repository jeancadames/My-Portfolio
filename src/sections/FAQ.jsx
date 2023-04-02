import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'

import {useFaqData} from '../helpers/setFaqData';

export const FAQ = () => {

  const {faqs, toggleFAQ} = useFaqData();

  return (
    <section id="faq">
      <div className="container faq-container">
        <h2>Preguntas Frecuentes</h2>
        <p>Estas son algunas preguntas que normalmente recibo, haz click en la pregunta para mostrar la respuesta. ¡Si todavía tienes duda envíame un mensaje a través de la sección de contactos!</p>
        <div className="questions-container">
            {
              faqs.map((faq, index) => {
                return (
                  <div className={faq.open ? 'card faq-card active' : 'card faq-card'} key={faq.id} onClick={() => toggleFAQ(index)}>
                    <div className="faq-title">
                      <h5>{faq.question}</h5>
                      <span className='faq-icon'>{faq.open ? <AiOutlineMinus/> : <AiOutlinePlus/> }</span>
                    </div>
                  <div className="content">
                    <small>{faq.answer}</small>
                  </div>
                </div>
                )
              })
            }
        </div>
      </div>
    </section>
  )
}
