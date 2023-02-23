import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <div>
                <Container fluid style={{margin: 20}}>
                    <Button color="link" style={{height: 50, width: 200}}>
                        <Link to="/clients">Clients</Link>
                    </Button>
                </Container>
            </div>
        );
    }
}
export default Home;