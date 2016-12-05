var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock',() => {
    it('should exist', () => {
        expect(Clock).toExist();
    });

describe('render', () => {
    it('should render clock to output', () => {
        var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/> );
        // stores the root of the component in terms of the DOM
        var $el = $(ReactDOM.findDOMNode(clock));
        // searches the $el to find the class "clock-text and then pull the text value from it"
        var actualText = $el.find('.clock-text').text();

        expect(actualText).toBe('01:02')
    });
});

    describe('formatSeconds', () =>  {
        it('should format seconds', () => {
            var clock = TestUtils.renderIntoDocument(<Clock/>); 

            var seconds = 615; 
            // this variable holds what we expect to happen
            var exprected = "10:15";

            var actual =  clock.formatSeconds(seconds); 

            expect(actual).toBe(expected);
        });

        it('should format seconds when min/sec < 10', () => {
            var clock = TestUtils.renderIntoDocument(<Clock/>); 

            var seconds = 61; 
            // this variable holds what we expect to happen
            var exprected = "10:15";

            var actual =  clock.formatSeconds(seconds); 

            expect(actual).toBe(expected);
        });
    })
});

