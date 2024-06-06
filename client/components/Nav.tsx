import { Link } from 'react-router-dom'

export function Nav() {
  return (
    <div>
      <h2>DRANKS</h2>
      <ul>
        <li>
          <Link to="/">Alcoholic</Link>
        </li>
        <li>
          <Link to="">Non Alcoholic</Link>
        </li>
      </ul>
    </div>
  )
}
