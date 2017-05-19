/**
 * Created by luowen on 2017/5/19.
 */

import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        return (
            <header>
                <h2>斗图</h2>
                <ul>
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
