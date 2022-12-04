import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import reactLogo from './react.svg';

export const NavigationBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" fixed='top'>
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={reactLogo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Not OP.GG
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}