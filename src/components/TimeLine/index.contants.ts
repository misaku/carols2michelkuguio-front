import inicio from '../../assets/inicio.jpg'
import primeira_pesca from '../../assets/primeira_pesca.jpg'
import piscina from '../../assets/piscina.jpg'
import piscina2 from '../../assets/piscina2.jpg'
import capitolio from '../../assets/capitolio.jpg'
import alianca from '../../assets/alianca.jpg'
import argentina from '../../assets/argentina.jpg'
import holambra2 from '../../assets/holambra2.jpg'
import barrinha from '../../assets/barrinha.jpg'
import cachoeira from '../../assets/cachoeira.jpg'
import natal from '../../assets/natal.jpg'
import noivado from '../../assets/noivado.jpg'
import santa_rita from '../../assets/santa_rita.jpg'

interface TimeLineItem {
    title: string;
    date: string;
    description: string;
    image: string;
}

export const TIME_LINE_ITEMS: TimeLineItem[] = [
    {
        title: 'Corujão',
        description: 'Nos encontramos pela primeira vez ao vivo no Corujão, um evento de jogos da empresa. Entre risadas, partidas e conversas, tudo se encaixou de vez. Naquele dia, tive certeza: era ao lado dele que eu gostaria de estar.',
        date: '19/08/2023',
        image: inicio
    },
    {
        title: 'Fim de ano',
        description: 'Passamos a virada do ano juntos em Jaboticabal, onde tive a oportunidade de conhecer a família dele. Foi um dia incrível, repleto de momentos especiais, muitas risadas e, claro, um bom tempo aproveitando a piscina',
        date: '31/12/2023',
        image: piscina2
    },
    {
        title: 'Namoro',
        description: 'Ele me pediu em namoro no dia 1º de janeiro, logo após a virada do ano que passamos juntos. Foi um momento especial, o início de um novo ano e também de uma nova fase na nossa história.',
        date: '01/01/2024',
        image: alianca
    },
    {
        title: 'Guapé',
        description: 'Ele conheceu minha família e, em uma das nossas viagens, fomos para a roça da minha avó, em Guapé. Foi lá que descobri que ele gostava de pescar, e entre momentos simples e especiais, percebi ainda mais o quanto combinávamos..',
        date: '26/01/2024',
        image: primeira_pesca
    },
    {
        title: 'Capitólio',
        description: 'Fomos para capitólio e para vargem bonita, visitamos cachoeiras e conhecemos o pessoal da vargem bonita',
        date: '17/03/2024',
        image: capitolio
    },
    {
        title: 'Escarpas do lago',
        description: 'Michel conheceu os parentes da minha familia por parte de mãe. Nesse dia era o aniversário da minha mãe.',
        date: '27/04/2024',
        image: piscina
    },
    {
        title: 'Holambra',
        description: 'Caminhamos pelos campos floridos de Holambra, visitamos o imponente Moinho Povos Unidos e me deliciei com a culinária holandesa. O charme das ruas, o aroma das flores e a tranquilidade da cidade tornaram o dia inesquecível.',
        date: '14/07/2024',
        image: holambra2
    },
    {
        title: 'Bariloche',
        description: 'Fomos para Bariloche, foi a primeira que viajamos para fora do Brasil. É uma cidade encantadora localizada na Patagônia, Argentina, conhecida por sua beleza natural deslumbrante. Comemoramos o nosso aniversário la no dia 09 de setembro o meu e dia 18 de setembro o do Michel.',
        date: '15/09/2024',
        image: argentina
    },
    {
        title: 'Noivado',
        description: 'Ele me pediu em casamento em Holambra, e eu disse sim. Foi um momento mágico e inesquecível, rodeado pela beleza única da cidade, com suas flores e clima acolhedor. A emoção foi indescritível, e a sensação de amor e cumplicidade tornou tudo ainda mais especial.',
        date: '22/09/2024',
        image: noivado
    },
    {
        title: 'Natal',
        description: 'Passamos o Natal juntos em Divinópolis, celebrando com a minha família. Foi o nosso primeiro Natal juntos, e a experiência foi verdadeiramente especial.',
        date: '25/12/2024',
        image: natal
    },
    {
        title: 'Vargem Bonita',
        description: 'Visitamos as cachoeiras da Vargem Bonita. Com águas cristalinas que caem em quedas d\'água exuberantes, o lugar oferece um cenário encantador para os amantes da natureza e do ecoturismo',
        date: '01/01/2025',
        image: cachoeira
    },
    {
        title: 'Barrinha',
        description: 'Visitamos Barrinha, uma cidade encantadora no interior de São Paulo, fomos em um pesqueiro, conhecemos o rio mogi guaçu de barco foi uma experiência bem legal.',
        date: '08/03/2025',
        image: barrinha
    },
    {
        title: 'Santa Rita do Passa Quatro',
        description: 'Visitamos Santa Rita e vimos a maior árvore do estado de São Paulo',
        date: '30/03/2025',
        image: santa_rita
    },
]
