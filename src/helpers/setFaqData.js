import { useState } from "react";

export const useFaqData = () => {

    const [faqs, setFaqs] = useState([ 
        {
            id: 1, 
            question: 'What do you need to start my project?', 
            answer: 'The ideal is to have a pre-made layout or design to guide me through the guidelines and to be able to recreate the website more quickly.', 
            open: false
        },
        {
            id: 2, 
            question: 'How long can you take with my project?', 
            answer: 'Depending on the complexity of the project, on average a few weeks, I don\'t usually last a month doing a project.', 
            open: false
        },
        {
            id: 3, 
            question: 'Is hosting and domain registration included in your price?', 
            answer: 'No, the hosting plan and registering a domain is left to the customer. However, I can help with this if needed.', 
            open: false},
        {
            id: 4, 
            question: 'What is your average price per project?', 
            answer: 'The price depends on the complexity of the project, the functionalities it has and its size. My average price ranges from $1,000 USD from the simplest, to $2,000 USD for the most complex, with more logic and functionalities.', 
            open: false},
        {
            id: 5, 
            question: 'How do you handle website maintenance?', 
            answer: 'It depends on what type of maintenance the website needs, if daily maintenance is needed, you work with a monthly payment in which you would be making the necessary adjustments or changes. If they are not very frequent changes, a punctual payment is made for the required maintenance.', 
            open: false},
        {
            id: 6, 
            question: 'What if the project was not what you expected?', 
            answer: 'If the project was carried out to a delivered design, this can hardly happen, in the same way I always promise to deliver the best possible result, so if the delivery has a defect I would make the adjustment at no cost', 
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