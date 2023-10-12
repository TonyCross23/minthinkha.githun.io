import React from 'react'
import ReactDOM from 'react-dom/client'
import Question from "../src/components/Question";
import Squares from "../src/components/Squares";
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
      {
        path : '/',
        element : <Question/>,
      },
    {
        path : 'squares/:questionId',
        element : <Squares/>,
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
