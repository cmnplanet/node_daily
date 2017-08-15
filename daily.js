
const moment = require('moment');
const chalk = require('chalk');

let current = moment().format('MMMM Do YYYY, h:mm:ss a');
  console.log("It is " + chalk.blue(current));

let daily = moment().format('DDDo');
    console.log("It is the " + chalk.hex('#febebe')(daily) + " day of the year.");

let sloppy = moment().get('second');
    console.log("It is " + chalk.green(sloppy) + " seconds into the day.");

//asSeconds ??? + hours versus current time ????

let sunlight = moment().isDST();
    console.log("It " + chalk.yellow(sunlight) + " during Daylight Savings Time.");

    // function dayTime(){
    //   let sunlight = moment().isDST();
    //   if (sunlight === true){
    //     return "It " + chalk.yellow("is") + " during Daylight Savings Time.";
    //   } else {
    //     return "It " + chalk.yellow("is not") + " during Daylight Savings Time.";
    //   }
    // }
    //
    // console.log(dayTime);

let jump = moment().isLeapYear();
    console.log("It " + chalk.red(jump) + " a leap year.");

// dow = dddd . doty = DDDo
// moment().isLeapYear();
// // dlst moment().isDST();
// // moment().isLeapYear(); ex. moment([2017]).isLeapYear();
//
//
// // chalk.blue, chalk.pink, clalk.green, clalk.yellow, chalk.red
//
// console.log(`It is chalk.blue ${}.`);
// console.log(`It is the chalk.pink ${} day of the year.`);
// console.log(`It is chalk.green ${} seconds into the year.`);
// console.log(`It chalk.yellow ${} during Daylight Savings Time.`);
// console.log(`It chalk.red ${}.`);
