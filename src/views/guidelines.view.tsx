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

function Guidelines() {
    return (
        <div className="Guidelines">
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
                                Guidelines
                            </div>
                    </Container>
                </Row>
            </div>
            <div >
                <Container data-aos="fade-up" data-aos-offset="100" style={{paddingLeft: '10%', paddingRight: '10%',marginTop:40, paddingBottom:'5%'}}>
                    <div style={{fontSize: 20, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',fontWeight:'bold'}}>
                        1. Manuscript Types
                    </div>
                    <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',marginLeft:25}}>
                        The AJPS welcomes original research articles, review articles and book reviews in the fields of Political Science and Sociology.
                    </div>
                    <div style={{fontSize: 20, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',fontWeight:'bold'}}>
                        1.1. Research Article
                    </div>
                    <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',marginLeft:25}}>
                        A research article is a full-length original empirical investigation, consisting of an introduction, materials and methods, results and discussion, and a conclusion.
                    </div>
                    <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',marginLeft:25}}>
                        Manuscript Length: minimum 6000 words and maximum 8000 words excluding the abstract, references, tables and/or figures).
                    </div>
                    <div style={{fontSize: 20, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',fontWeight:'bold'}}>
                        1.2. Review Article
                    </div>
                    <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',marginLeft:25}}>
                        These report critical evaluation of materials about current research that has already been published by organizing, integrating, and evaluating previously published materials. It summarizes the status of knowledge and outlines future directions of research within the journal's scope. Review articles should aim to provide systemic overviews, evaluations and interpretations of research in a given field. Re-analyses as meta-analyses and systemic reviews are encouraged. The manuscript title must start with “Review Article:”
                        <br/>Manuscript Length: 5000 to 6000 words.
                    </div>
                    <div style={{fontSize: 20, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',fontWeight:'bold'}}>
                        1.3. Book Review
                    </div>
                    <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',marginLeft:25}}>
                        A book review offers a description and an evaluation of a book within the journal's scope. The author must furnish the book information or bibliographic citation in full including author(s), place, publisher, date of publication, edition statement, pages, special features (maps, colour plates, etc.), price and ISBN. A snapshot of the book cover is necessary. The manuscript title must start with “Book Review”.
                        <br/>Manuscript Length: 1500 to 2500 words. The review does not necessarily have an abstract and references.
                    </div>
                    <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',marginLeft:25}}>
                        Please read the Author's Guidelines and follow these instructions carefully. Manuscripts not adhering to the instructions will be returned for revision without review. The Editor-in-Chief reserves the right to return manuscripts that are not prepared following these guidelines.
                    </div>
                    <div style={{fontSize: 20, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',fontWeight:'bold'}}>
                        Language Accuracy
                    </div>
                    <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',marginLeft:25}}>
                        The AJPS emphasizes the linguistic accuracy of every manuscript published. Articles must be in English and they must be competently written and argued in clear and concise grammatical English. Contributors are strongly advised to have the manuscript checked by a colleague with ample experience in writing English manuscripts or a competent English language editor. Author(s) should provide a certificate confirming that their manuscripts have been adequately edited. If needed, proof from a recognized editing service should be submitted together with the cover letter at the time of submitting a manuscript to the AJPS.
                    </div>
                    <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',marginLeft:25}}>
                        All language editing costs must be borne by the author(s). This step, taken by authors before submission, will greatly facilitate reviewing, and thus publication if the content is acceptable. Linguistically incorrect manuscripts will be rejected straightaway (e.g., when the language is so poor that one cannot be sure of what the author(s) mean).
                    </div>
                    <div style={{fontSize: 20, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',fontWeight:'bold'}}>
                        Manuscript preparation
                    </div>
                    <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',marginLeft:25}}>
                        Submissions must be original and should not have been published earlier or be under consideration for publication while being evaluated for this Journal.
                    </div>
                    <div style={{fontSize: 20, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',fontWeight:'bold'}}>
                        a) Organization of the manuscript
                    </div>
                    <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',marginLeft:25}}>
                        <ul>
                            <li>
                                The manuscript should contain the items mentioned here.
                                <ul>
                                    <li>Title</li>
                                    <li>Details of the Authors</li>
                                    <li>Abstract</li>
                                    <li>Keywords</li>
                                    <li>Introduction</li>
                                    <li>Literature review</li>
                                    <li>Materials and methods</li>
                                    <li>Results and discussion</li>
                                    <li>Conclusion and recommendations</li>
                                    <li>Acknowledgments (If any)</li>
                                    <li>Conflict of interests (if any)</li>
                                    <li>Reference</li>
                                </ul>

                            </li>
                        </ul>
                    </div>
                    <div style={{fontSize: 20, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',fontWeight:'bold'}}>
                        b) Language
                    </div>
                    <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',marginLeft:25}}>
                        The language of the manuscript must be English. The authors are advised to maintain the version (American or British English) throughout the article.
                    </div>
                    <div style={{fontSize: 20, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',fontWeight:'bold'}}>
                        c) Length of Paper
                    </div>
                    <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',marginLeft:25}}>
                        The length of the paper depends on the type of manuscript; however, it should not exceed 20 pages of A4 sheets. A paper containing more than 20 pages of words will be returned to the author(s) to abridge. Articles should be typed using 12 font sizes (Times New Roman) in 1.15-line spacing on one side of A4 paper with normal margins (Top 1”, Bottom 1”, Left 1” and Right 1”). Authors are requested to write as concisely as possible, but not at the expense of clarity.
                    </div>
                    <div style={{fontSize: 20, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',fontWeight:'bold'}}>
                        d) Title Page
                    </div>
                    <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',marginLeft:25}}>
                        The title page is a separate page before the text. It should include the following information; the title of the paper, the author(s)’s name(s) and affiliations, and information about the corresponding author.
                    </div>
                    <div style={{fontSize: 20, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',fontWeight:'bold'}}>
                        e) Title
                    </div>
                    <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',marginLeft:25}}>
                        The title should be concise and informative. Abbreviations, acronyms and formulae should be avoided where possible (Font Size 14, Capitalize Each Word, Bold and Centered).
                    </div>
                    <div style={{fontSize: 20, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',fontWeight:'bold'}}>
                        f) Author’s Names and Affiliations
                    </div>
                    <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',marginLeft:25}}>
                        Indicate the initials and then the last name. Present the authors’ affiliation addresses (where the actual work was done) below the names. Indicate all affiliations with a lower-case superscript letter immediately after the author's name and in front of the appropriate address. Provide the full postal address of each affiliation, including the country name and the e-mail address of each author (Font Size 12, Capitalize Each Word, Bold and Centered).
                    </div>
                    <div style={{fontSize: 20, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',fontWeight:'bold'}}>
                        g) Corresponding Author
                    </div>
                    <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',marginLeft:25}}>
                        Indicate who is willing to handle correspondence at all stages of refereeing, publication, and also post-publication. Ensure that telephone numbers (with country and area code) are provided in addition to the e-mail address and the complete postal address.
                    </div>
                    <div style={{fontSize: 20, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',fontWeight:'bold'}}>
                        h) Abstract
                    </div>
                    <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',marginLeft:25}}>
                        A concise and factual abstract is required (maximum length of 150-200 words). The abstract should state briefly the purpose of the research, the principal results, and major conclusions. An abstract is often presented separately from the article, so it must be able to stand alone. References should be avoided in the abstract.
                    </div>
                    <div style={{fontSize: 20, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',fontWeight:'bold'}}>
                        i) Keywords
                    </div>
                    <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',marginLeft:25}}>
                        Immediately after the abstract, a maximum of five (5) keywords should be provided, avoiding general and plural terms and multiple concepts (avoid, for example, ‘and’, ‘of’). Unnecessarily long phrases also should be avoided.
                    </div>
                    <div style={{fontSize: 20, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',fontWeight:'bold'}}>
                        j) Introduction
                    </div>
                    <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',marginLeft:25}}>
                        This section should be concise, with no subheadings and provide background to the research problem, present the research problem with sufficient justification and objective/s.
                    </div>
                    <div style={{fontSize: 20, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',fontWeight:'bold'}}>
                        k) Literature Review
                    </div>
                    <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',marginLeft:25}}>
                        This section should provide a sufficient evaluation of theoretical/empirical literature to identify the knowledge gap.
                    </div>
                    <div style={{fontSize: 20, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',fontWeight:'bold'}}>
                        l) Materials and Methods
                    </div>
                    <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',marginLeft:25}}>
                        This section should contain adequate detailed information what all the procedures and steps followed.
                    </div>
                    <div style={{fontSize: 20, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',fontWeight:'bold'}}>
                        m) Results and Discussion
                    </div>
                    <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',marginLeft:25}}>
                        This section should describe the findings of the research work.
                    </div>
                    <div style={{fontSize: 20, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',fontWeight:'bold'}}>
                        n) Conclusion and Recommendations
                    </div>
                    <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',marginLeft:25}}>
                        This should clearly explain the important conclusions of the work highlighting its significance, relevance, and values.
                    </div>
                    <div style={{fontSize: 20, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',fontWeight:'bold'}}>
                        o) Subdivision of the Article
                    </div>
                    <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',marginLeft:25}}>
                        Divide your article into clearly defined and numbered sections. Sections and subsections should be numbered 1, 2. (then 1.1, 1.1.1, 1.1.2), 1.2, etc. The abstract is not included in the section numbering. All headings of subsections should be bold. The sections - font size 12 Times New Roman, bold and subsections - font size 12 Times New Roman, bold and italicised.
                    </div>
                    <div style={{fontSize: 20, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',fontWeight:'bold'}}>
                        p) Tables and Figures
                    </div>
                    <div style={{fontSize: 20, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',fontWeight:'bold'}}>
                        Table
                    </div>
                    <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',marginLeft:25}}>
                        All tables and figures should be professionally typeset following APA guidelines. VERSION <br/>
                        <ul>
                            <li>
                                Use Word table generator; do not apply styles, shading, or underlining.
                            </li>
                            <li>
                                Single space all rows; do not allow lead or following spaces in the paragraph option.
                            </li>
                            <li>
                                Use superscripts a, b, c, and so forth sparingly for table notes.
                            </li>
                        </ul>
                        <a href='https://apastyle.apa.org/style-grammar-guidelines/tables-figures/figures'>
                            https://apastyle.apa.org/style-grammar-guidelines/tables-figures/figures
                        </a>

                    </div>
                    <div style={{fontSize: 20, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',fontWeight:'bold'}}>
                        Figures
                    </div>
                    <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',marginLeft:25}}>
                        <ul>
                            <li>
                                Follow the APA guidelines when formatting and placing the figures.
                            </li>
                            <li>
                                The author is responsible for securing permission to use graphics or data from other sources.
                            </li>
                            <li>
                                If re-creating a graphic from another source, secure permission to adapt the figure.
                            </li>
                            <li>
                                Do not include a scan or photocopy of a graphic.
                            </li>
                        </ul>
                        <a href='https://apastyle.apa.org/style-grammar-guidelines/tables-figures/figures'>
                            https://apastyle.apa.org/style-grammar-guidelines/tables-figures/figures
                        </a>
                    </div>
                    <div style={{fontSize: 20, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',fontWeight:'bold'}}>
                        r) Acknowledgments
                    </div>
                    <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',marginLeft:25}}>
                        If the research is sponsored, funded or supported by an organization, indicate it.
                    </div>
                    <div style={{fontSize: 20, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',fontWeight:'bold'}}>
                        t) Conflict of Interests
                    </div>
                    <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',marginLeft:25}}>
                        The corresponding author must include a summary statement in the manuscript in a separate section “Conflicts of Interest” placed just before the reference list. The statement should reflect all the collected potential conflict of interest disclosures in the article.
                    </div>
                    <div style={{fontSize: 20, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',fontWeight:'bold'}}>
                        s) Reference List
                    </div>
                    <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',marginLeft:25}}>
                        APA referencing style should be followed to arrange the list of references. References should be arranged alphabetically. More than one reference from the same author(s) in the same year must be identified by the letters "a", "b", "c", etc., placed after the year of publication.
                        <br/>
                        <a href='https://apastyle.apa.org/'>
                            https://apastyle.apa.org/
                        </a>
                    </div>
                    <div style={{fontSize: 20, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',fontWeight:'bold'}}>
                        Submission Checklist
                    </div>
                    <div style={{fontSize: 18, textAlign: 'left', wordSpacing: 3, paddingTop: 25, color: 'black',marginLeft:25}}>
                        Before submitting the manuscript, the author(s) should check the following list.
                        <ol>
                            <li>
                                Read the Aims and Scope to gain an overview and assess if your manuscript is suitable for this journal.
                            </li>
                            <li>
                                The submission has not been previously published or considered for publication as a part or full paper.
                            </li>
                            <li>
                                The submission file is in Microsoft Word file.
                            </li>
                            <li>
                                Manuscript has been made in light of the Journal’s author guidelines.
                            </li>
                            <li>
                                Author(s) has/have not mentioned his/her or their name and affiliation in the main text.
                            </li>
                            <li>
                                Author(s) has/have read all the terms and conditions of the journal.
                            </li>
                            <li>
                                Plagiarism level should be below 15%.
                            </li>
                        </ol>
                    </div>
                </Container>
            </div>
            <Footer/>

        </div>
    );
}

export default Guidelines;
