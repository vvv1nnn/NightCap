import { Link } from 'react-router-dom'

export function Nav() {
  return (
    <div id="nav">
      <Link to="/">
        <button>Alcoholic</button>
      </Link>

      <Link to="/non-alcoholic">
        <button>Non Alcoholic</button>
      </Link>
    </div>
  )
}
