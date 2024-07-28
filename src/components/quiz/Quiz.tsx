import React, { useState } from 'react';
import ihramData from 'src/mocks/ihram.json';
import tawafData from 'src/mocks/tawaf.json';
import saiData from 'src/mocks/sai.json';
import { Button } from '@chakra-ui/react';
import Link from 'next/link'

const root: React.CSSProperties = {
  background: '#e1e1e1',
  height: '100vh',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const quizCard: React.CSSProperties = {
  background: 'white',
  height: '90vh',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '90%',
  maxWidth: '600px',
  borderRadius: '8px',
  gap: '30px',
  justifyContent: 'center',
};

const button: React.CSSProperties = {
  // border: '2px solid #ffb533',
  padding: '5px 35px',
  // borderRadius: '8px',
  cursor: 'pointer'
};

const getStageData = (stage: string) => {
  switch (stage) {
    case 'Ихрам':
      return ihramData;
    case 'Тауаф':
      return tawafData;
    case 'Саи':
      return saiData;
    default:
      return null;
  }
};

interface QuizProps {
  stage: string;
}

interface Question {
  id: number;
  question: string;
  options: { id: number; value: string }[];
  correctAnswer: { id: number };
}

export const Quiz: React.FC<QuizProps> = ({ stage }) => {
  // const stageData = getStageData(stage);
  const stageData = getStageData('Ихрам');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);
  const [currentAnswer, setCurrentAnswer] = useState<number | null>(null);

  if (!stageData) {
    return <div style={root}>Stage not found</div>;
  }

  const handleNextQuestion = () => {
    if (currentAnswer !== null) {
      const updatedAnswers = [...selectedAnswers];
      updatedAnswers[currentQuestionIndex] = currentAnswer;
      setSelectedAnswers(updatedAnswers);
      setCurrentAnswer(null);

      if (currentQuestionIndex < stageData.questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setIsQuizCompleted(true);
      }
    } else {
      alert('Please select an answer before proceeding.');
    }
  };

  const handleAnswerSelect = (optionId: number) => {
    setCurrentAnswer(optionId);
  };

  const calculateResult = () => {
    let correctAnswersCount = 0;
    stageData.questions.forEach((question: Question, index: number) => {
      if (question.correctAnswer.id === selectedAnswers[index]) {
        correctAnswersCount++;
      }
    });
    return correctAnswersCount;
  };

  if (isQuizCompleted) {
    const score = calculateResult();
    return (
      <div style={root}>
        <div style={quizCard}>
          <h2 style={{ fontSize: 24 }}>Your result: {score} of {stageData.questions.length}</h2>
          <Button colorScheme='blue' size={'lg'} style={{fontSize: 16}} onClick={() => {}}><Link href="/umra">Back</Link></Button>
        </div>
      </div>
    );
  }

  console.log(stageData);


  const currentQuestion = stageData.questions[currentQuestionIndex];

  return (
    <div style={root}>
      <div style={quizCard}>
        <h1 style={{ fontSize: 30 }}> {currentQuestion.id} of {stageData.questions.length}</h1>
        <h3 style={{ textAlign: 'center', fontSize: 22, fontWeight: 600 }}>{currentQuestion.question}</h3>
        <ul style={{ display: 'flex', flexDirection: 'column', width: '100%', padding: '0 0 0 10px' }}>
          {currentQuestion.options.map((option) => (
            <li key={option.id} style={{ listStyleType: 'none', marginBottom: '10px', fontSize: 18 }}>
              <label>
                <input
                  type="radio"
                  name={`question-${currentQuestion.id}`}
                  value={option.id}
                  checked={currentAnswer === option.id}
                  onChange={() => handleAnswerSelect(option.id)}
                  style={{ marginRight: '10px' }}
                />
                {option.value}
              </label>
            </li>
          ))}
        </ul>
        <Button colorScheme='blue' size={'lg'} style={{fontSize: 16}} onClick={handleNextQuestion}>
          {currentQuestionIndex < stageData.questions.length - 1 ? 'Next' : 'Finish'}
        </Button>
      </div>
    </div>
  );
};
