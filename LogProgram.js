// Created By: patrick Gemmell
// Created On: April 2021
// This program tells the user how many logs of a certain
//   length a truck can carry.

// Defining require and process
/* eslint no-undef: "error"*/
/* global require, process*/
// function saveInput(lengthOfLogsInput) {
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Input
rl.question('Enter the length of the log (in meters): ',
    function(lengthOfLogs) {
    // Process
      const numberOfLogs = 1100 / (lengthOfLogs * 20);

      // Output
      console.log('The truck can carry', numberOfLogs, 'logs.');
      rl.close();
    });
