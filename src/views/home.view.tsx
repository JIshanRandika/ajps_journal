// import React from 'react';
// import logo from './logo.svg';
// import '../App.css';
// import Nav from '../components/nav.component';
// import Header from '../components/header.component'
// import About from '../components/about.component'
// import Footer from '../components/footer.component'
// import {Row,Col,Container} from 'reactstrap';
//
// function Home() {
//     return (
//         <div className="App">
//             <Nav/>
//             <Header/>
//             <About/>
//             <Footer/>
//
//         </div>
//     );
// }
//
// export default Home;

import React from 'react';
import logo from './logo.svg';
import '../App.css';
import Nav from '../components/nav.component';
import Footer from '../components/footer.component'
import Articles from '../components/articles.component'
import {Row,Col,Container} from 'reactstrap';
import {Table} from "react-bootstrap";
import {Colors} from '../constants/colors'
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
    AOS.init({
        duration: 2000,
    })
    // const mystyle = {
    //     homeBtn: "green"
    // };
    return (

        <div className="Home">

            {/*<Nav/>*/}
            <div style={{position:'relative'}} >
                <Row>
                    <Col md="4" xs="12" style={{alignItems:'center'}}>
                        <div data-aos="fade-up" data-aos-offset="100" style={{alignContent:"center",alignItems:'center',display:"flex",justifyContent:"center",padding:100}}>
                            <img src="assets/img/cover.png" width='300px' style={{boxShadow: '0px 0px 6px #115b84'}}/>
                        </div>
                    </Col>
                    <Col md="5" xs="12" style={{background:"white"}}>
                        <Container>
                            <Row >
                                <Container>
                                    <div data-aos="fade-up" data-aos-offset="100" style={{
                                        fontSize: 25,
                                        textAlign: 'left',
                                        wordSpacing: 3,
                                        paddingTop: 75,
                                        color: 'black',
                                        fontWeight:'bold'
                                        // marginTop:10
                                        // fontFamily:'Itim',
                                    }}>
                                        ASIAN JOURNAL OF POLITICS AND SOCIETY (AJPS)
                                    </div>

                                    <div data-aos="fade-up" data-aos-offset="100" style={{
                                        fontSize: 15,
                                        textAlign: 'left',
                                        wordSpacing: 3,
                                        paddingTop: 5,
                                        paddingBottom: 5,
                                        color: 'black'
                                        // marginTop:10
                                        // fontFamily:'Itim',
                                    }}>
                                        The journal’s main aim is to provide a platform for academics, scholars, resource persons, and practitioners to publish their research findings with the rest of the world in order for informed decisions to be taken to improve society as a whole. The AJPS places a premium on quality and general interest in topics related to Sociology and Political Science. This journal welcomes and is willing to publish articles that are both technically sound and driven by sound reasoning. This international journal is open-access, peer-reviewed, and quality guaranteed.
                                    </div>

                                    <div data-aos="fade-up" data-aos-offset="100" style={{
                                        fontSize: 15,
                                        textAlign: 'left',
                                        wordSpacing: 3,
                                        paddingTop: 5,
                                        paddingBottom: 15,
                                        color: 'black'
                                        // marginTop:10
                                        // fontFamily:'Itim',
                                    }}>
                                        Asian Journal of Politics and Society is an international open-access, peer-reviewed and refereed journal which is published by the Department of Social Sciences, Faculty of Social Sciences and Languages, Sabaragamuwa University of Sri Lanka. The journal welcomes articles from researchers interested in theoretical developments/debates, results of research that advance understanding of fundamental social and political processes, important methodological innovations, empirical analysis, policy implementation, and pragmatic themes and issues in Sociology and Political Science.
                                    </div>
                                </Container>

                            </Row>
                        </Container>

                    </Col>
                    <Col md="3" xs="12" style={{background:"white"}}>
                        <Container>
                            <div data-aos="fade-up" data-aos-offset="100" style={{
                                fontSize: 15,
                                textAlign: 'left',
                                wordSpacing: 3,
                                paddingTop: 80,
                                paddingBottom: 2,
                                color: 'black'
                                // marginTop:10
                                // fontFamily:'Itim',
                            }}>
                                ISSN: 2989-011x
                            </div>
                            {/*<div data-aos="fade-up" data-aos-offset="100"*/}
                            {/*     style={{*/}
                            {/*         fontSize: 15,*/}
                            {/*         textAlign: 'left',*/}
                            {/*         wordSpacing: 3,*/}
                            {/*         paddingTop: 5,*/}
                            {/*         paddingBottom: 15,*/}
                            {/*         color: 'black'*/}
                            {/*         // marginTop:10*/}
                            {/*         // fontFamily:'Itim',*/}
                            {/*     }}>*/}
                            {/*    e-ISSN: 2989-0527*/}
                            {/*</div>*/}
                            <div data-aos="fade-up" data-aos-offset="100"
                                 style={{
                                     fontSize: 15,
                                     textAlign: 'left',
                                     wordSpacing: 3,
                                     paddingTop: 5,
                                     paddingBottom: 15,
                                     color: 'black'
                                     // marginTop:10
                                     // fontFamily:'Itim',
                                 }}>
                                Publisher: Department of Social Sciences, Faculty of Social Sciences and Languages, Sabaragamuwa University of Sri Lanka
                            </div>
                        </Container>

                    </Col>
                </Row>
                <Row style={{paddingBottom:50}}>
                    <Col md="4" xs="12" style={{alignItems:'center'}}>
                    </Col>
                    <Col md="5" xs="12" style={{alignItems:'center'}}>
                        <Articles/>



                    </Col>
                </Row>
            </div>
            <Footer/>

        </div>
    );
}

export default Home;
