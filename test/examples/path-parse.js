import {parse} from 'path';

// test path.parse
var parseResult = parse('/home/user/dir/file.txt');
var expectedResult = {
  root: '/',
  dir: '/home/user/dir',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
};
if (Object.keys(expectedResult).every(
    key => expectedResult[key] === parseResult[key]
  )) {
  done();
} else {
  done(new Error(`parse error, expected ${JSON.stringify(expectedResult)} but got '${JSON.stringify(parseResult)}'`));
}
