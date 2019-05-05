let React = require('react');
//  import React from 'react';
let ReactDom = require('react-dom');
//  import { render } from 'react-dom';

//  let oSpan = React.createElement('span', { className: 'list' }, ['adc']);
let oSpan = React.createElement(
    'span', { className: 'list' },
    'abc'
);
//  let oDiv = React.createElement('div', { id: 'box' }, ['123', oSpan]);
let oDiv = React.createElement(
    'div', { id: 'box' },
    '123',
    oSpan
);
ReactDom.render(oDiv, document.getElementById('app'), () => {});

console.log(oDiv);