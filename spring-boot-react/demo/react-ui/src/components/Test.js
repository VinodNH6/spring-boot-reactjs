import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

class Test extends Component {
    render() {
        return (
            <div>
                <Container fluid>
                    <p> This is test component </p>
                    <Button color="success" tag={Link} to="/">go back to home</Button>
                </Container>
            </div>
        );
    }
}
export default Test;