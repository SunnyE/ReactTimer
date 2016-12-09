var React = require('react');

var Controls = React.createClass({
    propTypes: {
        countdownStatus : React.PropTypes.string.isRequired
    },

    render: function() {
        var {countdownStatus} =this.props;
        var renderStartStopButton = () => {
            if (countdownStatus === 'started') {
                return <button className='button secondary'> Pause </button> 
            } else if (countdownStatus === 'paused'){
                return <button className='button primary'> Pause </button> 
            }
        }

        return (
            <button className="button alert hollow"> Clear </button>

        )
    }
});

module.exports = Controls;