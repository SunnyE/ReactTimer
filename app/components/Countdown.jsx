var React = require('react');
// imports the clock component so it can be rendered into this component
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
    getInitialState: function () {
        return {
            count: 0,
            countdownStatus: 'stopped'
        };
    },
    componentDidUpdate: function (prevProps, prevState) {
        if(this.state.countdownStatus !== prevState.countdownStatus) {
            switch(this.state.countdownStatus) {
                case 'started':
                this.startTimer(); 
                break;
            }
        }
    },
    startTimer: function() {
        this.timer = setInterval(() => {   
            var newCount = this.state.count - 1; 
            this.setState({
            //      ternary operator used here to set the value of count to either newCount if the number in new count is >= 0 if it isnt then 0 is used.
            count: newCount >= 0 ? newCount : 0 
            })
        },  1000); 

    }, 
    handleSetCountdown: function(seconds) {
        this.setState({
            count: seconds, 
            countdownStatus: 'started'
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

