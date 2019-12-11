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
          question: 'What team originally drafted John Elway?',
          answer_a:
              'Baltimore Colts',
          answer_b: 'Chicago Bears',
          answer_c:
              'Denver Broncos',
          answer_d: 'Boston Patriots',
          correct_answer: 'a',
        },
        // {
        //   id: 3,
        //   question: 'What team originally drafted John Elway?',
        //   answer_a:
        //       'Baltimore Colts',
        //   answer_b: 'Chicago Bears',
        //   answer_c:
        //       'Denver Broncos',
        //   answer_d: 'Boston Patriots',
        //   correct_answer: 'a',
        // },
        // {
        //   id: 4,
        //   question: 'What team originally drafted John Elway?',
        //   answer_a:
        //       'Baltimore Colts',
        //   answer_b: 'Chicago Bears',
        //   answer_c:
        //       'Denver Broncos',
        //   answer_d: 'Boston Patriots',
        //   correct_answer: 'a',
        // },
        // {
        //   id: 5,
        //   question: 'What team originally drafted John Elway?',
        //   answer_a:
        //       'Baltimore Colts',
        //   answer_b: 'Chicago Bears',
        //   answer_c:
        //       'Denver Broncos',
        //   answer_d: 'Boston Patriots',
        //   correct_answer: 'a',
        // },
        // {
        //   id: 6,
        //   question: 'What team originally drafted John Elway?',
        //   answer_a:
        //       'Baltimore Colts',
        //   answer_b: 'Chicago Bears',
        //   answer_c:
        //       'Denver Broncos',
        //   answer_d: 'Boston Patriots',
        //   correct_answer: 'a',
        // },
        // {
        //   id: 7,
        //   question: 'What team originally drafted John Elway?',
        //   answer_a:
        //       'Baltimore Colts',
        //   answer_b: 'Chicago Bears',
        //   answer_c:
        //       'Denver Broncos',
        //   answer_d: 'Boston Patriots',
        //   correct_answer: 'a',
        // },
        // {
        //   id: 8,
        //   question: 'What team originally drafted John Elway?',
        //   answer_a:
        //       'Baltimore Colts',
        //   answer_b: 'Chicago Bears',
        //   answer_c:
        //       'Denver Broncos',
        //   answer_d: 'Boston Patriots',
        //   correct_answer: 'a',
        // },
        // {
        //   id: 9,
        //   question: 'What team originally drafted John Elway?',
        //   answer_a:
        //       'Baltimore Colts',
        //   answer_b: 'Chicago Bears',
        //   answer_c:
        //       'Denver Broncos',
        //   answer_d: 'Boston Patriots',
        //   correct_answer: 'a',
        // },
        // {
        //   id: 10,
        //   question: 'What team originally drafted John Elway?',
        //   answer_a:
        //       'Baltimore Colts',
        //   answer_b: 'Chicago Bears',
        //   answer_c:
        //       'Denver Broncos',
        //   answer_d: 'Boston Patriots',
        //   correct_answer: 'a',
        // },
        // {
        //   id: 11,
        //   question: 'What team originally drafted John Elway?',
        //   answer_a:
        //       'Baltimore Colts',
        //   answer_b: 'Chicago Bears',
        //   answer_c:
        //       'Denver Broncos',
        //   answer_d: 'Boston Patriots',
        //   correct_answer: 'a',
        // },
        // {
        //   id: 12,
        //   question: 'What team originally drafted John Elway?',
        //   answer_a:
        //       'Baltimore Colts',
        //   answer_b: 'Chicago Bears',
        //   answer_c:
        //       'Denver Broncos',
        //   answer_d: 'Boston Patriots',
        //   correct_answer: 'a',
        // },
        // {
        //   id: 13,
        //   question: 'What team originally drafted John Elway?',
        //   answer_a:
        //       'Baltimore Colts',
        //   answer_b: 'Chicago Bears',
        //   answer_c:
        //       'Denver Broncos',
        //   answer_d: 'Boston Patriots',
        //   correct_answer: 'a',
        // },
        // {
        //   id: 14,
        //   question: 'What team originally drafted John Elway?',
        //   answer_a:
        //       'Baltimore Colts',
        //   answer_b: 'Chicago Bears',
        //   answer_c:
        //       'Denver Broncos',
        //   answer_d: 'Boston Patriots',
        //   correct_answer: 'a',
        // },
        // {
        //   id: 15,
        //   question: 'What team originally drafted John Elway?',
        //   answer_a:
        //       'Baltimore Colts',
        //   answer_b: 'Chicago Bears',
        //   answer_c:
        //       'Denver Broncos',
        //   answer_d: 'Boston Patriots',
        //   correct_answer: 'a',
        // },
        // {
        //   id: 16,
        //   question: 'What team originally drafted John Elway?',
        //   answer_a:
        //       'Baltimore Colts',
        //   answer_b: 'Chicago Bears',
        //   answer_c:
        //       'Denver Broncos',
        //   answer_d: 'Boston Patriots',
        //   correct_answer: 'a',
        // },
        // {
        //   id: 17,
        //   question: 'What team originally drafted John Elway?',
        //   answer_a:
        //       'Baltimore Colts',
        //   answer_b: 'Chicago Bears',
        //   answer_c:
        //       'Denver Broncos',
        //   answer_d: 'Boston Patriots',
        //   correct_answer: 'a',
        // },
        // {
        //   id: 18,
        //   question: 'What team originally drafted John Elway?',
        //   answer_a:
        //       'Baltimore Colts',
        //   answer_b: 'Chicago Bears',
        //   answer_c:
        //       'Denver Broncos',
        //   answer_d: 'Boston Patriots',
        //   correct_answer: 'a',
        // },
        // {
        //   id: 19,
        //   question: 'What team originally drafted John Elway?',
        //   answer_a:
        //       'Baltimore Colts',
        //   answer_b: 'Chicago Bears',
        //   answer_c:
        //       'Denver Broncos',
        //   answer_d: 'Boston Patriots',
        //   correct_answer: 'a',
        // },
        // {
        //   id: 20,
        //   question: 'What team originally drafted John Elway?',
        //   answer_a:
        //       'Baltimore Colts',
        //   answer_b: 'Chicago Bears',
        //   answer_c:
        //       'Denver Broncos',
        //   answer_d: 'Boston Patriots',
        //   correct_answer: 'a',
        // },
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
