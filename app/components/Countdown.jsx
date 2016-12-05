var React = require('react');
// imports the clock component so it can be rendered into this component
var Clock = require('Clock');
var Countdown = React.createClass({
    render: function() {
        return (
            <div>
                <Clock totalSeconds = {129}/> 
            </div>
        )
    }
});

module.exports = Countdown;

