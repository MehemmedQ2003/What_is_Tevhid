/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Source: React.FC = () => {
    return (
        <div className='source' style={{ marginBottom: "136px" }} >
            <Container>
                <Row>
                    <Col lg={5} md={5} sm={12} className='col1'>
                        <h2 className='text-center'>SOURCE
                            <br />(QURAN, SUNNAH, SALAH, AUIDO)</h2>
                    </Col>
                    <Col lg={{ span: 6, offset: 1 }} md={{ span: 6, offset: 1 }} sm={12} className='col2'>
                        <div className='my-1'>
                            <h1>Quran</h1>
                            <a href="https://quran.com" style={{ color: "teal", fontSize: "22px" }}>Quran.com</a>
                        </div>
                        <div className='my-1'>
                            <h1>Sunnah</h1>
                            <div style={{ display: "flex", justifyContent: "space-between", flexWrap:"wrap"}}>
                                <a href="https://sunnah.com" style={{ color: "teal", fontSize: "22px" }}>Sunnah.com</a>
                                <a href="https://sunnah.com/bukhari" style={{ color: "teal", fontSize: "22px" }}>Sunnah.com/Bukhari</a>
                                <a href="https://sunnah.com/muslim" style={{ color: "teal", fontSize: "22px" }}>Sunnah.com/Muslim</a>
                                <a href="https://sunnah.com/tirmidhi" style={{ color: "teal", fontSize: "22px" }}>Sunnah.com/Tirmidhi</a>
                                <a href="https://sunnah.com/ibnmajah" style={{ color: "teal", fontSize: "22px" }}>Sunnah.com/Ibni Majah</a>
                            </div>
                        </div>
                        <div className='my-1'>
                            <h1>SALAH</h1>
                            <a href="https://salah.com" style={{ color: "teal", fontSize: "22px" }}>Salah.com</a>
                        </div>
                        <div className='my-1'>
                            <h1>Quran Audio</h1>
                            <a href="https://quranicaudio.com" style={{ color: "teal", fontSize: "22px" }}>QuranAuido.com</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Source
