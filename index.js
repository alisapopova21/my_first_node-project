import chalk from 'chalk';

const log = console.log;


log(chalk.magenta(
	'This is a magenta line ' +
	chalk.yellow.underline.bold('with a yellow substring') +
	' that becomes magenta again!)'
));

log(chalk.cyan('Hello', chalk.underline.bgCyan('world') + '!'));
