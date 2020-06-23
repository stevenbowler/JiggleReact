import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    NavbarText,
    Nav,
    NavItem,
    NavLink,
    Button
} from 'reactstrap';



class AppNavbar extends Component {
    // constructor(props) {
    //     super(props);

    // }

    toggleModal = () => this.modal = !this.modal;

    registerInput = () => {
        this.toggleModal();

    }


    toggle = () => this.props.onToggle();

    register = () => {
        //const data = this.registerInput();
        this.props.onRegister();
    }
    login = () => this.props.onLogin();
    logout = () => this.props.onLogout();
    leaderBoard = () => this.props.onLeaderBoard();
    grow = () => this.props.onGrow();
    shrink = () => this.props.onShrink();
    changeColor = () => this.props.onChangeColor();
    tutorial = () => this.props.onTutorial();


    render() {
        return (
            <div>
                <Navbar color="dark" expand="sm" className="mb-5">
                    {/* <Container> */}
                    <NavbarBrand href="/">JiggleReact</NavbarBrand>
                    <NavbarText className="text-warning" placeholder="test">{this.props.name}</ NavbarText>
                    <NavbarToggler color="dark" border="dark" onClick={this.toggle}><img src='hamburger.jpg' alt='Menu' style={{
                        height: "40px",
                        width: "40px"
                    }}></img></NavbarToggler>
                    <Collapse isOpen={this.props.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <Button hidden={this.props.loggedIn ? true : false} float="left" display="inline" onClick={this.register}>Register</Button>
                            <Button hidden={this.props.loggedIn ? true : false} float="left" display="inline" onClick={this.login}>Login</Button>
                            <Button hidden={this.props.loggedIn ? true : false} float="left" display="inline" onClick={this.tutorial}>Tutorial</Button>
                            <Button hidden={this.props.loggedIn ? false : true} float="left" display="inline" onClick={this.logout}>Logout</Button>
                            <Button hidden={this.props.loggedIn ? false : true} float="left" display="inline" onClick={this.leaderBoard}>Leader Board</Button>
                            <Button float="left" display="inline" onClick={this.grow}>Grow</Button>
                            <Button float="left" display="inline" onClick={this.shrink}>Shrink</Button>
                            <Button float="left" type="color" display="inline" onClick={this.changeColor}>Color</Button>
                            <NavItem>
                                <NavLink display="inline" color="white" href="https://github.com/stevenbowler/JiggleReact">GitHub</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    {/* </Container> */}

                </Navbar>

            </div >
        );
    }

}

export default AppNavbar;