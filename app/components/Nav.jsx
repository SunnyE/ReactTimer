var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({


    render: function() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">
                            React Timer App
                        </li>
                        <li>
                            <IndexLink to="/" activeClassName="active-link" activeStyle={{fontWeight:'bold'}}> Timer </IndexLink>
                        </li>
                        <li>
                            <Link to="/Countdown" activeClassName="active-Link" activeStyle={{fontWeight:'bold'}}> Countdown </Link> 
                        </li>
                        
                    </ul>
                </div>  
                <div className="top-bar-right menu-text">

                     Created by <a href="https://github.com/SunnyE" target="_blank"> Ethan Favia </a>
                </div>
            </div>
        );
    }
});


module.exports = Nav; 