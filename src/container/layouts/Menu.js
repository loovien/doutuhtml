/**
 * Created by luowen on 2017/5/20.
 */
import React, {Component} from  'react';

export default class Menu extends Component {
    render() {
        return (
            <div id="fh5co-offcanvass">
                <a href="#" className="fh5co-offcanvass-close js-fh5co-offcanvass-close">Menu
                    <i className="icon-cross"></i></a>
                <h1 className="fh5co-logo">
                    <a className="navbar-brand" href="index.html">Hydrogen</a>
                </h1>
                <ul>
                    <li className="active"><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="pricing.html">Pricing</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
                <h3 className="fh5co-lead">Connect with us</h3>
                <p className="fh5co-social-icons">
                    <a href="#"><i className="icon-twitter"></i></a>
                    <a href="#"><i className="icon-facebook"></i></a>
                    <a href="#"><i className="icon-instagram"></i></a>
                    <a href="#"><i className="icon-dribbble"></i></a>
                    <a href="#"><i className="icon-youtube"></i></a>
                </p>
            </div>
        );
    }
}
