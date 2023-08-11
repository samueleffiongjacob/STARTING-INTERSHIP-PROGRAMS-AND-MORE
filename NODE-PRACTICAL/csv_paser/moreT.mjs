import assert from 'assert';
import { parse } from 'csv-parse';

const records = [];
// Initialize the parser
const parser = parse({
  delimiter: ':'
});
// Use the readable stream api to consume records
parser.on('readable', function(){
  let record;
  while ((record = parser.read()) !== null) {
    records.push(record);
  }
});
// Catch any error
parser.on('error', function(err){
  console.error(err.message);
});
// Test that the parsed records matched the expected records
parser.on('end', function(){
  assert.deepStrictEqual(
    records,
    [
      [ 'kepler_data.csv' ],
      // [ 'someone','x','1022','1022','','/home/someone','/bin/bash' ]
    ]
  );
});

// Write data to the stream
parser.write("kepler_data.csv");
// parser.write("kepler_data.csv");
// Close the readable stream
console.log(records)
parser.end();
