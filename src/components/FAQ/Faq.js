import React from 'react'
import classes from './Faq.module.css';
import QACard from './QACard/QACard';
import CoronaImage from './../../assets/Image/faq.png';
import CoronaPoster from './../../assets/Image/faq1.png';


const faq = () => {
    let faq = [
        {
            Ques: "What is corona virus?",
            Ans: `Corona viruses are a large family of viruses which may cause illness
        in animals or humans. In humans, several coronaviruses are known
        to cause respiratory infections ranging from the common cold to more
        severe diseases such as Middle East Respiratory Syndrome (MERS)
        and Severe Acute Respiratory Syndrome (SARS). The most recently
        discovered coronavirus causes coronavirus disease COVID-19.`},
        {
            Ques: `What is COVID-19`,
            Ans: `COVID-19 is the infectious disease caused by the most recently
        discovered corona virus. This new virus and disease were unknown
        before the outbreak began in Wuhan, China, in December 2019. `},
        {
            Ques: `What are the symptoms of COVID-19?`,
            Ans: `The most common symptoms of COVID-19 are fever, tiredness, and
        dry cough. Some patients may have aches and pains, nasal
        congestion, runny nose, sore throat or diarrhea. These symptoms are
        usually mild and begin gradually. Some people become infected but
        don’t develop any symptoms and don't feel unwell. Most people
        (about 80%) recover from the disease without needing special
        treatment. Around 1 out of every 6 people who gets COVID-19
        becomes seriously ill and develops difficulty breathing. Older people,
        and those with underlying medical problems like high blood pressure,
        heart problems or diabetes, are more likely to develop serious illness.
        People with fever, cough and difficulty breathing should seek medical
        attention. `},
        {
            Ques: `What are the main symptoms of COVID-19?`,
            Ans: `The most common symptoms of COVID-19 are fever, tiredness, 
            and dry cough. Some patients may have aches and pains, 
            nasal congestion, runny nose, sore throat or diarrhea. 
            These symptoms are usually mild and begin gradually. Some people become infected but 
            don’t develop any symptoms and don't feel unwell. 
            Most people (about 80%) recover from the disease without needing special treatment. 
            Around 1 out of every 6 people who gets COVID-19 becomes seriously ill and develops difficulty breathing. 
            Older people, and those with underlying medical problems like high blood pressure, heart problems or diabetes, are more likely to develop serious illness. People with fever, cough and difficulty breathing should seek medical attention.`
        },
        {
            Ques: `How Does COVID-19 spread?`,
            Ans: `People can catch COVID-19 from others who have the virus. The disease can spread from person to person through small droplets from the nose or mouth which are spread when a person with COVID-19 coughs or exhales. These droplets land on objects and surfaces around the person. Other people then catch COVID-19 by touching these objects or surfaces, then touching their eyes, nose or mouth. People can also catch COVID-19 if they breathe in droplets from a person with COVID-19 who coughs out or exhales droplets. This is why it is important to stay more than 1 meter (3 feet) away from a person who is sick.
        WHO is assessing ongoing research on the ways COVID-19 is spread and will continue to share updated findings. `},
        {
            Ques: `Can the virus that causes COVID-19 be transmitted through the air?`,
            Ans: `Studies to date suggest that the virus that causes COVID-19 is mainly transmitted through contact with respiratory droplets rather than through the air.  See previous answer on “How does COVID-19 spread?”`

        },
        {
            Ques: `Can CoVID-19 be caught from a person who has no symptoms?`,
            Ans: `The main way the disease spreads is through respiratory droplets expelled by someone who is coughing. The risk of catching COVID-19 from someone with no symptoms at all is very low. However, many people with COVID-19 experience only mild symptoms. This is particularly true at the early stages of the disease. It is therefore possible to catch COVID-19 from someone who has, for example, just a mild cough and does not feel ill.  WHO is assessing ongoing research on the period of transmission of COVID-19 and will continue to share updated findings.`
        },
        {
            Ques: `Can I catch COVID-19 from the feces of someone with the disease?`,
            Ans: `The risk of catching COVID-19 from the feces of an infected person appears to be low. While initial investigations suggest the virus may be present in feces in some cases, spread through this route is not a main feature of the outbreak. WHO is assessing ongoing research on the ways COVID-19 is spread and will continue to share new findings. Because this is a risk, however, it is another reason to clean hands regularly, after using the bathroom and before eating. `
        },
        {
            Ques: `What can I do to protect myself and prevent the spread of disease?`,
            Ans: `Stay aware of the latest information on the COVID-19 outbreak, available on the WHO website and through your national and local public health authority. Many countries around the world have seen cases of COVID-19 and several have seen outbreaks. Authorities in China and some other countries have succeeded in slowing or stopping their outbreaks. However, the situation is unpredictable so check regularly for the latest news.`
        }
    ];

    let res = (
        faq.map(fa => {
            return <QACard
                ques={fa.Ques}
                ans={fa.Ans}
                key={fa.Ques} />
        })
    )
    return (
        <div className={classes.FAQ}>
            <h1 className={classes.FaqHeading}>Frequently Asked Questions</h1>
            <div className={classes.FaqData}>
                <div>
                    {res}
                </div>
                <div>
                    <img className={classes.PicOne} src={CoronaImage} alt="Awareness Pic"/>
                </div>
            </div>
            <img className={classes.Poster} src={CoronaPoster} alt="Awareness" />
        </div>
    )
}

export default faq;
