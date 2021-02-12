const quiz = {
  title: "Asbestos Quiz",
  questions: [
    {
      id: 1,
      text: 'Do you need help with an Asbestos Survey?',
      answers: [
        {
          id: 1,
          text: "Yes",
          nextQuestionId: 2
        },
        {
          id: 2,
          text: "No",
          nextQuestionId: 3
        },
      ]
    },
    {
      id: 2,
      text: 'Was your property constructed pre 2000',
      answers: [
        {
          id: 1,
          text: "Yes",
          nextQuestionId: 4
        },
        {
          id: 2,
          text: "No",
          nextQuestionId: 5
        },
      ]
    },
    {
      id: 3,
      text: 'Do you need an Asbestos Management plan?',
      answers: [
        {
          id: 1,
          text: "Yes",
          nextQuestionId: 0
        },
        {
          id: 2,
          text: "No",
          nextQuestionId: 0
        },
      ]
    }
  ]
};

export default quiz;