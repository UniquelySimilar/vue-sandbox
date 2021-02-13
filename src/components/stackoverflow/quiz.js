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
          nextQuestionId: 6
        },
        {
          id: 2,
          text: "No",
          nextQuestionId: 7
        },
      ]
    },
    {
      id: 4,
      text: 'Question 4',
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
    },
    {
      id: 5,
      text: 'Question 5',
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
    },
    {
      id: 6,
      text: 'Question 6',
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
    },
    {
      id: 7,
      text: 'Question 7',
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