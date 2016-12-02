var React = require('react');

var Clock = React.createClass({
    formatSeconds : function(totalSeconds) {
        var seconds = totalSeconds % 60;
        var minutes = math.floor(totalSeconds / 60);

        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
    },
    render: function() {
        return (
            <div>
                
            </div>
        )
    }
});

module.exports = Clock;