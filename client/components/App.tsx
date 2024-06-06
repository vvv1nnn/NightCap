import { Outlet } from 'react-router-dom'
import { Header } from './Header'

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
