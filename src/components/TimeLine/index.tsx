import {Container, Content, LabelDate, Wrapper, Image} from "./index.styles.tsx";
import {TIME_LINE_ITEMS, TimeLineItemProps} from "./index.contants.ts";
import {AnimatedComponent, AnimationType} from "../Animations";
import {useEffect, useMemo} from "react";
import {useReadyStore} from "../../ready.store.ts";

interface TimeLineItemComponentProps {
    item: TimeLineItemProps,
    index: number,
    animated: AnimationType,
    day: string,
    month: string,
    year: string,
    total: number,
}

const TimeLineItem: React.FC<TimeLineItemComponentProps> = ({item, day, total, year, month, animated, index}) => {
    const {makeTimeLineReady} = useReadyStore();
    useEffect(() => {
        if(total==index+1){
            makeTimeLineReady();
        }
    }, [index, makeTimeLineReady, total]);
    return (
        <AnimatedComponent  animationType={animated}>
            <Container isEven={index % 2 == 0}>
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

}

export function TimeLine() {
    const total = useMemo(() => TIME_LINE_ITEMS.length, []);
    return (
        <Wrapper>
            {TIME_LINE_ITEMS.map((item, index) => {
                const [day, month, year] = item.date.split('/');
                const animated = index % 2 == 0 ? 'FadeInLeft' : 'FadeInRight';
                return (
                    <TimeLineItem
                        key={item.title}
                        item={item}
                        day={day}
                        animated={animated}
                        index={index}
                        month={month}
                        total={total}
                        year={year}
                    />
                )

            })}
        </Wrapper>
    )
}

export default TimeLine;
