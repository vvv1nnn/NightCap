import { useState } from 'react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'

export function Nav() {
  // const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    // setSearchParams({ q: searchQuery })
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

      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
          {/* <Link to={`/search?q=${searchQuery}`}> */}
          <button type="submit">Search</button>
          {/* </Link> */}
        </form>
      </div>
    </div>
  )
}
