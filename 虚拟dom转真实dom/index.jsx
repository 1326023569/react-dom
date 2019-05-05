 let React = require('react');
 //  import React from 'react';
 let ReactDom = require('react-dom');
 //  import { render } from 'react-dom';

//  let oSpan = React.createElement('span', { className: 'list' }, ['adc']);
 let oSpan = <span className='list'>abc</span>
//  let oDiv = React.createElement('div', { id: 'box' }, ['123', oSpan]);
 let oDiv = <div id='box'>
                123
                {oSpan}
            </div>
 ReactDom.render(oDiv, document.getElementById('app'), () => {

 })

 console.log(oDiv)