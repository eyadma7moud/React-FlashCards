import { useState } from "react";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
  {
    id: 5561,
    question: "Which hook is used to perform side effects in React?",
    answer: "useEffect hook",
  },
  {
    id: 7782,
    question: "How do you create a list of elements in React?",
    answer: "Using map() function",
  },
  {
    id: 9921,
    question: "What is the purpose of keys in a list of React elements?",
    answer: "To help React identify which items have changed",
  },
  {
    id: 1134,
    question:
      "How do you prevent a child component from re-rendering unnecessarily?",
    answer: "React.memo",
  },
  {
    id: 8475,
    question: "Which hook lets you access the context in React?",
    answer: "useContext hook",
  },
  {
    id: 6623,
    question:
      "What is the difference between controlled and uncontrolled components?",
    answer:
      "Controlled components have state managed by React, uncontrolled manage their own state",
  },
];

export default function App() {
  return (
    <div className="app">
      <FlashCards />
    </div>
  );
}

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          className={`card ${question.id === selectedId ? "selected" : ""}`}
          key={question.id}
          onClick={() =>
            setSelectedId(selectedId !== question.id ? question.id : null)
          }
        >
          <div className="card-inner">
            <div className="card-front">
              <p>{question.question}</p>
            </div>

            <div className="card-back">
              <p>{question.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
