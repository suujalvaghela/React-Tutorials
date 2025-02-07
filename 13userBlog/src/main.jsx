import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login, SignUp, AddPost, AllPost, EditPost, Post, Home } from './pages/PagesComponents/AllComponents.js'
import { AuthLayout } from './components/InputBox.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/signUp',
        element: (
          <AuthLayout authentication={false}>
            <SignUp />
          </AuthLayout>
        )
      },
      {
        path: '/login',
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        )
      },
      {
        path: '/add-post',
        element: (<AuthLayout authentication={true}>
          <AddPost />
        </AuthLayout>
        )
      },
      {
        path: '/all-posts',
        element: (<AuthLayout authentication={true}>
          <AllPost />
        </AuthLayout>
        )
      },
      {
        path: '/edit-post/:slug',
        element: (<AuthLayout authentication={true}>
          <EditPost />
        </AuthLayout>
        )
      },
      {
        path: '/post/:slug',
        element: <Post />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
