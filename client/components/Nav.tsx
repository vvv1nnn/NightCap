import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export function Nav() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const search = searchQuery
    setSearchQuery('')
    console.log(searchQuery)
    navigate(`/search?q=${encodeURIComponent(search)}`)
  }

  return (
    <div id="nav">
      <Link to="/">
        <button>Alcoholic</button>
      </Link>

      <Link to="/non-alcoholic">
        <button>Non Alcoholic</button>
      </Link>

      <Link to="/favourites">
        <button>Favourites</button>
      </Link>

      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />

          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  )
}
