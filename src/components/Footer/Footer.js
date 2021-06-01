import React, { Component } from 'react';
import facebook from '../../assets/icon-facebook.svg';
import twitter from '../../assets/icon-twitter.svg';
import pinterest from '../../assets/icon-pinterest.svg';
import instagram from '../../assets/icon-instagram.svg';
import 
{
    Background,
    Title,
    Links,
    Menu,
    MenuTitle,
    MenuItem,
    FooterContainer,
    Social,
    SocialItem
} from './Footer.styles';

class Footer extends Component {
    render() {
        return (
            <Background>
                <FooterContainer>
                    <Title>Shortly</Title>
                    <Links>
                        <Menu>
                            <MenuTitle>
                                Features
                            </MenuTitle>
                            <MenuItem>Link Shortening</MenuItem>
                            <MenuItem>Branded Links</MenuItem>
                            <MenuItem>Analytics</MenuItem>
                        </Menu>
                        <Menu>
                            <MenuTitle>
                                Resources
                            </MenuTitle>
                            <MenuItem>Blog</MenuItem>
                            <MenuItem>Developers</MenuItem>
                            <MenuItem>Support</MenuItem>
                        </Menu>
                        <Menu>
                            <MenuTitle>
                                Company
                            </MenuTitle>
                            <MenuItem>About</MenuItem>
                            <MenuItem>Our Team</MenuItem>
                            <MenuItem>Careers</MenuItem>
                            <MenuItem>Contact</MenuItem>
                        </Menu>
                        <Social>
                            <SocialItem>
                                <img src={facebook} alt="facebook"></img>
                            </SocialItem>
                            <SocialItem>
                                <img src={twitter} alt="twitter"></img>
                            </SocialItem>
                            <SocialItem>
                                <img src={pinterest} alt="pinterest"></img>
                            </SocialItem>
                            <SocialItem>
                                <img src={instagram} alt="instagram"></img>
                            </SocialItem>
                        </Social>
                    </Links>
                </FooterContainer>
            </Background>
        )
    }
}

export default Footer;