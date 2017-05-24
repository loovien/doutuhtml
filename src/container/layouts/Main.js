/**
 * Created by luowen on 2017/5/20.
 */

import React, {Component} from 'react';
import ImgBox from "../../components/widget/ImgBox";

import Masonry from 'react-masonry-component';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.imgBox = [
            {key: 1, url: 'http://localhost/hydrogen/images/img_1.jpg'},
            {key: 2, url: 'http://localhost/hydrogen/images/img_2.jpg'},
            {key: 3, url: 'http://localhost/hydrogen/images/img_3.jpg'},
            {key: 4, url: 'http://localhost/hydrogen/images/img_4.jpg'},
            {key: 5, url: 'http://localhost/hydrogen/images/img_5.jpg'},
            {key: 6, url: 'http://localhost/hydrogen/images/img_6.jpg'},
            {key: 7, url: 'http://localhost/hydrogen/images/img_7.jpg'},
            {key: 8, url: 'http://localhost/hydrogen/images/img_8.jpg'},
            {key: 9, url: 'http://localhost/hydrogen/images/img_9.jpg'},
            {key: 10, url: 'http://localhost/hydrogen/images/img_10.jpg'},
            {key: 11, url: 'http://localhost/hydrogen/images/img_12.jpg'},
            {key: 12, url: 'http://localhost/hydrogen/images/img_13.jpg'},
            {key: 13, url: 'http://localhost/hydrogen/images/img_14.jpg'}
        ]
    }
    componentDidMount() {
    }

    render() {
        return (
            <div id="fh5co-main">
                <div className="container">
                    <div className="row">
                        <Masonry id="fh5co-board">
                            {this.imgBox.map((item) => {
                                return <ImgBox item={item} key={item.key} />
                            })}
                        </Masonry>
                    </div>
                </div>
            </div>
        );

    }

}
