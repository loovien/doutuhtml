/**
 * Created by luowen on 2017/5/20.
 */
import React, {Component} from 'react';
import $ from "jquery";

export default class Header extends Component {
    render () {
        return (<div>
            <header id="fh5co-header" role="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <a onClick={this.props.showMenu} className="fh5co-menu-btn js-fh5co-menu-btn">菜单 <i className="icon-menu"></i></a>
                            <a className="navbar-brand" href="#">斗图</a>
                        </div>
                    </div>
                </div>
            </header>
        </div>);
    }

}
