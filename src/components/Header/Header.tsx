import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Header: React.FC = () => {
  return (
    <div className='header' style={{marginBottom: "190px"}}>
        <Container>
            <Row>
                <Col lg={5} md={5} sm={12} className='col1'>
                    <h1 className='text-center'>La Ilaha İllallah</h1>
                </Col>
                <Col lg={{span: 6, offset:1}} md={{span: 6, offset:1}} sm={12} className='col2'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit explicabo ea aliquid omnis, quisquam placeat dolorem expedita fugit, iste odit sunt optio aut voluptatem ad vel alias voluptate quia deserunt!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit explicabo ea aliquid omnis, quisquam placeat dolorem expedita fugit, iste odit sunt optio aut voluptatem ad vel alias voluptate quia deserunt!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit explicabo ea aliquid omnis, quisquam placeat dolorem expedita fugit, iste odit sunt optio aut voluptatem ad vel alias voluptate quia deserunt!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit explicabo ea aliquid omnis, quisquam placeat dolorem expedita fugit, iste odit sunt optio aut voluptatem ad vel alias voluptate quia deserunt!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit explicabo ea aliquid omnis, quisquam placeat dolorem expedita fugit, iste odit sunt optio aut voluptatem ad vel alias voluptate quia deserunt!
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Header
