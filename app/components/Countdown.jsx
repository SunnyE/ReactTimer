var React = require('react');
// imports the clock component so it can be rendered into this component
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

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
                case 'stopped':
                this.setState({count:0});
                case 'paused':
                clearInterval(this.timer);
                this.timer= undefined;
                break; 
            }
        }
    },
    // this gets fired right after an update to the application either to its props or to the state. it takes the next props and next state this is for componentWillUpdate
    
    componentWillUnmount: function() {
        clearInterval(this.timer);
        this.timer = undefined; 
    },
    startTimer: function() {
        this.timer = setInterval(() => {   
            var newCount = this.state.count - 1; 
            this.setState({
            //      ternary operator used here to set the value of count to either newCount if the number in new count is >= 0 if it isnt then 0 is used.
            count: newCount >= 0 ? newCount : 0 
            });

            if(newCount === 0) {
                this.setState({countdownStatus: 'stopped'});
            }

        },  1000); 

    }, 
    handleSetCountdown: function(seconds) {
        this.setState({
            count: seconds, 
            countdownStatus: 'started'
        })
    },
    handleStatusChange: function(newStatus) {
        this.setState({countdownStatus: newStatus});
    },
    render: function() {
        var {count, countdownStatus} = this.state;
        var renderControlArea = () => {
            if(countdownStatus !== 'stopped') {
                return <Controls coundownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/> 
            } else {
                return <CountdownForm onSetCountdown={this.handleSetCountdown}/> 
            }
        }
        return (
            <div>
                <h1 className="page-title"> COuntdown App </h1>
                <Clock totalSeconds = {count}/> 
                {renderControlArea()}

            </div>
        )
    }
});

module.exports = Countdown;

