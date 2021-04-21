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
    labelLinkedIn: chalk.yellow.bold("   LinkedIn:"),

    name: chalk.cyanBright(" 何韻霞 "),
    handle: chalk.white("                     HO YUN-HSIA"),
    work: chalk.white("      A little junior at BeCode Liege"),
    github: chalk.gray("https://github.com/") + chalk.cyanBright("yunhsiaho"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.cyanBright("yunhsiaho"),
};

const NEWLINE = "\n";
const EMPTYLINE = "";
const attension = chalk.red.bold("                      Attension!");
const wild = chalk.red.bold("The Wild");
const isHere = chalk.red.bold("Is Here!!! (((ﾟДﾟ;))) Σ(ﾟДﾟ；≡；ﾟдﾟ)");
// const face =  chalk.red.bold("           (((ﾟДﾟ;))) Σ(ﾟДﾟ；≡；ﾟдﾟ)");

console.log(
    chalk.redBright(
        boxen(
            [
                `${attension}`,
                EMPTYLINE,
                `${wild} ${data.name}${isHere}`,
                EMPTYLINE,
                `${data.handle}`,
                EMPTYLINE,
                `${data.work}`,
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