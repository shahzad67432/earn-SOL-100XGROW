"use client"
import React, { useState, useEffect } from "react";
import axios from 'axios'; // Import axios for API requests
import { useSession } from "next-auth/react";
import { getUser } from "@/actions/user";
import { submitTest } from "@/actions/submitTest";

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

interface TestProps {
  id: number;
  title: string;
  questions: Question[];
  duration: number; // in minutes
  onSubmit: (answers: number[]) => void;
}

interface SubmissionResponse {
  submission: {
    id: number;
    userId: number;
    testId: number;
    answers: number[];
    score: number; // Ensure this matches your API response
    createdAt: Date;
  };
}

interface ErrorResponse {
  error: string;
}

// You may also create a union type for your response
type SubmitTestResponse = SubmissionResponse | ErrorResponse;


const Test: React.FC<TestProps> = ({id, title, questions, duration, onSubmit }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(questions.length).fill(-1));
  const [timeLeft, setTimeLeft] = useState(duration * 60);
  const [submitting, setSubmitting] = useState(false);
  const [score, setScore] = useState<number | null>(null); // New state for score
  const {data: session} = useSession()

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    if (timeLeft === 0) {
      clearInterval(timer);
      handleSubmit(); // Auto-submit when time is up
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswer = (questionIndex: number, answerIndex: number) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = answerIndex;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      if(!session || !session.user || !session.user.email){
        console.log("user is not logged in")
        return "user not logged in";
      }
      const user = await getUser(session?.user?.email);
      if (!user) {
        console.error("User not found");
        return;
      }
      const response = await submitTest({ userId: user?.id, testId: id, answers });
      if (response && response.score !== undefined) {
        setScore(response.score);
      }
    } catch (error) {
      console.error("Failed to submit the test:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {score !== null ? (
        <div className="w-full h-full flex justify-center items-center">
          <div className="text-center w-[300px] h-[300px] rounded-lg border flex items-center justify-between flex-col shadow-md">
            <div>
              <h2 className="text-2xl pt-20">Test Completed!</h2>
              <p>Your Score: {score}/{questions.length}</p>
            </div>
            <div>
              <button className="bg-green-950 text-white rounded-lg p-2 m-12">
                <a href={`/leaderboard`}>View Results</a>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <div className="flex justify-between mb-4">
            <span>Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? '0' : ''}{timeLeft % 60}</span>
            <span>Question {currentQuestionIndex + 1} / {questions.length}</span>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{questions[currentQuestionIndex].question}</h2>
            <div className="grid grid-cols-1 gap-2">
              {questions[currentQuestionIndex].options.map((option, idx) => (
                <button
                  key={idx}
                  className={`py-2 px-4 border rounded-md ${answers[currentQuestionIndex] === idx ? 'bg-indigo-600 text-white' : 'bg-gray-100 hover:bg-indigo-100'}`}
                  onClick={() => handleAnswer(currentQuestionIndex, idx)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div className="flex justify-between mt-6">
            {currentQuestionIndex > 0 && (
              <button className="py-2 px-4 bg-gray-600 text-white rounded-md" onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}>
                Previous
              </button>
            )}
            {currentQuestionIndex < questions.length - 1 ? (
              <button className="py-2 px-4 bg-indigo-600 text-white rounded-md" onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}>
                Next
              </button>
            ) : (
              <button className="py-2 px-4 bg-green-600 text-white rounded-md" onClick={handleSubmit} disabled={submitting}>
                {submitting ? 'Submitting...' : 'Submit'}
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Test;
