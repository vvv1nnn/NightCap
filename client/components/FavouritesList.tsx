import { useQuery } from '@tanstack/react-query'
import { fetchFavourites } from '../apis/favourites'
import { Drink } from '../../models/cocktail'

export function FavouritesList() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['favourites'],
    queryFn: () => fetchFavourites(),
  })

  if (isLoading) {
    return <div>Loading</div>
  }
  if (isError) {
    return error.message
  }
  if (data) {
    // console.log(data)
    return (
      <>
        <div className="mainContainer">
          {data.favourites.map((drink: Drink) => (
            <div key={drink.idDrink} className="drink">
              {/* <Link to={`/drink/${drink.idDrink}`}> */}
              <p> {drink.strDrink}</p>
              <img
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                className="drinkimage"
              />
            </div>
          ))}
        </div>
      </>
    )
  }
}
