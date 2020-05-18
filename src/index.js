
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import App from './app'
import rootReducer from './store/reducers'

const store = createStore(rootReducer)

render(
    <App store={store} />,
    document.getElementById('root')
)