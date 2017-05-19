import React, { Component } from 'react';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
// import logo from '../logo.svg';
import '../static/css/normalize.css';
import '../static/css/skeleton.css';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="one column">One</div>
                        <div className="eleven columns">Eleven</div>
                    </div>
                    <div className="row">
                        <div className="two columns">Two</div>
                        <div className="ten columns">Ten</div>
                    </div>
                    <div className="row">
                        <div className="one-third column">1/3</div>
                        <div className="two-thirds column">2/3</div>
                    </div>
                    <div className="row">
                        <div className="one-half column">1/2</div>
                        <div className="one-half column">1/2</div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
