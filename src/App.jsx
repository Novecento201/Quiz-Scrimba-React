import { useState } from 'react';
import Loading from './components/Loading';
import StartQuiz from './pages/StartQuiz';
import PageQuiz from './pages/PageQuiz';

function App() {
  const [isLoading, setLoading] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [formData, setFormData] = useState({
    numOfQuestions: 5,
    category: '',
    difficulty: '',
    type: '',
  });

  const [apiError, setApiError] = useState({
    show: false,
    message: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setApiError({ show: false, message: '' });
    setQuizStarted(true);
  }

  function handleApiError(error) {
    setQuizStarted(false);
    setApiError({ show: true, message: error.message });
  }

  return (
    <>
      {isLoading && <Loading />}
      {!quizStarted ? (
        <StartQuiz
          formData={formData}
          apiError={apiError}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <PageQuiz
          formData={formData}
          handleApiError={handleApiError}
          setLoading={setLoading}
        />
      )}
    </>
  );
}

export default App;
