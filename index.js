#!/usr/bin/env node
/* hsia/npxcard
 *
 * /index.js - Main Entry point
 */

const chalk = require("chalk");
const boxen = require("boxen");

// Text + chalk definitions
const data = {
    name: chalk.white("             Pierre-Antoine Delnatte"),
    handle: chalk.white("hsia"),
    work: chalk.white("Code Guardian at BeCode.org"),
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("leny_be"),
    npm: chalk.gray("https://npmjs.com/") + chalk.red("~leny"),
    github: chalk.gray("https://github.com/") + chalk.green("leny"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("padelnatte"),
    web: chalk.cyan("https://leny.me"),
    npx: chalk.red("npx") + " " + chalk.white("leny"),
    labelWork: chalk.white.bold("       Work:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelNpm: chalk.white.bold("        npm:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Card:"),
};

const NEWLINE = "\n";
const EMPTYLINE = "";

console.log(
    chalk.green(
        boxen(
            [
                `${data.name} / ${data.handle}`,
                EMPTYLINE,
                `${data.labelWork} ${data.work}`,
                EMPTYLINE,
                `${data.labelTwitter} ${data.twitter}`,
                `${data.labelNpm} ${data.npm}`,
                `${data.labelGitHub} ${data.github}`,
                `${data.labelLinkedIn} ${data.linkedin}`,
                `${data.labelWeb} ${data.web}`,
                EMPTYLINE,
                `${data.labelCard} ${data.npx}`,
            ].join(NEWLINE),
            {
                padding: 1,
                margin: 1,
                borderStyle: "round",
            },
        ),
    ),
);