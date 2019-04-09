//  /*使用es6的箭头函数*/
//  var func = str => {
//     document.getElementById('app').innerHTML = str;
// };
// func('我现在在使用Babel!');

import React from 'react';
import ReactDom from 'react-dom';
import Todolist from './component/Todolist/Todolist.js'

ReactDom.render(
    <Todolist/>, document.getElementById('app'));