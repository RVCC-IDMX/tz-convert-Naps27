const moment = require('moment-timezone');
// eslint-disable-next-line import/no-extraneous-dependencies
const yargs = require('yargs');

moment.tz.setDefault('America / New_York');

const { argv } = yargs
  .usage('Usage: $0 <timezone>')
  .option('format', {
    alias: 'f',
  })
  .demand(1, 'Please provide a target timezone');

const targetTimezone = argv._[0];
const useCustomFormat = argv.format;

const dateFormat = useCustomFormat
  ? 'dddd, MMMM Do YYYY, h:mm:ss a' : undefined;

const formattedTime = moment().tz(targetTimezone).format(dateFormat);

console.log(`The time at the ${targetTimezone} timezone is ${formattedTime}`);
