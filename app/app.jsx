/*
 * @file app main file
 */

import 'babel-polyfill';
import 'bootstrap/scss/bootstrap.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import Nav from 'components/nav';
import Footer from 'components/footer';
import SideList from 'components/list';

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(
    (<div id="desktop">
        <Nav />
        <SideList/>
        <Footer />
    </div>)
    , app);
