"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable("users", { id: Sequelize.INTEGER });
    */
    return queryInterface.bulkInsert("Questions", [{
          content: "What is your current employment situation?",
          choices: JSON.stringify([
              {label: "Part time", value:0},
              {label: "Full time", value:1},
              {label: "Self-employed", value:2},
              {label: "Student", value:3},
              {label: "Other", value:4}
          ]),
          type: "CHOICE"
      },
      {
          content: "What age range do you fall in?",
          type: "CHOICE",
          choices: JSON.stringify([
              {label: "< 18", value:0},
              {label: "18 - 30", value:1},
              {label: "30 - 40", value:2},
              {label: "40+", value:3},
          ])
      },
      {
          content: "What is your level of cryptocurrency understanding?",
          type: "CHOICE",
          choices: JSON.stringify([
              {label: "Basic", value:0},
              {label: "Intermediate", value:1},
              {label: "Expert", value:2}
          ])
      },
      {
          content: "How many years of cryptocurrency investment experience do you have?",
          type: "CHOICE",
          choices: JSON.stringify([
              {label: "Less than 1", value:0},
              {label: "1 - 2", value:1},
              {label: "2+", value:2}
          ])
      },
      {
          content: "Do you have an understanding of the risks associated with cryptocurrency?",
          type: "INPUT_TEXT"
      },
      {
          content: "Do you have an understanding of the risks associated with cryptocurrency?",
          type: "CHOICE",
          choices: JSON.stringify([
              {label: "Low risk", value:0},
              {label: "Medium risk", value:1},
              {label: "High risk", value:2}
          ])
      },
      {
          content: "Do you have an understanding of the risks associated with cryptocurrency?",
          type: "INPUT_TEXT"
      }]);   
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable("users");
    */
    return queryInterface.bulkDelete("Questions", null, {});
  }
};
