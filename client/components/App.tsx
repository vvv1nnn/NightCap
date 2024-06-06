import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Alcoholic } from './Alcoholic'

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
