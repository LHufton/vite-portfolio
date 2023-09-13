import React, { useEffect } from 'react'
import ReactDOM from 'react-dom' // Import ReactDOM
import './App.css'
import Navbar from './components/Navbar'
import Lead from './components/Lead'
import About from './components/About'
import Experience from './components/Experience'
import Project from './components/Project'
import Skill from './components/Skill'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    document.getElementById('current-year').textContent =
      new Date().getFullYear()
    document.documentElement.classList.remove('no-js')

    document.querySelectorAll('header a:not(.no-scroll)').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        const heading = link.getAttribute('href')
        const scrollDistance = document.querySelector(heading).offsetTop
        window.scrollTo({
          top: scrollDistance,
          behavior: 'smooth'
        })
        if (document.querySelector('header').classList.contains('active')) {
          document.querySelector('header').classList.remove('active')
        }
      })
    })

    // Rest of your useEffect code here
  }, [])

  return (
    <React.StrictMode>
      <Navbar />
      <About />
      <Experience />
      <Project />
      <Lead />
      <Skill />
      <Footer />
    </React.StrictMode>
  )
}

// Use ReactDOM.createRoot to render the App component
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

export default App
