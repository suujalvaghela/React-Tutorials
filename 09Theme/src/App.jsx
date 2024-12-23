import { useEffect, useState } from 'react'
import './App.css'
import Card from './componens/Card'
import ThemeBtn from './componens/ThemeBtm'
import { ThemeContextProvider } from './context/ThemeContext'

function App() {

  const [themecolor, setThemeColor] = useState('light')

  function darktheme() {
    setThemeColor('dark')
  }

  function lighttheme(){
    setThemeColor('light')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('dark' , 'light')
    document.querySelector('html').classList.add(themecolor)
  } , [themecolor])

  return (

    <ThemeContextProvider value={{themecolor , darktheme , lighttheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Card/>
        </div>
      </div>
    </div>

    </ThemeContextProvider>
    
  )
}

export default App
