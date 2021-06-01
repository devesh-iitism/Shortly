import React, { Component } from 'react';
import 
{
    Background,
    NewContainer,
    TitleContainer,
    Heading,
    Text,
    CardContainer,
    CardItem,
    CardTitle,
    CardText
} from './Statistics.styles';

class Statistics extends Component {
    render() {
        return (
            <Background>
                <NewContainer>
                    <TitleContainer>
                        <Heading>
                            Advanced Statistics
                        </Heading>
                        <Text>
                            Track how your links are performing across the web with our advanced statistics dashboard
                        </Text>
                    </TitleContainer>
                    <CardContainer>
                        <CardItem>
                            <CardTitle>Brand Recognition</CardTitle>
                            <CardText>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content</CardText>
                        </CardItem>
                        <CardItem>
                            <CardTitle>Detailed Records</CardTitle>
                            <CardText>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</CardText>
                        </CardItem>
                        <CardItem>
                            <CardTitle>Fully Customizable</CardTitle>
                            <CardText>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</CardText>
                        </CardItem>
                    </CardContainer>
                </NewContainer>
            </Background>
        )
    }
}

export default Statistics;