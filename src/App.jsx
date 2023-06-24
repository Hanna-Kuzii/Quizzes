import "./App.css";
import "./reset.css";
import { useEffect, useState } from "react";
import { getTest } from "./api/api";
import { Home } from "./components/Home/Home";
import { Route, Routes, Navigate } from "react-router-dom";
import { Play } from "./components/Play/Play";
import { Finish } from "./components/Finish/Finish";
import { Statistic } from "./components/Statistic/Statistic";

function App() {
  const [test, setTest] = useState([]);
  const [tests, setTests] = useState([]);
  const [randomQuiz, setRandomQuiz] = useState([]);
  const [choosedQiuz, setChoosedQuiz] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [inCorrectAnswers, setInCorrectAnswers] = useState(0);
  const [playingQiuz, setPlayingQuiz] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(null);
  const [statQuizzes, countStatQuizzes] = useState(0);
  const [statQuestions, countStatQuestions] = useState(0);
  const [statTime, countStatTime] = useState(0);
  const [statCorrectAnswers, setStatCorrectAnswers] = useState(0);
  const [statInCorrectAnswers, setStatInCorrectAnswers] = useState(0);

  function getRandomNumber() {
    const min = 9;
    const max = 32;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getTests() {
    const promises = [];
    for (let i = 0; i < 10; i++) {
      const category = getRandomNumber();
      promises.push(
        getTest(`&category=${category}`).then((quiz) => quiz.results)
      );
    }
    Promise.all(promises).then((results) => {
      setTest(results);
      setTests([...tests, ...results]);
    });
  }

  useEffect(() => {
    const delayedGetTests = setTimeout(() => {
      getTests();
    }, 100);

    return () => clearTimeout(delayedGetTests);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const quiz = await getTest();
        setRandomQuiz(quiz.results);
      } catch (error) {
        console.error("Failed to fetch quiz:", error);
      }
    };

    fetchQuiz();
  }, []);

  function getPlayingQuiz() {
    if (choosedQiuz.length === 10) {
      setPlayingQuiz(choosedQiuz);
    } else {
      setPlayingQuiz(randomQuiz);
    }
  }
  useEffect(() => {
    getPlayingQuiz();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [choosedQiuz, randomQuiz]);

  useEffect(() => {
    if (startTime && endTime) {
      const elapsed = endTime - startTime;
      setElapsedTime(elapsed);
      countStatTime(statTime + elapsedTime);
    }
  }, [startTime, endTime, elapsedTime]);

  const startTest = () => {
    const currentTime = new Date().getTime();
    setStartTime(currentTime);
  };

  const endTest = () => {
    const currentTime = new Date().getTime();
    setEndTime(currentTime);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              tests={tests}
              setChoosedQiuz={setChoosedQuiz}
              startTest={startTest}
            />
          }
        />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route
          exact
          path="/play"
          element={
            <Play
              quiz={playingQiuz}
              setChoosedQiuz={setChoosedQuiz}
              correctAnswers={correctAnswers}
              setCorrectAnswers={setCorrectAnswers}
              inCorrectAnswers={inCorrectAnswers}
              setInCorrectAnswers={setInCorrectAnswers}
              statCorrectAnswers={statCorrectAnswers}
              setStatCorrectAnswers={setStatCorrectAnswers}
              statInCorrectAnswers={statInCorrectAnswers}
              setStatInCorrectAnswers={setStatInCorrectAnswers}
              statQuizzes={statQuizzes}
              countStatQuizzes={countStatQuizzes}
              statQuestions={statQuestions}
              countStatQuestions={countStatQuestions}
              endTest={endTest}
            />
          }
        />
        <Route
          exact
          path="/finish"
          element={
            <Finish
              correctAnswers={correctAnswers}
              inCorrectAnswers={inCorrectAnswers}
              setCorrectAnswers={setCorrectAnswers}
              setInCorrectAnswers={setInCorrectAnswers}
              elapsedTime={elapsedTime}
              statTime={statTime}
            />
          }
        />
        <Route
          path="/statistic"
          element={
            <Statistic
              statCorrectAnswers={statCorrectAnswers}
              statInCorrectAnswers={statInCorrectAnswers}
              statQuizzes={statQuizzes}
              statQuestions={statQuestions}
              statTime={statTime}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
