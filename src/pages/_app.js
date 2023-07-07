import '@/styles/globals.css'
import { store } from '../storage/store'
import { Provider } from 'react-redux'
import React from 'react'
// import { BrowserRouter } from 'react-router-dom'

export default function App({ Component, pageProps }) {
  return (
   <React.StrictMode>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
   </React.StrictMode>
  )
}
