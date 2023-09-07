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

function EditorialPolicies() {
    return (
        <div className="EditorialPolicies">
            {/*<Nav/>*/}
            <div style={{position:'relative',background:Colors.colorA}} >
                <Row data-aos="fade-up" data-aos-offset="100">
                    <Container style={{paddingLeft: '10%', paddingRight: '10%',marginTop:80}}>
                        <div style={{
                            fontSize: 60,
                            fontWeight: 'bold',
                            color: 'white',
                            textAlign:'left'
                            // fontFamily:'Itim',
                        }}>
                            Editorial Policies
                        </div>
                    </Container>
                </Row>
                <Row data-aos="fade-up" data-aos-offset="100">
                    <Container style={{paddingLeft: '10%', paddingRight: '10%',marginTop:20}}>
                        <div style={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            color: 'white',
                            textAlign:'left'
                            // fontFamily:'Itim',
                        }}>
                            Operating and Review Process
                        </div>
                    </Container>
                </Row>
                <Row data-aos="fade-up" data-aos-offset="100" style={{margin: 0}}>
                    <Container style={{paddingLeft: '10%', paddingRight: '10%'}}>
                        <div style={{
                            fontSize: 18,
                            textAlign: 'left',
                            wordSpacing: 3,
                            paddingTop: 25,
                            color: 'white',
                            // fontFamily:'Itim',
                        }}>
                            The AJPS follows nine steps in the editorial review process:
                        </div>
                    </Container>
                </Row>
                <Row data-aos="fade-up" data-aos-offset="100" style={{margin: 0}}>
                    <Container style={{paddingLeft: '10%', paddingRight: '10%'}}>
                        <div style={{
                            fontSize: 18,
                            textAlign: 'left',
                            wordSpacing: 3,
                            paddingTop: 10,
                            paddingBottom: 75,
                            color: 'white',
                            // fontFamily:'Itim',
                        }}>
                            The journal’s Editor-in-Chief and the members of the Editorial Board of the respective field, review the paper to determine whether it is within the scope of the journal. It will also review the relevance to journal needs in terms of novelty, impact, design, procedure, language and presentation before proceeding to the reviewing process. If the paper is not acceptable, the manuscript will be rejected outright and the author is informed. If the article is accepted, then, the following steps are followed.                         </div>
                    </Container>
                </Row>
            </div>
            <div >
                <Container data-aos="fade-up" data-aos-offset="100" style={{paddingLeft: '10%', paddingRight: '10%',marginTop:40, paddingBottom:'5%'}}>
                    <ol style={{fontSize: 18}} type="1">
                        <li>The Editor-in-Chief sends the article-identifying information having been removed, to two (2) reviewers. They are specialists in the subject matter of the article. The Editor-in-Chief requests that they complete the review within three (3) weeks. <br/><br/></li>
                        <li>Comments to authors are about the appropriateness and adequacy of the theoretical or conceptual framework, literature review, method, results and discussion, and conclusions.<br/>
                            Reviewers often include suggestions for strengthening the manuscript. Comments to the editor are in the nature of the significance of the work and its potential contribution to the research field.<br/>
                            The Editor-in-Chief examines the review reports and decides whether to accept or reject the manuscript, invite the authors to revise and resubmit the manuscript or seek additional review reports. In rare instances, the manuscript is accepted with almost no revision. Almost without exception, reviewers’ comments to the author[s] are forwarded to the author(s). If a revision is indicated, the editor provides guidelines to the author(s) for adhering to the reviewers' suggestions and perhaps additional advice about revising the manuscript.<br/><br/></li>
                        <li>The Editor-in-Chief sends the revised manuscript out for re-review. Typically, at least one (01) of the original reviewers will be asked to examine the article.<br/><br/></li>
                        <li>When the reviewers have completed their work, the Editor-in-Chief examines the comments and decides whether the manuscript is ready to be published and needs another round of revisions, or should be rejected.<br/><br/></li>
                        <li>The Editor-in-Chief reserves the final right to accept or reject any material for publication, if the processing of a particular manuscript is deemed not to comply with the terms and conditions of the journal, a rejection notification is sent to the author or all the authors.<br/><br/></li>
                        <li>The editorial assistants ensure that the manuscript adheres to the correct style (in-text citations, the reference list, and tables and proper formatting as given in the guidelines.<br/><br/></li>
                        <li>The authors are asked to respond to any minor queries by the editorial assistants. Following these corrections, page proofs are mailed to the corresponding author for his/her final approval.<br/><br/></li>
                        <li>The accepted paper is processed for publication (soft copy) upon the successful completion of the journal’s terms and conditions.<br/><br/></li>
                        <li>The paper is published online first. </li>
                    </ol>

                </Container>
            </div>
            <Footer/>

        </div>
    );
}

export default EditorialPolicies;
