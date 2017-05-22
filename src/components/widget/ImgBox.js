/**
 * Created by luowen on 2017/5/23.
 */

import React, {Component} from 'react';

export default class ImgBox extends Component {
    render() {
        let props = this.props;
        console.log('-----------');
        console.log(props);
        return (
            <div className="item" key={props.key}>
                <div className="animate-box">
                    <a href={props.item.url} className="image-popup fh5co-board-img" title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?"><img src={props.item.url} alt="Free HTML5 Bootstrap template" /></a>
                </div>
                <div className="fh5co-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?</div>
            </div>
        );
    }
}

