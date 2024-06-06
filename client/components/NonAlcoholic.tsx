import { useQuery } from '@tanstack/react-query'
import { fetchNonAlcoholicCocktails } from '../apis/cocktails'
import type { Drink } from '../../models/cocktail'

export function NonAlcoholic() {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ['nonalcoholic'],
    queryFn: () => fetchNonAlcoholicCocktails(),
  })

  if (isLoading) {
    return <p>LOADING...</p>
  }
  if (isError) {
    return <p>ERROR: {error.message}</p>
  }

  if (data) {
    return (
      <>
        <div className="mainContainer">
          {data.drinks.map((drink) => (
            <div key={drink.idDrink}>
              <p> {drink.strDrink}</p>
              <img src={drink.strDrinkThumb} alt={drink.strDrink} />
            </div>
          ))}
        </div>
      </>
    )
  }
}
