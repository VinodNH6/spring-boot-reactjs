import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

class ClientList extends Component {
    render() {
        return (
            <div>
                <Container fluid>
                    <p> Clients List </p>
                    <Button color="success" tag={Link} to="/test">go to test link</Button>
                </Container>
            </div>
        );
    }
}
export default ClientList;