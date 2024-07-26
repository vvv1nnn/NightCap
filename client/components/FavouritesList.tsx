import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { fetchFavourites, deleteFavouriteById } from '../apis/favourites'
import { Drink } from '../../models/cocktail'
import { Link } from 'react-router-dom'

export function FavouritesList() {
  const queryClient = useQueryClient()
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['favourites'],
    queryFn: () => fetchFavourites(),
  })

  // Define the mutation using useMutation hook
  const mutation = useMutation({
    mutationFn: (id: string) => deleteFavouriteById(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['favourites'] }) // Correctly pass the query key
    },
  })

  // Handle delete function
  const handleDelete = (id: string) => {
    mutation.mutate(id)
  }

  if (isLoading) {
    return <div>Loading</div>
  }
  if (isError) {
    return error.message
  }
  if (data) {
    return (
      <>
        <div className="mainContainer">
          {data.favourites.map((drink: Drink) => (
            <div key={drink.idDrink} className="drink">
              <Link to={`/favourites/${drink.idDrink}`}>
                <p> {drink.strDrink}</p>
                <img
                  src={drink.strDrinkThumb}
                  alt={drink.strDrink}
                  className="drinkimage"
                />
              </Link>
              <button
                onClick={() => handleDelete(drink.idDrink)}
                className="deleteButton"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </>
    )
  }
}
