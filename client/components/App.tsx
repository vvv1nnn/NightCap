import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Nav } from './Nav'

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
