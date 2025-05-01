
import {Container, Content, LabelDate, Wrapper, Image} from "./index.styles.tsx";
import {TIME_LINE_ITEMS} from "./index.contants.ts";
import {AnimatedComponent} from "../Animations";


export function TimeLine() {
    return (
        <Wrapper>
            {TIME_LINE_ITEMS.map((item, index) => {
                const [day, month, year] = item.date.split('/');
                const animated = index%2==0?'FadeInLeft':'FadeInRight';
                return(
                    <AnimatedComponent key={item.title} animationType={animated}>
                        <Container isEven={index%2==0} >
                            <Content>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </Content>
                            <Content>
                                <Image src={item.image} alt={`imagem: ${item.title}`}/>
                            </Content>
                            <LabelDate><span>{day}/{month}</span><span>{year}</span></LabelDate>
                        </Container>
                    </AnimatedComponent>
                        )

            })}
        </Wrapper>
   )
}

export default TimeLine;
