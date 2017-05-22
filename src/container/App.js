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

import $ from "jquery";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.menu = null;
        this.showMenu = this.showMenu.bind(this);
    }
    showMenu(evt) {
        evt.preventDefault();
        let E_menu = $(this.menu);
        E_menu.toggleClass("fh5co-awake");
    }
    render() {
        return (
            <div>
                <Menu menu={el => this.menu = el} showMenu={this.showMenu}/>
                <Header showMenu={this.showMenu}/>
                <Main/>
                <Footer/>
            </div>
        );
    }


}
