import React, { Component } from 'react';
import { Button } from '../../GlobalStyles';
import 
{
    Background,
    Heading
} from './Boost.styles';

class Boost extends Component {
    render() {
        return (
            <Background>
                <Heading>
                    Boost Your Links Today
                </Heading>
                <Button>Get Started</Button>
            </Background>
        )
    }
}

export default Boost;