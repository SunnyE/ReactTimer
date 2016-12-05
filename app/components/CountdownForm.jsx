var React = require('react');

var CountdownForm = React.createClass({
    onSubmit: function(e) {
        e.preventDefault();
        var stringSeconds = this.refs.seconds.value; 

        
    },
    render: function () {
        return (
            <div>
                <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
                    <input type="text" ref="seconds" placeholder="Enter time in second "/>
                    <button className="button expanded">Start</button>
                </form>
            </div>
        )
    }
});

module.exports = CountdownForm;