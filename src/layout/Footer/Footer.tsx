import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Footer: React.FC = () => {
  return (
    <div className='footer' style={{backgroundColor: "#A9A9A9", padding: "10px 0"}}>
        <Container>
            <Row>
              <div className='footerDiv' style={{display: "flex", alignItems: "center",   justifyContent: "space-between"}}>
                <h4 className='text-center'>2024 &copy; Tevhid</h4>
                <h4 className='text-center'>mehemmed.qardasov2003@gmail.com</h4>
              </div>
            </Row>
        </Container>
    </div>
  )
}

export default Footer