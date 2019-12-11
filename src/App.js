import React, {useReducer} from 'react';
import Progress from './components/Progress';
import Question from './components/Question';
import Answers from './components/Answers';
import QuizContext from './context/QuizContext';
import Footer from './components/Footer';

import {
    SET_ANSWERS,
    SET_CURRENT_QUESTION,
    SET_CURRENT_ANSWER,
    SET_ERROR,
    SET_SHOW_RESULTS,
    RESET_QUIZ,
} from './reducers/types.js';
import quizReducer from './reducers/QuizReducer';

import './App.css';

function App() {
    const questions = [
        {
            id: 1,
            question: 'What team originally drafted John Elway?',
            answer_a:
                'Baltimore Colts',
            answer_b: 'Chicago Bears',
            answer_c:
                'Denver Broncos',
            answer_d: 'Boston Patriots',
            correct_answer: 'a',
        },
        {
          id: 2,
          question: 'What year were the Denver Broncos founded?',
          answer_a:
              '1940',
          answer_b: '1950',
          answer_c:
              '1960',
          answer_d: '1970',
          correct_answer: 'c',
        },
        {
          id: 3,
          question: 'What was the Denver Broncos record in their first season?',
          answer_a:
              '3-10-1',
          answer_b: '3-11',
          answer_c:
              '4-9-1',
          answer_d: '7-7',
          correct_answer: 'c',
        },
        {
          id: 4,
          question: 'Who was the first Denver Bronco to rush for more than 20 touchdowns in a single season?',
          answer_a:
              'Clinton Portis',
          answer_b: 'Terrell Davis',
          answer_c:
              'Mike Anderson',
          answer_d: 'Floyd Little',
          correct_answer: 'b',
        },
        {
          id: 5,
          question: 'Which of the following distinctions can the Denver Broncos boast of?',
          answer_a:
              'First AFL Team to defeat an NFL Team',
          answer_b: 'First Africa-American Place-kicker',
          answer_c:
              'First Team to wear Vertical-Striped Socks',
          answer_d: 'All of them',
          correct_answer: 'd',
        },
        {
          id: 6,
          question: 'In what round of the 1995 NFL draft did the Denver Broncos take RB Terrell Davis?',
          answer_a:
              '1st Round',
          answer_b: '2nd Round',
          answer_c:
              '4th Round',
          answer_d: '6th Round',
          correct_answer: 'd',
        },
        {
          id: 7,
          question: 'Who was the first Denver Bronco to compile more than 15 sacks in a season?',
          answer_a:
              'Trevor Pryce',
          answer_b: 'Karl Mecklenburg',
          answer_c:
              'Simon Fletcher',
          answer_d: 'Lyle Alzado',
          correct_answer: 'c',
        },
        {
          id: 8,
          question: 'Which head coach led the Denver Broncos to their first playoff appearance?',
          answer_a:
              'Lou Saban',
          answer_b: 'Dan Reeves',
          answer_c:
              'Red Miller',
          answer_d: 'Mike Shanahan',
          correct_answer: 'c',
        },
        {
          id: 9,
          question: 'Who was the first Denver Broncos quarterback to finish a season (minimum of 200 passes) with a passer rating higher than 100?',
          answer_a:
              'John Elway',
          answer_b: 'Jake Plummer',
          answer_c:
              'Brian Griese',
          answer_d: 'Gus Frerotte',
          correct_answer: 'c',
        },
        {
          id: 10,
          question: 'Who did the Denver Broncos trade to the Washington Redskins in 2004 for Pro Bowl cornerback Champ Bailey?',
          answer_a:
              'Laveranues Coles',
          answer_b: 'Mike Anderson',
          answer_c:
              'Clinton Portis',
          answer_d: 'Rod Smith',
          correct_answer: 'c',
        },
        {
          id: 11,
          question: 'Who led the Denver Broncos in sacks in 1999?',
          answer_a:
              'Trevor Pryce',
          answer_b: 'Neil Smith',
          answer_c:
              'Al Wilson',
          answer_d: 'Alfred Williams',
          correct_answer: 'a',
        },
        {
          id: 12,
          question: 'Who is the Broncos’ all-time passing leader? ',
          answer_a:
              'Peyton Manning',
          answer_b: 'Jake Plummer',
          answer_c:
              'Frank Tripucka',
          answer_d: 'John Elway',
          correct_answer: 'd',
        },
        {
          id: 13,
          question: 'In what year did the Broncos win their first Super Bowl?',
          answer_a:
              '1998',
          answer_b: '1995',
          answer_c:
              '1987',
          answer_d: '1988',
          correct_answer: 'a',
        },
        {
          id: 14,
          question: 'In what year did Pat Bowlen buy the Broncos?',
          answer_a:
              '1984',
          answer_b: '1983',
          answer_c:
              '1989',
          answer_d: '1978',
          correct_answer: 'a',
        },
        {
          id: 15,
          question: 'Who is a Super Bowl 50 Most Valuable Player?',
          answer_a:
              'Peyton Manning',
          answer_b: 'Von Miller',
          answer_c:
              'DeMarcus Ware',
          answer_d: 'Chris Harris Jr.',
          correct_answer: 'b',
        },
    ];

    const initialState = {
        questions,
        currentQuestion: 0,
        currentAnswer: '',
        answers: [],
        showResults: false,
        error: '',
    };

    const [state, dispatch] = useReducer(quizReducer, initialState);
    const {currentQuestion, currentAnswer, answers, showResults, error} = state;

    const question = questions[currentQuestion];

    const renderError = () => {
        if (!error) {
            return;
        }

        return <div className="error">{error}</div>;
    };

    const renderResultMark = (question, answer) => {
        if (question.correct_answer === answer.answer) {
            return <span className="correct">Correct</span>;
        }

        return <span className="failed">Failed</span>;
    };

    const renderResultsData = () => {
        return answers.map(answer => {
            const question = questions.find(
                question => question.id === answer.questionId
            );

            return (
                <div key={question.id}>
                    {question.question} - {renderResultMark(question, answer)}
                </div>
            );
        });
    };

    const restart = () => {
        dispatch({type: RESET_QUIZ});
    };

    const next = () => {
        const answer = {questionId: question.id, answer: currentAnswer};

        if (!currentAnswer) {
            dispatch({type: SET_ERROR, error: 'Please select an option'});
            return;
        }

        answers.push(answer);
        dispatch({type: SET_ANSWERS, answers});
        dispatch({type: SET_CURRENT_ANSWER, currentAnswer: ''});

        if (currentQuestion + 1 < questions.length) {
            dispatch({
                type: SET_CURRENT_QUESTION,
                currentQuestion: currentQuestion + 1,
            });
            return;
        }

        dispatch({type: SET_SHOW_RESULTS, showResults: true});
    };

    if (showResults) {
        return (
            <div className="container results">
                <h2>Results</h2>
                <ul>{renderResultsData()}</ul>
                <button className="btn btn-primary" onClick={restart}>
                    Restart
                </button>
            </div>
        );
    } else {
        return (
            <QuizContext.Provider value={{state, dispatch}}>
              <div className="logotext">Broncos Country ASL Trivia</div>
              <div className="logo"><img src={require('./assets/broncos.png')} /></div>
              <div className="logo2"><img src={require('./assets/colorrush.png')} /></div>
                <div className="container">
                    <Progress
                        total={questions.length}
                        current={currentQuestion + 1}
                    />
                    <Question />
                    {renderError()}
                    <Answers />
                    <button className="btn btn-primary" onClick={next}>
                        Confirm and Continue
                    </button>
                </div>
                <Footer></Footer>
            </QuizContext.Provider>
            
        );
    }
}

export default App;
