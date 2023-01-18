import questionCategories from '../utils/questionCategories.json';

function StartQuiz({ formData, apiError, handleChange, handleSubmit }) {
  const categoryOptions = questionCategories.map((category) => {
    return (
      <option key={category.id} value={category.id}>
        {category.name}
      </option>
    );
  });

  return (
    <div className="start_page">
      <h1 className="logo">Quiz</h1>
      {apiError.show && <p className="api-error">{apiError.message}</p>}

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Number of questions :</label>
          <div className="counter-container">
            <button
              type="button"
              className="btn-small"
              disabled={formData.numOfQuestions <= 5}
              onClick={() =>
                handleChange({
                  target: {
                    name: 'numOfQuestions',
                    value: formData.numOfQuestions - 1,
                  },
                })
              }
            >
              -
            </button>
            <span className="counter-value">{formData.numOfQuestions}</span>
            <button
              type="button"
              className="btn-small"
              disabled={formData.numOfQuestions >= 15}
              onClick={() =>
                handleChange({
                  target: {
                    name: 'numOfQuestions',
                    value: formData.numOfQuestions + 1,
                  },
                })
              }
            >
              +
            </button>
          </div>
        </div>

        <hr />

        <div className="form-field">
          <label htmlFor="category">Category :</label>
          <select
            name="category"
            id="category"
            value={formData.category}
            onChange={(e) => handleChange(e)}
          >
            <option value="">Any Category</option>
            {categoryOptions}
          </select>
        </div>

        <hr />

        <div className="form-field">
          <label htmlFor="difficulty">Difficulty :</label>
          <select
            name="difficulty"
            id="difficulty"
            value={formData.difficulty}
            onChange={(e) => handleChange(e)}
          >
            <option value="">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <hr />

        <div className="form-field">
          <label htmlFor="type">Type :</label>
          <select
            name="type"
            id="type"
            value={formData.type}
            onChange={(e) => handleChange(e)}
          >
            <option value="">Any Type</option>
            <option value="multiple">Multiple Choice</option>
            <option value="boolean">True / False</option>
          </select>
        </div>

        <button className="btn-start">Start quiz</button>
      </form>
    </div>
  );
}

export default StartQuiz;
