import $ from 'jquery';
import _ from 'lodash-es';

// hello webpack app 2 -> HELLO WEBPACK APP 2
const text = _.upperCase('hello webpack app 2');
$('body').html(text);
