import React, { Component } from 'react';
import {Button} from '../../GlobalStyles';
import { BiMenu, BiX } from "react-icons/bi";
import 
{
    Nav,
    NavbarContainer,
    NavLogo,
    MenuIcon,
    Menu,
    MenuItem,
    MenuLink,
    Info,
    Login
} from './Navbar.styles';

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            click: false
        }
    }

    handleClick() {
        console.log(this.state);
        this.setState({click: !this.state.click});
    }

    closeMenu() {
        this.setState({click: false});
    }

    render() {
        return (
            <div>
                <Nav>
                    <NavbarContainer>
                        <NavLogo />
                        <MenuIcon onClick={() => this.handleClick()}>
                            {this.state.click ? <BiX/> : <BiMenu/>}
                        </MenuIcon>
                        <Menu onClick={() => this.handleClick()} click={this.state.click}>
                            <Info>
                                <MenuItem>
                                    <MenuLink onClick={() => this.closeMenu()}>Features</MenuLink>
                                </MenuItem>
                                <MenuItem>
                                    <MenuLink onClick={() => this.closeMenu()}>Pricing</MenuLink>
                                </MenuItem>
                                <MenuItem>
                                    <MenuLink onClick={() => this.closeMenu()}>Resources</MenuLink>
                                </MenuItem>
                            </Info>
                            <Login>
                                <MenuItem>
                                    <MenuLink onClick={() => this.closeMenu()}>Login</MenuLink>
                                </MenuItem>
                                <MenuItem>
                                    <Button onClick={() => this.closeMenu()}>Signup</Button>
                                </MenuItem>
                            </Login>
                        </Menu>
                    </NavbarContainer>
                </Nav>
            </div>
        )
    }
}

export default Navbar;