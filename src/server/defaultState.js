export const defaultState = {
  users: [
    {
      id: "UI",
      name: "Dev",
    },
    {
      id: "U2",
      name: "C. Eeyo",
    },
  ],
  groups: [
    {
      name: "To Do",
      id: "G1",
      owner: "U1",
    },
    {
      name: "Doing",
      id: "G2",
      owner: "U1",
    },
    {
      name: "Done",
      id: "G3",
      owner: "U1",
    },
  ],
  tasks: [
    {
      name: "Refractor Tests",
      id: "T1",
      group: "G1",
      owner: "U1",
      isComplete: false,
    },
    {
      name: "Meet with CTO",
      id: "T2",
      group: "G1",
      owner: "U1",
      isComplete: false,
    },
    {
      name: "Compile ES6",
      id: "T3",
      group: "G2",
      owner: "U1",
      isComplete: false,
    },
    {
      name: "Do tests",
      id: "T4",
      group: "G3",
      owner: "U1",
      isComplete: false,
    },
  ],
  comments: [
    {
      owner: "U1",
      id: "C1",
      task: "T1",
      content: "Great Work",
    },
  ],
};
