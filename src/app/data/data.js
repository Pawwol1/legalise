import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';


export const languages = [
    {
        code: 'pl',
        name: 'Polski',
        country_code: 'pl',
    },
    {
        code: 'en',
        name: 'English',
        country_code: 'gb',
    },
    {
        code: 'ua',
        name: 'український',
        country_code: 'ua',
    },
    {
        code: 'ru',
        name: 'русский',
        country_code: 'ru',
    },
]

export const links = [
    {
        id: 1,
        url: '#mission',
        text: 'Misja',
    },
    {
        id: 2,
        url: '#offer',
        text: 'Oferta',
    },
    {
        id: 3,
        url: '#reference',
        text: 'Referencje',
    },
    {
        id: 4,
        url: '#calculator',
        text: 'Cennik',
    },
    {
        id: 5,
        url: '#contact',
        text: 'Kontakt',
    },
];

export const social = [
    {
        id: 1,
        url: 'https://www.facebook.com',
        icon: <FaFacebook />,
    },
    {
        id: 2,
        url: 'https://www.twitter.com',
        icon: <FaTwitter />,
    },
    {
        id: 3,
        url: 'https://www.linkedin.com',
        icon: <FaLinkedin />,
    },
];

export const offer = [
    {
        id: 1,
        title: 'Pobyt czasowy',
        info: [
            "Wykonywanie pracy", "Działalność gospodarcza", "Stacjonarne studia wyższe", "Pobyt z obywatelem RP", "Pobyt z cudzoziemcem", "Praca sezonowa", "Prawa człowieka i dziecka", "Odwołanie od decyzji", "Skargi do WSA i NSA"
        ]
    },
    {
        id: 2,
        title: 'Pobyt stały',
        info: [
            "Udzielenie zezwolenia", "Odmowa wszczęcia postępowania", "Odmowa udzielenia zezwolenia", "Cofnięcie zezwolenia", "Wygaśnięcie zezwolenia", "Skargi do WSA i NSA"
        ]
    },
    {
        id: 3,
        title: 'Praca',
        info: [
            "Zezwolenie na pracę", "Oświadczenie o pow. pracy", "Zezwolenie na pracę sezonową", "Oddelegowanie pracownika", "Prawo podatkowe", "Ubezpieczenie społeczne", "Agencja pracy", "Działalność gospodarcza"
        ]
    },
]

export const reviews = [
    {   id: 1,
        name: "Natalia Zalewska",
        text: "Pełna profeska!!! Miła, konkretna obsługa i bardzo fachowa. Świetne ceny, polecam!!!"
    },
    {
        id: 2,
        name: "Olena Novakov",
        text: "Odpowiedź na moje pytanie była w 100% wyczerpująca. Bardzo podoba mi się to “że jeśli nasuną się jeszcze jakieś dodatkowe pytania, można je zadać bez dodatkowych opłat”. Na pewno będę korzystała z tego serwisu, gdy tylko będę potrzebowała pomocy. Dodatkowo odpowiedzi udzielane są bardzo szybko"
    },
    {
        id: 3,
        name: "Albert Andrzejewski",
        text: "Polecam wszystkim !!!! Fantastyczna obsługa: szybka i fachowa. Dziękuję z całego serca w imieniu swoim i żony. Życzę wszystkiego dobrego."
    },
    {
        id: 4,
        name: "Oktawian Walczak",
        text: "Bardzo profesjonalna, kompetentna obsługa. Usługa wykonana szybko i na najwyższym poziomie w dobrej cenie! Polecam!"
    },
    {
        id: 5,
        name: "Klaudia Wiśniewska",
        text:
            "Odpowiedź na nurtujące mnie pytanie otrzymałam bardzo szybko. Od razu po wysłaniu pytania uzupełniającego. Odpowiedź w pełni mnie usatysfakcjonowała. Była konkretna i profesjonalna, poparta przepisami prawa. Jeżeli będę miała w przyszłości jakieś problemy prawne, to z pewnością skorzystam z tego portalu. "
    },
    {   id: 6,
        name: "Marian Krupa",
        text: "Super profesjonalna i odpowiedzialna praca, wszystko odbywa się kompetentnie i szybko! 5+++"
    },
];

