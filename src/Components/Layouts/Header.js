/**
 * Created by luowen on 2017/5/19.
 */

import React, {Component} from 'react';
import './layouts.css';

export default class Header extends Component {
    render() {
        return (
            <header className="nav-header">
                <h3 className="nav-header-title">斗图</h3>
                <ul className="nav-menu u-pull-right">
                    <li>
                        <a href="#">浏览</a>
                        <a href="#">协议</a>
                        <a href="#">上传</a>
                        <a href="#">工具</a>
                    </li>
                </ul>
            </header>
        );
    }
}
