/**
 * Created by luowen on 2017/5/20.
 */
import React, {Component} from  'react';

export default class Menu extends Component {
    render() {
        return (
            <div id="fh5co-offcanvass" ref={this.props.menu}>
                <a href="#" className="fh5co-offcanvass-close js-fh5co-offcanvass-close" onClick={this.props.showMenu}>菜单
                    <i className="icon-cross"></i></a>
                <h1 className="fh5co-logo">
                    <a className="navbar-brand" href="index.html">斗图</a>
                </h1>
                <ul>
                    <li><a href="about.html">登录</a></li>
                    <li><a href="about.html">注册</a></li>
                    <li><a href="pricing.html">发现</a></li>
                    <li><a href="contact.html">流行</a></li>
                    <li><a href="contact.html">关于我们</a></li>
                </ul>
                <h3 className="fh5co-lead">联系我们</h3>
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
