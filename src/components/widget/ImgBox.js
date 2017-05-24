/**
 * Created by luowen on 2017/5/23.
 */

import React, {Component} from 'react';

import $ from "jquery";
import 'magnific-popup';

import 'jquery.easing';

export default class ImgBox extends Component {
    componentDidMountooo() {
        let E_imgPopUp = $(this.refs.imgBoxItem);
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
        let props = this.props;
        console.log('-----------');
        console.log(props);
        return (
            <div className="item" ref="imgBoxItem">
                <div>
                    <a href={props.item.url} className="image-popup fh5co-board-img" title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?"><img src={props.item.url} alt="Free HTML5 Bootstrap template" /></a>
                </div>
                <div className="fh5co-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?</div>
            </div>
        );
    }
}

