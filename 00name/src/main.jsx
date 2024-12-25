import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'

// let reactel = React.createElement(
//   'a',
//   { href: 'http://google.com', target: '_blank' },
//   'click for google!!'
// )

ReactDom.createRoot(document.getElementById('root')).render(

  <App/>

)
