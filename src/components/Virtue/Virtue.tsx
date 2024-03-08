import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Virtue: React.FC = () => {
  return (
    <div className='virtue' style={{marginBottom: "190px"}} >
        <Container>
            <Row>
                <Col lg={5} md={5} sm={12} className='col1'>
                    <h2 className='text-center'>THE VIRTUE OF LA ILAHE ILLALLAH</h2>
                </Col>
                <Col lg={{span: 6, offset:1}} md={{span: 6, offset:1}} sm={12} className='col2'>
                        <p style={{fontSize: "22px", textAlign: "center", marginTop: "30px", color: "red", fontWeight: "bold"}}>إن الله سيخلص رجلا من أمتي على رءوس الخلائق يوم القيامة فينشر عليه تسعة وتسعين سجلا سجل مثل مد البصر ثم يقول أتنكر من هذا شيئا أظلمك كتبتي الحافظون فيقول لا يا رب فيقول أفلك عذر فيقول لا يا رب فيقول بلى إن لك عندنا حسنة فإنه لا ظلم عليك اليوم فتخرج بطاقة فيها أشهد أن لا إله إلا الله وأشهد أن محمدا عبده ورسوله فيقول احضر وزنك فيقول يا رب ما هذه البطاقة مع هذه السجلات فقال إنك لا تظلم قال فتوضع السجلات في كفة والبطاقة في كفة فطاشت السجلات وثقلت البطاقة فلا يثقل مع اسم الله شيء 
                        </p>
                        <br/>
                        <p style={{fontWeight: "bold", fontSize: "22px"}}>
                        ‘Abdullah bin ‘Amr narrated that the Messenger of Allah (ﷺ) said:
                        </p>

                        <p style={{fontSize: "22px", fontStyle: "italic"}}> “A man from my nation will be called before all of creation on the Day of Resurrection, and ninety-nine scrolls will be spread out for him, each one extending as far as the eye can see. 
                        <br/>
                        <br/>
                        <span style={{fontWeight: "bold", fontSize: "22px"}}>(Then Allah will say:)</span> “Do you deny anything of this?” 
                        <br/>
                        <br/>
                        <span style={{fontWeight: "bold", fontSize: "22px"}}>(He will say:)</span> “No, O Lord.”
                        <br/>
                        <br/>
                        <span style={{fontWeight: "bold", fontSize: "22px"}}>(He will say:)</span> “Have My recording scribes been unfair to you?” Then He will say: “Apart from that, do you have any good deeds?”
                        <br/>
                        <br/>
                        <span style={{fontWeight: "bold", fontSize: "22px"}}>(The man will be terrified and will say: )</span> “No.”
                        <br/>
                        <br/>
                        <span style={{fontWeight: "bold", fontSize: "22px"}}>(Allah will say: )</span> “Indeed, you have good deeds with Us, and you will not be treated unjustly this Day.” Then a card will be brought out on which is written Ash-hadu an la ilaha illallah wa anna Muhammadan ‘abduhu wa rasuluhu (I bear witness that none has the right to be worshipped but Allah, and that Muhammad is His slave and Messenger).
                        <br/>
                        <br/>
                        <span style={{fontWeight: "bold", fontSize: "22px"}}>(He will say: )</span> “O Lord, what is this card compared with these scrolls?” 
                        <br/>
                        <br/>
                        <span style={{fontWeight: "bold", fontSize: "22px"}}>(Allah will say: )</span> “You will not be treated unjustly.” Then the scrolls will be placed in one side of the Balance and the card in the other. The scrolls will go up (i.e., be light) and the card will go down (i.e., will weigh heavily).”
                        </p>
                        <p style={{fontSize: "20px", textAlign: "center", fontWeight: "bold"}}>(Thirmidhi, 2639 ; Ibni Majah, 4300)</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Virtue
