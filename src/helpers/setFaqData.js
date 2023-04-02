import { useState } from "react";

export const useFaqData = () => {

    const [faqs, setFaqs] = useState([ 
        {
            id: 1, 
            question: '¿Qué necesitas para comenzar con mi proyecto?', 
            answer: 'Lo ideal es tener una maquetación o un diseño prehecho para guiarme de las directrices y poder recrear el sitio web con mayor velocidad.', 
            open: false
        },
        {
            id: 2, 
            question: '¿Cuánto te puedes demorar con mi proyecto?', 
            answer: 'Dependiendo la complejidad del proyecto, de manera promedio algunas semanas, no suelo durar un mes realizando un proyecto.', 
            open: false
        },
        {
            id: 3, 
            question: '¿El hosting y el registro del dominio está incluido en tu precio?', 
            answer: 'No, el plan del hosting y registrar un dominio queda por parte del cliente. Sin embargo, puedo ayudar con esto de ser necesario.', 
            open: false},
        {
            id: 4, 
            question: '¿Cuál es tu precio promedio por proyecto?', 
            answer: 'El precio depende de la complejidad del proyecto, de las funcionalidades que tenga y del tamaño de este. Mi precio promedio abarca a partir de $1,000 USD desde el mas simple, hasta los $2,000 USD el más complejo, con más lógica y funcionalidades.', 
            open: false},
        {
            id: 5, 
            question: '¿Cómo manejas el mantenimiento de la web?', 
            answer: 'Depende de que tipo de mantenimiento necesita el sitio web, si se necesita un mantenimiento diario se trabaja con un pago mensual en el que estaría realizando los ajustes o cambios necesarios. De ser cambios no muy frecuentes se realiza una paga puntual por el mantenimiento requerido.', 
            open: false},
        {
            id: 6, 
            question: '¿Qué pasa si el proyecto no era lo que esperaba?', 
            answer: 'Si el proyecto fue realizado a un diseño entregado, dificilmente esto puede suceder, de igual forma me comprometo siempre a entregar el mejor resultado posible, por lo que si la entrega tiene algun defecto realizaría el ajuste sin costo alguno', 
            open: false
        },
    ]);

    const toggleFAQ = index => {
        setFaqs(
            faqs.map((faq, i) => {
                if (i === index) {
                    faq.open = !faq.open;
                } else {
                    faq.open = false;
                }
                
                return faq;
            })
            );
        };
    
    return {
        faqs, toggleFAQ
    }
}