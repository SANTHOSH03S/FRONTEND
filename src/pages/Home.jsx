import React from 'react';
import { Container,Button } from 'react-bootstrap';
import "../styles/Home.css"

const Home = () => {
    return (
        <Container>
            <h1>Welcome to our website</h1>
            <p>We are here to serve</p>
            <Button variant='primary'>Get started</Button>
        </Container>
    );
};

export default Home;