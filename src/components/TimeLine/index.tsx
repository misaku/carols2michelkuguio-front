
import {Container, Content, LabelDate, Wrapper, Image} from "./index.styles.tsx";
import {TIME_LINE_ITEMS} from "./index.contants.ts";


export function TimeLine() {
    return (
        <Wrapper>
            {TIME_LINE_ITEMS.map((item) => {
                const [day, month, year] = item.date.split('/');
                return(
                    <Container key={item.title}>
                        <Content>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </Content>
                        <Content>
                            <Image src={item.image} alt={`imagem: ${item.title}`}/>
                        </Content>
                        <LabelDate><span>{day}/{month}</span><span>{year}</span></LabelDate>
                    </Container>
                )
            })}
        </Wrapper>
   )
}

export default TimeLine;