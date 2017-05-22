/**
 * Created by luowen on 2017/5/20.
 */

import React, {Component} from 'react';
import ImgBox from "../../components/widget/ImgBox";

import $ from 'jquery';
import 'jquery.easing';
import 'magnific-popup';
import salvattore from 'salvattore';

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
        let Dom_imgBox = this.refs.fh5coBoard;
        let E_imgBox = $(Dom_imgBox);

        let Dom_item = $(".item", E_imgBox).map((box) => {
            return box.get(0);
        });
        salvattore.prependElements(Dom_imgBox, Dom_item)
        let E_imgPopUp = $(".image-popup", E_imgBox);
        E_imgPopUp.magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            titleSrc: 'title',
            gallery:{
                enabled:true
            },
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
                opener: function(openerElement) {
                    // openerElement is the element on which popup was initialized, in this case its <a> tag
                    // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });

    }

    render() {
        return (
            <div id="fh5co-main">
                <div className="container">
                    <div className="row">
                        <div id="fh5co-board" ref="fh5coBoard" data-columns>
                            {this.imgBox.map((item) => {
                                return <ImgBox item={item}/>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );

    }

}
