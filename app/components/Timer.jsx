var React = require('react');
var Clock = require('Clock');
var controls = require('controls');

var Timer = React.createClass({
    getInitialState: function () {
        return {
            count: 0,
            timerStatus: 'stopped'
        }
    },
    handleStatusCHange: function (newTimerStatus) {
        console.log(newTimerStatus);
    },
    render: function() {
        var {count, timerStatus} = this.state;
        return (
            <div>
                <h1 className="page-title"> Timer App </h1>
                <Clock totalSeconds={count}/> 
                <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/> 
            </div>
        )
    }
});

module.exports = Timer;