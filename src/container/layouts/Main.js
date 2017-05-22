/**
 * Created by luowen on 2017/5/20.
 */

import React, {Component} from 'react';

import $ from 'jquery';
import 'jquery.easing';
import 'magnific-popup';
import 'salvattore';


export default class Main extends Component {
    componentDidMount() {
        let E_imgBox = $(this.refs.fh5coBoard);
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

    componentWillUnmount() {
    }
    render() {
        return (
            <div id="fh5co-main">
                <div className="container">
                    <div className="row">
                        <div ref="fh5coBoard" data-columns>
                            <div className="item">
                                <div className="animate-box">
                                    <a href="images/img_1.jpg" className="image-popup fh5co-board-img" title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?"><img src="images/img_1.jpg" alt="Free HTML5 Bootstrap template" /></a>
                                </div>
                                <div className="fh5co-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?</div>
                            </div>
                            <div className="item">
                                <div className="animate-box">
                                    <a href="images/img_2.jpg" className="image-popup fh5co-board-img"><img src="images/img_2.jpg" alt="Free HTML5 Bootstrap template" /></a>
                                    <div className="fh5co-desc">Veniam voluptatum voluptas tempora debitis harum totam vitae hic quos.</div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="animate-box">
                                    <a href="images/img_3.jpg" className="image-popup fh5co-board-img"><img src="images/img_3.jpg" alt="Free HTML5 Bootstrap template" /></a>
                                    <div className="fh5co-desc">Optio commodi quod vitae, vel, officiis similique quaerat odit dicta.</div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="animate-box">
                                    <a href="images/img_4.jpg" className="image-popup fh5co-board-img"><img src="images/img_4.jpg" alt="Free HTML5 Bootstrap template" /></a>
                                    <div className="fh5co-desc">Dolore itaque deserunt sit, at exercitationem delectus, consequuntur quaerat sapiente.</div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="animate-box">
                                    <a href="images/img_5.jpg" className="image-popup fh5co-board-img"><img src="images/img_5.jpg" alt="Free HTML5 Bootstrap template" /></a>
                                    <div className="fh5co-desc">Tempora distinctio inventore, nisi excepturi pariatur tempore sit quasi animi.</div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="animate-box">
                                    <a href="images/img_6.jpg" className="image-popup fh5co-board-img"><img src="images/img_6.jpg" alt="Free HTML5 Bootstrap template" /></a>
                                    <div className="fh5co-desc">Sequi, eaque suscipit accusamus. Necessitatibus libero, unde a nesciunt repellendus!</div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="animate-box">
                                    <a href="images/img_7.jpg" className="image-popup fh5co-board-img"><img src="images/img_7.jpg" alt="Free HTML5 Bootstrap template" /></a>
                                    <div className="fh5co-desc">Necessitatibus distinctio eos ipsam cum hic temporibus assumenda deleniti, soluta.</div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="animate-box">
                                    <a href="images/img_8.jpg" className="image-popup fh5co-board-img"><img src="images/img_8.jpg" alt="Free HTML5 Bootstrap template" /></a>
                                    <div className="fh5co-desc">Debitis voluptatum est error nulla voluptate eum maiores animi quasi?</div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="animate-box">
                                    <a href="images/img_9.jpg" className="image-popup fh5co-board-img"><img src="images/img_9.jpg" alt="Free HTML5 Bootstrap template" /></a>
                                    <div className="fh5co-desc">Maxime qui eius quisquam quidem quos unde consectetur accusamus adipisci!</div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="animate-box">
                                    <a href="images/img_21.jpg" className="image-popup fh5co-board-img"><img src="images/img_21.jpg" alt="Free HTML5 Bootstrap template" /></a>
                                    <div className="fh5co-desc">Deleniti aliquid, accusantium, consectetur harum eligendi vitae quaerat reiciendis sit?</div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="animate-box">
                                    <a href="images/img_10.jpg" className="image-popup fh5co-board-img"><img src="images/img_10.jpg" alt="Free HTML5 Bootstrap template" /></a>
                                    <div className="fh5co-desc">Incidunt, eaque et. Et odio excepturi, eveniet facilis explicabo assumenda.</div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="animate-box">
                                    <a href="images/img_11.jpg" className="image-popup fh5co-board-img"><img src="images/img_11.jpg" alt="Free HTML5 Bootstrap template" /></a>
                                    <div className="fh5co-desc">Laborum dolores nihil voluptates quas alias distinctio fugiat tempora sit.</div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="animate-box">
                                    <a href="images/img_12.jpg" className="image-popup fh5co-board-img"><img src="images/img_12.jpg" alt="Free HTML5 Bootstrap template" /></a>
                                    <div className="fh5co-desc">Sit, quis nulla amet numquam fugit, in reiciendis laboriosam dolor.</div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="animate-box">
                                    <a href="images/img_13.jpg" className="image-popup fh5co-board-img"><img src="images/img_13.jpg" alt="Free HTML5 Bootstrap template" /></a>
                                    <div className="fh5co-desc">Possimus explicabo voluptatem natus nisi similique ipsa repudiandae? Quibusdam, fuga.</div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="animate-box">
                                    <a href="images/img_14.jpg" className="image-popup fh5co-board-img"><img src="images/img_14.jpg" alt="Free HTML5 Bootstrap template" /></a>
                                    <div className="fh5co-desc">Magni repellendus iusto mollitia, quibusdam facilis incidunt. Sunt, repellat, voluptatem.</div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="animate-box">
                                    <a href="images/img_15.jpg" className="image-popup fh5co-board-img"><img src="images/img_15.jpg" alt="Free HTML5 Bootstrap template" /></a>
                                    <div className="fh5co-desc">Unde iure rerum cupiditate explicabo quam aut vel earum numquam.</div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="animate-box">
                                    <a href="images/img_16.jpg" className="image-popup fh5co-board-img"><img src="images/img_16.jpg" alt="Free HTML5 Bootstrap template" /></a>
                                    <div className="fh5co-desc">Qui nisi error dolorum dolor delectus, alias doloremque perspiciatis nemo.</div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="animate-box">
                                    <a href="images/img_18.jpg" className="image-popup fh5co-board-img"><img src="images/img_18.jpg" alt="Free HTML5 Bootstrap template" /></a>
                                    <div className="fh5co-desc">Neque porro vero cumque natus nam voluptatibus, ratione, commodi labore.</div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="animate-box">
                                    <a href="images/img_17.jpg" className="image-popup fh5co-board-img"><img src="images/img_17.jpg" alt="Free HTML5 Bootstrap template" /></a>
                                    <div className="fh5co-desc">Quisquam quia totam, sit ea maxime sint sed excepturi quod.</div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="animate-box">
                                    <a href="images/img_19.jpg" className="image-popup fh5co-board-img"><img src="images/img_19.jpg" alt="Free HTML5 Bootstrap template" /></a>
                                    <div className="fh5co-desc">Nesciunt non iste ex nemo sapiente eum, provident nam corporis.</div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="animate-box">
                                    <a href="images/img_20.jpg" className="image-popup fh5co-board-img"><img src="images/img_20.jpg" alt="Free HTML5 Bootstrap template" /></a>
                                    <div className="fh5co-desc">Harum repellat labore est cum ipsa, nesciunt neque mollitia adipisci?</div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="animate-box">
                                    <a href="images/img_22.jpg" className="image-popup fh5co-board-img"><img src="images/img_22.jpg" alt="Free HTML5 Bootstrap template" /></a>
                                    <div className="fh5co-desc">Quos repellendus repudiandae debitis reprehenderit cupiditate cumque accusamus exercitationem, harum.</div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="animate-box">
                                    <a href="images/img_23.jpg" className="image-popup fh5co-board-img"><img src="images/img_23.jpg" alt="Free HTML5 Bootstrap template" /></a>
                                    <div className="fh5co-desc">Sunt numquam itaque delectus, dignissimos dolorem obcaecati vel, atque eos.</div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="animate-box">
                                    <a href="images/img_24.jpg" className="image-popup fh5co-board-img"><img src="images/img_24.jpg" alt="Free HTML5 Bootstrap template" /></a>
                                    <div className="fh5co-desc">Adipisci consequuntur ipsa fugit perspiciatis eligendi. Omnis blanditiis, totam placeat.</div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="animate-box">
                                    <a href="images/img_25.jpg" className="image-popup fh5co-board-img"><img src="images/img_25.jpg" alt="Free HTML5 Bootstrap template" /></a>
                                    <div className="fh5co-desc">Quos repellendus repudiandae debitis reprehenderit cupiditate cumque accusamus exercitationem, harum.</div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="animate-box">
                                    <a href="images/img_26.jpg" className="image-popup fh5co-board-img"><img src="images/img_26.jpg" alt="Free HTML5 Bootstrap template" /></a>
                                    <div className="fh5co-desc">Sunt numquam itaque delectus, dignissimos dolorem obcaecati vel, atque eos.</div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="animate-box">
                                    <a href="images/img_27.jpg" className="image-popup fh5co-board-img"><img src="images/img_27.jpg" alt="Free HTML5 Bootstrap template" /></a>
                                    <div className="fh5co-desc">Adipisci consequuntur ipsa fugit perspiciatis eligendi. Omnis blanditiis, totam placeat.</div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="animate-box">
                                    <a href="images/img_28.jpg" className="image-popup fh5co-board-img"><img src="images/img_28.jpg" alt="Free HTML5 Bootstrap template" /></a>
                                    <div className="fh5co-desc">Adipisci consequuntur ipsa fugit perspiciatis eligendi. Omnis blanditiis, totam placeat.</div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="animate-box">
                                    <a href="images/img_29.jpg" className="image-popup fh5co-board-img"><img src="images/img_29.jpg" alt="Free HTML5 Bootstrap template" /></a>
                                    <div className="fh5co-desc">Adipisci consequuntur ipsa fugit perspiciatis eligendi. Omnis blanditiis, totam placeat.</div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="animate-box">
                                    <a href="images/img_30.jpg" className="image-popup fh5co-board-img"><img src="images/img_30.jpg" alt="Free HTML5 Bootstrap template" /></a>
                                    <div className="fh5co-desc">Adipisci consequuntur ipsa fugit perspiciatis eligendi. Omnis blanditiis, totam placeat.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }

}
