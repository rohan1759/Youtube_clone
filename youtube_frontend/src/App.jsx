import './App.css'
import Content from './components/content/Content'
import NavBar from './components/navBar/NavBar'
import Sidebar from './components/sideBar/Sidebar'
import Category from './components/suggestion/Category'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Watch from './components/watch/watch'
import { Navigate } from 'react-router-dom'

function App() {

  return (
    <div className='appMainDiv'>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route 
            path='/home' 
            element={
                      <>
                      <section>
                        <Sidebar className="sidebar" />
                        <div className='container'>
                          <Category/>
                          <Content/>
                        </div>
                      </section>
                      </>
                    } 
          />
        
          <Route path="/watch" Component={Watch} /> 
        </Routes>
      </Router>
    </div>
  )
}

export default App
