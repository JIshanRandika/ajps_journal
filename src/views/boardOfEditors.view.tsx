import React from 'react';
import logo from './logo.svg';
import '../App.css';
import Nav from '../components/nav.component';
import Header from '../components/header.component'
import About from '../components/about.component'
import Footer from '../components/footer.component'
import {Row,Col,Container} from 'reactstrap';
import {Table} from "react-bootstrap";
import {Colors} from '../constants/colors'

function boardOfEditorsView() {
    return (
        <div className="BoardOfEditorsView">
            {/*<Nav/>*/}
            <div style={{position:'relative',background:Colors.colorA}} >
                <Row data-aos="fade-up" data-aos-offset="100">
                    <Container style={{paddingLeft: '10%', paddingRight: '10%',marginTop:80, marginBottom:40}}>
                        <div style={{
                            fontSize: 60,
                            fontWeight: 'bold',
                            color: 'white',
                            textAlign:'left'
                            // fontFamily:'Itim',
                        }}>
                            Board of Editors
                        </div>
                    </Container>
                </Row>

            </div>

            <div >
                <Container style={{paddingLeft: '5%', paddingRight: '10%',paddingBottom:80,paddingTop:50}}>
                    <Row
                        data-aos="fade-up"
                         data-aos-offset="100"
                    >
                        <Col md="6" xs="12">
                            {/*<a style={{fontWeight:"bold"}}>Editor in Chief</a>*/}
                            <div style={{fontWeight:"bold", fontSize:22, display:"flex", justifyContent:"center", marginTop:25}}>Editor in Chief</div><br/>
                                <div style={{
                                    fontSize: 18,
                                    textAlign: 'left',
                                    wordSpacing: 3,
                                    padding: 15,
                                    color: 'black',
                                    boxShadow: '0px 0px 6px #000',
                                    borderRadius:15,
                                    justifyContent:"center"

                                    // marginTop:10
                                    // fontFamily:'Itim',
                                }}>
                                    <a style={{fontWeight:"bold"}}>Dr. Gihani De Silva</a><br/>
                                    Senior Lecturer<br/>
                                    Department of Social Sciences<br/>
                                    Faculty of Social Sciences and Languages<br/>
                                    Sabaragamuwa University of Sri Lanka<br/>
                                    Email: gihani.desilva@ssl.sab.ac.lk
                                </div>

                        </Col>
                        <Col md="6" xs="12">
                            {/*<a style={{fontWeight:"bold"}}>Editor in Chief</a>*/}
                            <div style={{fontWeight:"bold", fontSize:22, display:"flex", justifyContent:"center", marginTop:25}}>Co-editor-in-Chief</div><br/>
                            <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, padding: 15, color: 'black', boxShadow: '0px 0px 6px #000', borderRadius:15, justifyContent:"center"}}>
                                <a style={{fontWeight:"bold"}}>Dr. GCL Pathirana</a><br/>
                                Senior Lecturer<br/>
                                Department of Social Sciences<br/>
                                Faculty of Social Sciences and Languages<br/>
                                Sabaragamuwa University of Sri Lanka<br/>
                                Email: pathiranaakash@gmail.com
                            </div>
                        </Col>
                    </Row>
                    <Row
                        data-aos="fade-up"
                        data-aos-offset="100"
                    >
                        <div style={{fontWeight:"bold", fontSize:22, display:"flex", justifyContent:"center", marginTop:20, marginBottom:20}}>Editorial Board</div><br/>
                    </Row>
                    <Row
                        data-aos="fade-up"
                        data-aos-offset="100"
                    >
                        <Col md="6" xs="12">
                            <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, padding: 15, color: 'black', boxShadow: '0px 0px 6px #000', borderRadius:15, justifyContent:"center", marginBottom:20}}>
                                <a style={{fontWeight:"bold"}}>Prof. Sarath Ananda</a><br/>
                                Professor of Sociology<br/>
                                Department of Social Sciences<br/>
                                Faculty of Social Sciences and Languages<br/>
                                Sabaragamuwa University of Sri Lanka<br/>
                                Email: sarathananda@ssl.sab.ac.lk
                            </div>
                        </Col>
                        <Col md="6" xs="12">
                            <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, padding: 15, color: 'black', boxShadow: '0px 0px 6px #000', borderRadius:15, justifyContent:"center", marginBottom:20}}>
                                <a style={{fontWeight:"bold"}}>Dr. Jayaprasad Welgama</a><br/>
                                Senior Lecturer<br/>
                                Department of Social Sciences<br/>
                                Faculty of Social Sciences and Languages<br/>
                                Sabaragamuwa University of Sri Lanka<br/>
                                Email: jwelgama@gmail.com
                            </div>
                        </Col>
                        <Col md="6" xs="12">
                            <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, padding: 15, color: 'black', boxShadow: '0px 0px 6px #000', borderRadius:15, justifyContent:"center", marginBottom:20}}>
                                <a style={{fontWeight:"bold"}}>Dr. Pradeep Uluwaduge</a><br/>
                                Senior Lecturer<br/>
                                Department of Social Sciences<br/>
                                Faculty of Social Sciences and Languages<br/>
                                Sabaragamuwa University of Sri Lanka<br/>
                                Email: pradeep@ssl.sab.ac.lk
                            </div>
                        </Col>
                        <Col md="6" xs="12">
                            <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, padding: 15, color: 'black', boxShadow: '0px 0px 6px #000', borderRadius:15, justifyContent:"center", marginBottom:20}}>
                                <a style={{fontWeight:"bold"}}>Mr. RC Palliyaguruge</a><br/>
                                Senior Lecturer<br/>
                                Department of Social Sciences<br/>
                                Faculty of Social Sciences and Languages<br/>
                                Sabaragamuwa University of Sri Lanka<br/>
                                Email: palliyaguruge@ssl.sab.ac.lk
                            </div>
                        </Col>
                        <Col md="6" xs="12">
                            <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, padding: 15, color: 'black', boxShadow: '0px 0px 6px #000', borderRadius:15, justifyContent:"center", marginBottom:20}}>
                                <a style={{fontWeight:"bold"}}>Mr. Aruna Jayathilaka</a><br/>
                                Lecturer<br/>
                                Department of Social Sciences<br/>
                                Faculty of Social Sciences and Languages<br/>
                                Sabaragamuwa University of Sri Lanka<br/>
                                Email: aruna@ssl.sab.ac.lk
                            </div>
                        </Col>
                    </Row>

                    <Row
                        data-aos="fade-up"
                        data-aos-offset="100"
                    >
                        <div style={{fontWeight:"bold", fontSize:22, display:"flex", justifyContent:"center", marginTop:20, marginBottom:20}}>Editorial Advisory Board</div><br/>
                    </Row>
                    <Row data-aos="fade-up"
                         data-aos-offset="100"
                    >
                        <Col md="6" xs="12">
                            <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, padding: 15, color: 'black', boxShadow: '0px 0px 6px #000', borderRadius:15, justifyContent:"center", marginBottom:20}}>
                                <a style={{fontWeight:"bold"}}>Professor Ruth Fitzgerald</a><br/>
                                Professor of Social Anthropology<br/>
                                Social Anthropology Program<br/>
                                School of Social Sciences<br/>
                                Otago University, New Zealand<br/>
                                Email: ruth.fitzgerald@otago.ac.nz
                            </div>
                        </Col>
                        <Col md="6" xs="12">
                            <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, padding: 15, color: 'black', boxShadow: '0px 0px 6px #000', borderRadius:15, justifyContent:"center", marginBottom:20}}>
                                <a style={{fontWeight:"bold"}}>Professor Emeritus Kamala Liyanage </a><br/>
                                Emeritus Professor of Political Science<br/>
                                Department of Political Science<br/>
                                Faculty of Arts<br/>
                                University of Peradeniya<br/>
                                Email: imiyakamala@yahoo.com
                            </div>
                        </Col>
                        <Col md="6" xs="12">
                            <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, padding: 15, color: 'black', boxShadow: '0px 0px 6px #000', borderRadius:15, justifyContent:"center", marginBottom:20}}>
                                <a style={{fontWeight:"bold"}}>Professor Zhao Changfeng</a><br/>
                                Professor of International Politics<br/>
                                School of Politics and <br/>
                                International Studies<br/>
                                Central China Normal University<br/>
                                Email: zhchf2013@163.com/ zhchf2013@mail.ccnu.edu.cn
                            </div>
                        </Col>
                        <Col md="6" xs="12">
                            <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, padding: 15, color: 'black', boxShadow: '0px 0px 6px #000', borderRadius:15, justifyContent:"center", marginBottom:20}}>
                                <a style={{fontWeight:"bold"}}>Prof. Ishtiaq Jamil</a><br/>
                                Professor of Public Administration<br/>
                                Department of Government<br/>
                                University of Bergen<br/>
                                Bergen, Norway<br/>
                                Email: Ishtiaq.Jamil@uib.no
                            </div>
                        </Col>
                        <Col md="6" xs="12">
                            <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, padding: 15, color: 'black', boxShadow: '0px 0px 6px #000', borderRadius:15, justifyContent:"center", marginBottom:20}}>
                                <a style={{fontWeight:"bold"}}>Prof. Premakumara de Silva</a><br/>
                                Professor of Sociology<br/>
                                Department of Sociology<br/>
                                Faculty of Arts<br/>
                                University of Colombo<br/>
                                Email: prema@soc.cmb.ac.lk
                            </div>
                        </Col>
                        <Col md="6" xs="12">
                            <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, padding: 15, color: 'black', boxShadow: '0px 0px 6px #000', borderRadius:15, justifyContent:"center", marginBottom:20}}>
                                <a style={{fontWeight:"bold"}}>Prof. Sasanka Perera</a><br/>
                                Department of Sociology<br/>
                                South Asian University<br/>
                                Akbar Bhawan, Chankyapuri<br/>
                                New Delhi -110021<br/>
                                Email: sasankaperera@soc.sau.ac.in
                            </div>
                        </Col>
                        <Col md="6" xs="12">
                            <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, padding: 15, color: 'black', boxShadow: '0px 0px 6px #000', borderRadius:15, justifyContent:"center", marginBottom:20}}>
                                <a style={{fontWeight:"bold"}}>Dr. DB Subedi</a><br/>
                                Lecturer in Peace and Conflict Studies <br/>
                                Convenor of Peace and Conflict Studies <br/>
                                School of Political Science and International Studies <br/>
                                The University of Queensland<br/>
                                Brisbane Qld 4072, Australia<br/>
                                Email: d.subedi@uq.edu.au
                            </div>
                        </Col>
                    </Row>

                    <Row
                        data-aos="fade-up"
                        data-aos-offset="100"
                    >
                        <div style={{fontWeight:"bold", fontSize:22, display:"flex", justifyContent:"center", marginTop:20, marginBottom:20}}>Language Editors</div><br/>
                    </Row>
                    <Row
                        data-aos="fade-up"
                        data-aos-offset="100"
                    >
                        <Col md="6" xs="12">
                            <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, padding: 15, color: 'black', boxShadow: '0px 0px 6px #000', borderRadius:15, justifyContent:"center", marginBottom:20}}>
                                <a style={{fontWeight:"bold"}}>Dr. UP Lekamge</a><br/>
                                Senior Lecturer<br/>
                                Department of Social Sciences<br/>
                                Faculty of Social Sciences and Languages<br/>
                                Sabaragamuwa University of Sri Lanka<br/>
                                Email: upul1964@gmail.com/ule@ssl.sab.ac.lk
                            </div>
                        </Col>
                        <Col md="6" xs="12">
                            <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, padding: 15, color: 'black', boxShadow: '0px 0px 6px #000', borderRadius:15, justifyContent:"center", marginBottom:20}}>
                                <a style={{fontWeight:"bold"}}>Ms. SPSP Weerasinghe</a><br/>
                                Senior Lecturer<br/>
                                Department of Social Sciences<br/>
                                Faculty of Social Sciences and Languages<br/>
                                Sabaragamuwa University of Sri Lanka<br/>
                                Email: sajani@ssl.sab.ac.lk
                            </div>
                        </Col>
                    </Row>

                    <Row
                        data-aos="fade-up"
                        data-aos-offset="100"
                    >
                        <div style={{fontWeight:"bold", fontSize:22, display:"flex", justifyContent:"center", marginTop:20, marginBottom:20}}>Editorial Assistance</div><br/>
                    </Row>
                    <Row
                        data-aos="fade-up"
                        data-aos-offset="100"
                    >
                        <Col md="6" xs="12">
                            <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, padding: 15, color: 'black', boxShadow: '0px 0px 6px #000', borderRadius:15, justifyContent:"center", marginBottom:20}}>
                                <a style={{fontWeight:"bold"}}>Mr. Kusala Fernando</a><br/>
                                Senior Assistant Librarian<br/>
                                Main Library<br/>
                                Sabaragamuwa University of Sri Lanka<br/>
                                Email: kusala@lib.sab.ac.lk<br/><br/>
                            </div>
                        </Col>
                        <Col md="6" xs="12">
                            <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, padding: 15, color: 'black', boxShadow: '0px 0px 6px #000', borderRadius:15, justifyContent:"center", marginBottom:20}}>
                                <a style={{fontWeight:"bold"}}>Mr. Prabath Galagamage</a><br/>
                                Visiting Lecturer<br/>
                                Department of Social Sciences<br/>
                                Faculty of Social Sciences and Languages<br/>
                                Sabaragamuwa University of Sri Lanka<br/>
                                Email: gprabath@gmail.com
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>


            <Footer/>

        </div>
    );
}

export default boardOfEditorsView;
