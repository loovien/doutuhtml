import React, { Component } from 'react';
import Header from './layouts/Header';
import Main from  './layouts/Main';
import Menu from './layouts/Menu';
import Footer from './layouts/Footer';

import '../assets/css/animate.css';
import '../assets/css/icomoon.css';
import '../assets/css/magnific-popup.css';
import '../assets/css/salvattore.css';
import '../assets/css/style.css';

import $ from 'jquery';
import 'modernizr';
import 'respond';
import jQueryEasing from 'jquery.easing';
// import 'waypoints';
import 'magnific-popup';
import 'salvattore';
//
$.fn.easing = jQueryEasing;

// import '../assets/js/jquery.min';
// import '../assets/js/modernizr-2.6.2.min.js';
// import '../assets/js/respond.min.js';
// import '../assets/js/jquery.easing.1.3.js';
// import '../assets/js/bootstrap.min.js';
// import '../assets/js/jquery.waypoints.min.js';
// import '../assets/js/jquery.magnific-popup.min';
// import '../assets/js/salvattore.min';
// import '../assets/js/main';


export default class App extends Component {
    render() {
        console.log($);
        return (
            <div>
                <Menu/>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }


}
