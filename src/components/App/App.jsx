import { useState } from "react";
import {Wrapper} from './App.styled';
import {FeedbackOptions} from "components/FeedbackOptions";
import { Statistics } from "components/Statistics";
import { Section } from "components/Section";

export const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const options = ["good", "neutral", "bad"];

    const handleAddFeedback = (feedback) => {
        switch(feedback) {
            case 'good':
                setGood(prevState => prevState + 1);
                console.log("good", good);
                break;
            case 'neutral':
                setNeutral(prevState => prevState + 1);
                console.log("neutral", neutral);
            break;            
            case 'bad':
                setBad(prevState => prevState + 1);
                console.log("Bad", bad);
                break;
            default:
                return;
        }
    };

    const countTotalFeedback = () => {
        return good + neutral + bad;
    }

    const countPositiveFeedbackPercentage = () => {
        return Number((((good / countTotalFeedback())) * 100).toFixed(0));
    }
    
    return (
        <Wrapper>
            <Section title="Please leave feedback">
                <FeedbackOptions 
                    options={options}
                    onLeaveFeedback={handleAddFeedback}
                />
            </Section>
            <Section  title="Statistics">
                <Statistics 
                    good={good}
                    neutral={neutral}
                    bad={bad} 
                    total={countTotalFeedback()} 
                    positivePercentage={countPositiveFeedbackPercentage()}
                />  
            </Section>                                  
        </Wrapper> 
    );        
}