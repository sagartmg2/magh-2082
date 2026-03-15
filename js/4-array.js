let students = [
  {
    name: "Ramesh",
    score: {
      firstTerm: {
        gpa: 2,
      },
      secondTerm: {
        gpa: 2,
      },
    },
    scores: [
      { exam: "first-term", gpa: 2 },
      { exam: "second-term", gpa: 4 },
      //    in case of many exams, array is better than object
    ],
  },
  {
    name: "Rita",
    scores: [
      { exam: "first-term", gpa: 1.5 },
      { exam: "second-term", gpa: 4 },
    ],
  },
  {
    name: "Kiran",
    scores: [
      { exam: "first-term", gpa: 4 },
      { exam: "second-term", gpa: 2.9 },
    ],
  },
];
