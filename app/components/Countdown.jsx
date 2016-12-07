var React = require('react');
// imports the clock component so it can be rendered into this component
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
    getInitialState: function () {
        return {count: 0};
    },
    handleSetCountdown: function(seconds) {
        this.setState({
            count: seconds
        })
    },
    render: function() {
        var {count} = this.state;
        return (
            <div>
                <Clock totalSeconds = {count}/> 
                <CountdownForm onSetCountdown={this.handleSetCountdown}/> 
            </div>
        )
    }
});

module.exports = Countdown;

