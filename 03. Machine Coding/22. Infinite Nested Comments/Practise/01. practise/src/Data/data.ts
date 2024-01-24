const jsonData = {
  id: 1,
  text: "Hey, how are you bro?",
  replies: [
    {
      id: 2,
      text: "I am good",
      replies: [
        {
          id: 3,
          text: "Lets go for a party",
          replies: [],
        },
        {
          id: 4,
          text: "Lets watch a movie",
          replies: [
            {
              id: 5,
              text: "yes sure!",
              replies: [],
            },
          ],
        },
      ],
    },
  ],
};

export default jsonData;
