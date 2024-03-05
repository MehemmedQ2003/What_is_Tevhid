/* eslint-disable jsx-a11y/anchor-is-valid */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navb from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';



function Navbar() {
    return (
      <>
        {[false].map((expand) => (
          <Navb expand={expand} className="navb mb-3 position-sticky top-0"
           style={{backgroundColor: "#A9A9A9", zIndex: "1"}}>
            <Container>
              <Nav.Link>
                <Link to="/" style={{color: "black", fontSize: "22px", fontFamily: "sans-serif", fontWeight: "bold"}}>
                  What is Tevhid?
                </Link>
              </Nav.Link>
              <Navb.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navb.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton className='bg-bold'>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <h1>SUBJECTS</h1>
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body className='bg-bold'>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="">
                        <Link to='Virtue' style={{fontFamily: "sans-serif" ,fontSize: "20px",   textDecoration: "none", color: "#36454F", fontWeight: "bold"}}>THE VIRTUE OF LA ILAHE ILLALLAH</Link>
                      </Nav.Link>
                        <br></br>
                      <Nav.Link href="">
                        <Link to='Meaning' style={{fontFamily: "sans-serif" ,fontSize: "20px", textDecoration: "none", color: "#36454F", fontWeight: "bold"}}>MEANING OF LA ILAHE ILLALLAH</Link></Nav.Link>
                        <br></br>
                      <Nav.Link href="">
                        <Link to='Essentials' style={{fontFamily: "sans-serif" ,fontSize: "20px", textDecoration: "none", color: "#36454F", fontWeight: "bold"}}>ESSENTİALS OF LA ILAHE ILLALLAH</Link></Nav.Link>
                        <br></br>
                      <Nav.Link href="">
                        <Link to='Conditions' style={{fontFamily: "sans-serif" ,fontSize: "20px", textDecoration: "none", color: "#36454F", fontWeight: "bold"}}>CONDITIONS OF LA ILAHE ILLALLAH</Link></Nav.Link>
                        <br></br>
                      <Nav.Link href="">
                        <Link to='ThingsBreak' style={{fontFamily: "sans-serif" ,fontSize: "20px", textDecoration: "none", color: "#36454F", fontWeight: "bold"}}>THİNGS THAT BREAK LA ILAHE ILLALLAH</Link></Nav.Link>
                        <br></br>
                      <Nav.Link href="">
                        <Link to='Requires' style={{fontFamily: "sans-serif" ,fontSize: "20px", textDecoration: "none", color: "#36454F", fontWeight: "bold"}}>WHAT LA ILAHE ILLALLAH REQUIRES</Link></Nav.Link>
                        <br></br>
                      <Nav.Link href="">
                        <Link to='Rights' style={{fontFamily: "sans-serif" ,fontSize: "20px", textDecoration: "none", color: "#36454F", fontWeight: "bold"}}>RIGHTS OF LA ILAHE ILLALLAH</Link></Nav.Link>
                        <br></br>
                      <Nav.Link href="">
                        <Link to='Investigation' style={{fontFamily: "sans-serif" ,fontSize: "20px", textDecoration: "none", color: "#36454F", fontWeight: "bold"}}>INVESTIGATION OF LA ILAHE ILLALLAH</Link></Nav.Link>
                        <br></br>
                      <Nav.Link href="">
                        <Link to='Contact' style={{fontFamily: "sans-serif" ,fontSize: "20px", textDecoration: "none", color: "#36454F", fontWeight: "bold"}}>CONTACT WITH US</Link></Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                </Navb.Offcanvas>
            </Container>
          </Navb>
        ))}
        </>
    );
}

export default Navbar
