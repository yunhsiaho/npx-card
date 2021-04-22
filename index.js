#!/usr/bin/env node
/* hsia/npxcard
 *
 * /index.js - Main Entry point
 */
const chalk = require("chalk");
const boxen = require("boxen");
const figlet = require("figlet");

// const link = terminalLink('My Website', 'https://sindresorhus.com');
// console.log(link);

// Text + chalk definitions
const data = {
    labelGitHub: chalk.yellow.bold("     GitHub:"),
    labelLinkedIn: chalk.yellow.bold("  LinkedIn:"),
    labelName: chalk.yellow.bold("    Alter-ego:"),
    labelLv: chalk.yellow.bold("LV."),
    labelWork: chalk.yellow.bold(" Description:"),

    name: chalk.cyanBright(" 何韻霞 "),
    handle: chalk.white("HO YUN-HSIA"),
    Lv: chalk.white("24 yrs"),
    work: chalk.white(" A little junior at BeCode Liege"),
    github: chalk.gray("https://github.com/") + chalk.cyanBright("yunhsiaho"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.cyanBright("yunhsiaho"),
};

const NEWLINE = "\n";
const EMPTYLINE = "";
const attension = chalk.red.bold("                  Attension!");
const wild = chalk.red.bold(" The Wild");
const isHere = chalk.red.bold("Showed Up (((ﾟДﾟ;)))");
// const face =  chalk.red.bold("           (((ﾟДﾟ;))) Σ(ﾟДﾟ；≡；ﾟдﾟ)");

//print out

console.log(
    chalk.redBright(
        boxen(
            [
                `${attension}`,
                EMPTYLINE,
                `     ${wild}${data.name}${isHere}`,
                EMPTYLINE,                
                `${data.labelName} ${data.handle}    ${data.labelLv} ${data.Lv}`,
                `${data.labelWork}${data.work}`,
                `${data.labelGitHub} ${data.github}`,
                `${data.labelLinkedIn} ${data.linkedin}`,
            ].join(NEWLINE),
            {
                padding: 1,
                margin: 1,
                borderStyle: "double",
            },
        ),
    ),
);
console.log(chalk.whiteBright.bold('Card:'));
figlet.text('npx hsia',{
    font:'Ghost',
    width:80,
    whitespaceBreak:true
},function(err, data){
    if(err){
        console.log('OOPS!Something wrong happened~');
        console.log(err);
        return;
    }
    console.log(data);
}

);