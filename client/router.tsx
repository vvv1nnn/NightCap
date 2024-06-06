import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import App from './components/App'
import { Alcoholic } from './components/Alcoholic'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Alcoholic />} />
  </Route>,
)

export const router = createBrowserRouter(routes)
