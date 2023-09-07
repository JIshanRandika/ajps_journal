import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './views/home.view';
import BoardOfEditorsView from './views/boardOfEditors.view';
import EditorialPolicies from './views/editorialPolicies.view';
import CodeOfEthics from './views/codeOfEthics.view';
import Guidelines from "./views/guidelines.view";
import Policies from "./views/policies.view";
import Submission from "./views/submission.view";




import CurrentIssue from './views/currentIssue.view';
import AboutUs from './views/aboutUs.view';
import ContactUs from './views/contactUs.view';
import reportWebVitals from './reportWebVitals';
import Nav from './components/nav.component';

import {
    BrowserRouter,
    Routes,
    Route, BrowserRouter as Router,
} from "react-router-dom";
import {render} from "react-dom";
// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <Home />
//
//   </React.StrictMode>
// );
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

render(

    <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path="/" element={<Home/>}>
            </Route>
            <Route path="/boardOfEditorsView" element={<BoardOfEditorsView/>}>
            </Route>
            <Route path="/editorialPolicies" element={<EditorialPolicies/>}>
            </Route>
            <Route path="/codeOfEthics" element={<CodeOfEthics/>}>
            </Route>
            <Route path="/guidelines" element={<Guidelines/>}>
            </Route>
            <Route path="/policies" element={<Policies/>}>
            </Route>
            <Route path="/submission" element={<Submission/>}>
            </Route>


            <Route path="/currentIssue" element={<CurrentIssue/>}>
            </Route>
            <Route path="/aboutUs" element={<AboutUs/>}>
            </Route>
            <Route path="/contactUs" element={<ContactUs/>}>
            </Route>

        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);
