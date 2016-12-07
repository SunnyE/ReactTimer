var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
    it('should exist', () => {
        expect(Countdown.toExist());
    });

    describe('handleSetCountdown', () => {
        it('should set state to started and countdown', () => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe('started');

            setTimeout(() => {
                // this happens after one second to see if the countdown drops to 9 from 10
                expect(countdown.state.count).toBe(9);
            }, 1001)
        });

        it('should never set count less than zero', () => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(1);

            setTimeout(() => {
                // this happens after one second to see if the countdown drops to 9 from 10
                expect(countdown.state.count).toBe(0);
            }, 3001)
        });
    })

})