import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 50px 0px 50px 0px;
  width: fit-content;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 5px;
`;

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbackClick = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, value) => {
      return total + value;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, bad, neutral } = this.state;
    const total = this.countTotalFeedback();

    return (
      <Wrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'bad', 'neutral']}
            onLeaveFeedback={this.handleFeedbackClick}
          />
        </Section>

        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Wrapper>
    );
  }
}
