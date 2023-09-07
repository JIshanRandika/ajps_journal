import React from 'react';
import '../App.css';
import Footer from '../components/footer.component'
import {Row,Col,Container} from 'reactstrap';
import {Colors} from '../constants/colors'

function CodeOfEthics() {
    return (
        <div className="CodeOfEthics">
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
                            Code of Ethics
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
                            Publication Ethics
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
                            The AJPS is a double-blind, peer-reviewed, open-access, biannual e-journal dedicated to ensuring the highest values of publication ethics. All stakeholders of the journal such as Editors, Authors, Reviewers, and publishers have to agree upon the total ethical behaviour.
                        </div>
                    </Container>
                </Row>
            </div>
            <div >
                <Container data-aos="fade-up" data-aos-offset="100" style={{paddingLeft: '10%', paddingRight: '10%',marginTop:40, paddingBottom:'5%'}}>
                    <ol style={{fontSize: 18}} type="a">
                        <li>
                            <span style={{fontWeight:"bold"}}>Publication Ethics for Journal Editors</span>
                            <ul>
                                <li>
                                    Editors are only accountable for everything published in the journal: this includes having measures in place to assess the quality of the material they accept for the journal and a willingness to publish corrections and clarifications when required. The sole responsibility for the content of the article lies with the author(s). The ideas of the article do not represent the ideas of the AJPS or any other party of the Journal.
                                </li>
                                <li>
                                    Editors should act in a fair and balanced way when carrying out their duties, without discrimination on grounds of gender, ethnicity, sexual orientation, religious or political beliefs.
                                </li>
                                <li>
                                    Editors should guide authors and reviewers on everything that is expected of them.
                                </li>
                                <li>
                                    Editors should make decisions on which articles to publish based on quality and suitability.
                                </li>
                                <li>
                                    Editors should handle submissions in a fair, unbiased, and timely manner and treat all manuscripts as confidential, for distribution to others for purposes of peer review only.
                                </li>
                                <li>
                                    Editors should have systems to ensure that peer reviewers’ identities are protected unless they use an open review system that is declared to authors and reviewers.
                                </li>
                                <li>
                                    Journal’s policy is to ensure that commercial considerations do not affect editorial decisions, and editors should handle submissions for funded issues in the same way as for standard issues so that articles are accepted entirely on their academic merit and without commercial influence.
                                </li>
                                <li>
                                    Editors should manage their conflicts of interest as well as those of their staff, authors, reviewers, and editorial board members.
                                </li>
                            </ul>

                        </li>

                        {/*===*/}
                        <li>
                            <span style={{fontWeight:"bold"}}>Publication Ethics for Journal Authors</span>
                            <ul>
                                <li>
                                    Authors should declare that all work in their submitted piece is original, and cite content from other sources appropriately to avoid plagiarism.
                                </li>
                                <li>
                                    Authors must ensure their contribution does not contain any libelous matter or infringe any copyright or other intellectual property rights or any other rights of any third party.
                                </li>
                                <li>
                                    The listing of authors should accurately reflect who carried out the research and wrote the article, and the order of authorship should be jointly determined by all of the co-authors.
                                </li>
                                <li>
                                    All authors should be aware of the submission of their paper to the journal and agree to the main/lead author signing the copyright form on their behalf.
                                </li>
                                <li>
                                    Authors should ensure that their manuscript as submitted is not under consideration (or accepted for publication) elsewhere. Where sections of the manuscript overlap with published or submitted content, this should be acknowledged and cited.
                                </li>
                                <li>
                                    The source(s) of funding for a research project should be listed on all funded research papers and should also be identified in the manuscript, typically in the acknowledgment.
                                </li>
                                <li>
                                    Authors should declare any potential conflicts of interest relating to a specific article.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span style={{fontWeight:"bold"}}>Publication Ethics for Journal Article Reviewers</span>
                            <ul>
                                <li>
                                    Reviewers should assist in improving the quality of a submitted article by reviewing the manuscript promptly with care, consideration and objectivity.
                                </li>
                                <li>
                                    Reviewers should inform the Editor-in-Chief and the editor(s) of any published or submitted content that is similar to the material under review, or any suspected plagiarism.
                                </li>
                                <li>
                                    Reviewers should declare any potential conflicts of interest relating to a specific article or author.
                                </li>
                                <li>
                                    Reviewers should respect the confidentiality of any information or material supplied during the review process.
                                </li>
                            </ul>
                        </li>

                    </ol>

                </Container>
            </div>
            <Footer/>

        </div>
    );
}

export default CodeOfEthics;
