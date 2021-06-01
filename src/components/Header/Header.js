import React, { Component } from 'react';
import { Button } from '../../GlobalStyles';
import 
{
    Contents,
    Headline,
    Title,
    Para,
    WorkingImg
} from './Header.styles';

class Header extends Component {
    render() {
        return (
            <Contents>
                <Headline>
                    <Title>More than just shorter links</Title>
                    <Para>Build your brand's recognition and get detailed insights on how your links are performing.</Para>
                    <Button>Get Started</Button>
                </Headline>
                <WorkingImg />
            </Contents>
        )
    }
}

export default Header;