import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Nav } from './Nav'
// import { Alcoholic } from './Alcoholic'

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Outlet />
    </>
  )
}

export default App
