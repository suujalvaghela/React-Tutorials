import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LogoutBtn, Logo, Container } from './InputBox.js'
import { Link } from 'react-router-dom'

function Header() {

  const authStatus = useSelector((state) => (state.auth.status))

  const navItems = [
    {
      name: 'home',
      slug: '/',
      active: true
    },
    {
      name: 'login',
      slug: '/login',
      active: !authStatus
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus
    },
    {
      name: 'All posts',
      slug: '/all-posts',
      active: authStatus
    },
    {
      name: 'Add post',
      slug: '/add-post',
      active: authStatus
    }
  ]

  const navigate = useNavigate()

  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button onClick={() => navigate(item.slug)}
                    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {
              authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )
            }
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header