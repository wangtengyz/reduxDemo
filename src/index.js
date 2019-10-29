import React from 'react';
import ReactDOM from 'react-dom';
import Demo1 from './pages/demo1'
// import Demo2 from './pages/demo2'
// import Demo3 from './pages/demo3'
import { Provider } from 'react-redux'
// import store from './pages/demo1/store'
// import store from './pages/demo3/store'
//声明一个App组件，然后这个组件用Provider进行包裹。

ReactDOM.render(
    <Demo1 />
, document.getElementById('root'));
// ReactDOM.render(
//     <Demo2 />
// , document.getElementById('root'));
// ReactDOM.render(<Provider store={store}>
//     <Demo3 />
// </Provider>, document.getElementById('root'));