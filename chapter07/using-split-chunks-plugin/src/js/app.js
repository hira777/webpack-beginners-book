import $ from 'jquery';
import _ from 'lodash-es';

// hello webpack app -> HELLO WEBPACK APP
const text = _.upperCase('hello webpack app');
$('body').html(text);
