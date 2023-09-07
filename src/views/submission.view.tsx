import React from 'react';
import logo from './logo.svg';
import '../App.css';
import Nav from '../components/nav.component';
import Header from '../components/header.component'
import About from '../components/about.component'
import Footer from '../components/footer.component'
import {Row, Col, Container, Button} from 'reactstrap';
import {Table} from "react-bootstrap";
import {Colors} from '../constants/colors'

function Submission() {
    return (
        <div className="Submission">
            {/*<Nav/>*/}
            <div style={{position:'relative',background:Colors.colorA}} >
                <Row data-aos="fade-up" data-aos-offset="100">
                    <Container style={{paddingLeft: '10%', paddingRight: '10%',marginTop:80}}>
                        <div style={{
                            fontSize: 60,
                            fontWeight: 'bold',
                            color: 'white',
                            textAlign:'left',
                            paddingBottom: 75,
                            // fontFamily:'Itim',
                        }}>
                            Submission
                        </div>
                    </Container>
                </Row>
            </div>
            <div >
                <Container data-aos="fade-up" data-aos-offset="100" style={{paddingLeft: '10%', paddingRight: '10%',marginTop:40, paddingBottom:'5%'}}>
                    <div style={{fontSize: 20,wordSpacing: 3, paddingTop: 25, justifyContent:"center", display:"flex"}}>
                        <Button
                            target='_blank'
                            href='#'
                            style={{
                                marginTop: 50,
                                marginBottom: 50,
                                backgroundColor: Colors.colorA,
                                color: 'white',
                                // width:'40%',
                                textAlign: 'center',
                                padding: 10,
                                paddingRight: 30,
                                paddingLeft: 30,
                                fontWeight: 'bold',
                                fontSize: 24,
                                borderRadius: 50,

                            }}>
                            Click Here To Submit
                        </Button>
                    </div>
                    <div style={{fontSize: 20, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',fontWeight:'bold'}}>
                        Processing time
                    </div>
                    <div style={{fontSize: 20, textAlign: 'center', wordSpacing: 3, paddingTop: 25, color: 'black',fontWeight:'bold'}}>
                        60 DAYS SUBMISSION TO ACCEPTANCE
                    </div>
                    <div style={{fontSize: 20, textAlign: 'center', wordSpacing: 3, paddingTop: 10, color: 'black',fontWeight:'bold'}}>
                        30 DAYS ACCEPTANCE TO PUBLICATION
                    </div>
                    <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',marginLeft:25}}>
                        Asian Journal of Politics and Society, like most scientific journals, relies on effective peer review processes to uphold not only the quality and validity of individual articles but also the overall integrity of the journal. Based on current practice, the integrant is due to the double-blind review system. All reviewers from various expertise are on a voluntary basis. All manuscripts are processed accordingly.
                    </div>
                </Container>
            </div>
            <Footer/>

        </div>
    );
}

export default Submission;
