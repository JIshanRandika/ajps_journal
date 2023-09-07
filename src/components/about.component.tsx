import React, {Component} from 'react';
import {Container, Row, Col} from "reactstrap";
import {Button} from "react-bootstrap";
import Carousel from '../components/homeCarousel.component'
import {Colors} from '../constants/colors'


export default class HeaderComponent extends Component {
    render() {

        return (

            <>
                <div style={{position:'relative',background:Colors.colorA}} >

                    <Row style={{margin: 0}}>
                        <Container style={{paddingLeft: '10%', paddingRight: '10%',marginTop:80}}>
                            <div style={{
                                fontSize: 60,
                                fontWeight: 'bold',
                                color: 'white',
                                textAlign:'left',
                                paddingBottom: 75,
                                // fontFamily:'Itim',
                            }}>
                                About AJPS
                            </div>
                        </Container>

                    </Row>
                </div>

                <div style={{position:'relative'}} >
                    <Row data-aos="fade-up" data-aos-offset="100" style={{margin: 0}}>
                        <Container style={{paddingLeft: '15%', paddingRight: '15%'}}>
                            <div style={{
                                fontSize: 18,
                                textAlign: 'left',
                                wordSpacing: 3,
                                paddingTop: 25,
                                color: 'black',
                                // fontFamily:'Itim',
                            }}>
                                Asian Journal of Politics and Society is an international open-access, peer-reviewed and refereed journal which is published by the Department of Social Sciences, Faculty of Social Sciences and Languages, Sabaragamuwa University of Sri Lanka. The journal welcomes articles from researchers interested in theoretical developments/debates, results of research that advance understanding of fundamental social and political processes, important methodological innovations, empirical analysis, policy implementation, and pragmatic themes and issues in Sociology and Political Science.
                            </div>
                        </Container>
                    </Row>
                    <Row data-aos="fade-up" data-aos-offset="100" style={{margin: 0}}>
                        <Container style={{paddingLeft: '15%', paddingRight: '15%'}}>
                            <div style={{
                                fontSize: 18,
                                textAlign: 'left',
                                wordSpacing: 3,
                                paddingTop: 25,
                                color: 'black',
                                // fontFamily:'Itim',
                            }}>
                                The journal’s contents reflect its inclusive and holistic framework, which includes primary research articles, discussions of current issues, empirical studies, literature reviews, case studies, conceptual models, reports, film and documentary discussions, book reviews, and review articles.                             </div>
                        </Container>
                    </Row>



                    <Row data-aos="fade-up" data-aos-offset="100" style={{paddingBottom: 80}}>
                        <Container style={{paddingLeft: '15%', paddingRight: '15%'}}>
                            <div style={{
                                fontSize: 18,
                                textAlign: 'left',
                                wordSpacing: 3,
                                paddingTop: 25,
                                color: 'black',
                                // fontFamily:'Itim',
                            }}>
                                <ul>
                                    <li>
                                        The AJPS will be published by the Department of Social Sciences, Sabaragamuwa University of Sri Lanka.
                                    </li>
                                    <li>
                                        The AJPS will be published in an online version.
                                    </li>
                                    <li>
                                        Every volume of this journal will be published bi-annually, in June and December. Each issue will include a minimum of five papers. Each issue will run concurrently, and all officially approved manuscripts will be posted online right away.
                                    </li>
                                    <li>
                                        The Journal will publish in English.
                                    </li>
                                    <li>
                                        To guarantee the academic quality, papers are double-blind refereed before being approved for publication (Criteria for reviewing include whether the title is suitable, the abstract is accepted, the introduction is sufficient, the research problem and objectives are clear and justifiable, review of theoretical and empirical literature are acceptable, the methodology (materials and methods) is adequate, results and discussion are appropriate, conclusions and recommendations are sufficient, originality and contribution to the field and list of references, formatting, language, plagiarism etc.).
                                    </li>

                                </ul>
                            </div>

                        </Container>
                    </Row>

                </div>

            </>



        );
    }
}
