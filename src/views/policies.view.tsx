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

function Policies() {
    return (
        <div className="Policies">
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
                            Policies
                        </div>
                    </Container>
                </Row>
            </div>
            <div >
                <Container data-aos="fade-up" data-aos-offset="100" style={{paddingLeft: '10%', paddingRight: '10%',marginTop:40, paddingBottom:'5%'}}>
                    <div style={{fontSize: 20, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',fontWeight:'bold'}}>
                        Copyright Notice
                    </div>
                    <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',marginLeft:25}}>
                        <ul>
                            <li>
                                The copyright of all work published in the AJPS remains with the author(s).
                            </li>
                            <li>
                                Authors are required to grant a license to the publisher, the Faculty of Social Science and Languages, the Sabaragamuwa University of Sri Lanka to publish the work in the AJPS in all forms of media, whether already known or hereafter modified (Annexure 2).
                            </li>
                            <li>
                                As copyright owners, author(s) have the right to publish the work in all forms of media, whether already known or hereafter modified, with the acknowledgment that the work was first published in the AJPS.
                            </li>
                        </ul>

                    </div>
                    <div style={{fontSize: 20, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',fontWeight:'bold'}}>
                        Article Withdrawal Policy
                    </div>
                    <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',marginLeft:25}}>
                        The articles submitted to the Journal can be withdrawn by the submitted author(s)/ Corresponding Author.  The author(s) can withdraw the article at any time before it is published officially. If the author(s) want(s) to withdraw the article, we insist on a signed statement from all the co-authors to the journal’s Editor-in-Chief via mail. If the Editor-in-Chief finds any violation of publishing ethics, guidelines, a duplicate submission, plagiarism, etc., he/she holds the right to reject the manuscript at any stage of the publishing process.
                    </div>
                    <div style={{fontSize: 20, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',fontWeight:'bold'}}>
                        Plagiarism Policy
                    </div>
                    <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',marginLeft:25}}>
                        All articles are scanned through Turnitin. Turnitin receipt will be provided to authors with review reports. Authors are requested to check plagiarism at their end also to avoid any unpleasant situation. Please respect the work of other researchers by proper quotations and citations in your article. If any article is found plagiarized, it will not be published in this journal at any cost. The Editorial Board has passed the following actions:
                        <ol type='a'>
                            <li>
                                Similarity Index above 30% - Article Rejected (No Resubmission accepted).
                            </li>
                            <li>
                                Similarity Index (15% - 30%) - The editor may send it to the author for improvement.
                            </li>
                            <li>
                                Similarity index Less than 15% - May be accepted.
                            </li>
                        </ol>
                    </div>
                    <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',marginLeft:25}}>
                        In cases 2 and 3: The author(s) should revise the article carefully, add required citations, do good paraphrasing to outsourced text and resubmit the article within four weeks.
                    </div>
                </Container>
            </div>
            <Footer/>

        </div>
    );
}

export default Policies;
