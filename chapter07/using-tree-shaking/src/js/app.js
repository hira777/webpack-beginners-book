import { upperCase } from 'lodash-es';
// ↓のように lodash-es 全体を読み込むとTree Shaking が有効にならないため注意
// import _ from 'lodash-es';

const text = upperCase('hello webpack app');
console.log(text);
