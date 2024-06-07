import { Link, useParams, useSearchParams } from 'react-router-dom'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchCocktailByName } from '../apis/cocktails'
import { useEffect, useState } from 'react'

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '')

  useEffect(() => {
    setSearchQuery(searchParams.get('q') || '')
  }, [searchParams])

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ['search', searchQuery],
    queryFn: () => fetchCocktailByName(searchQuery),
  })

  if (isLoading) {
    return <p>LOADING...</p>
  }

  if (isError) {
    return <p>Error: {error.message}</p>
  }

  if (data.drinks === null) {
    return <p>Search Again!</p>
  }

  if (data) {
    return (
      <>
        <div className="mainContainer">
          {data.drinks.map((drink) => (
            <div key={drink.idDrink} className="drink">
              <Link to={`/drink/${drink.idDrink}`}>
                <p> {drink.strDrink}</p>
                <img
                  src={drink.strDrinkThumb}
                  alt={drink.strDrink}
                  className="drinkimage"
                />
              </Link>
            </div>
          ))}
        </div>
      </>
    )
  }
}
