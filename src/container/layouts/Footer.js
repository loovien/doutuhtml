/**
 * Created by luowen on 2017/5/20.
 */
import React, {Component} from 'react';

export default class Footer extends Component {

    render() {
        return (
            <footer id="fh5co-footer">
                <div className="container">
                    <div className="row row-padded">
                        <div className="col-md-12 text-center">
                            <p className="fh5co-social-icons">
                                <a href="#"><i className="icon-twitter"></i></a>
                                <a href="#"><i className="icon-facebook"></i></a>
                                <a href="#"><i className="icon-instagram"></i></a>
                                <a href="#"><i className="icon-dribbble"></i></a>
                                <a href="#"><i className="icon-youtube"></i></a>
                            </p>
                            <p>
                                <small>
                                    &copy; Hydrogen Free HTML5 Template. All Rights Reserved. <br/>Designed by:
                                    <a href="http://freehtml5.co/" target="_blank">FREEHTML5.co</a> | Images by:
                                    <a href="http://pexels.com" target="_blank">Pexels</a>
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>);
    }
}
