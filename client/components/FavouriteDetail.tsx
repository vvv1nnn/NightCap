import { useQuery } from '@tanstack/react-query'
import { fetchFavouriteById } from '../apis/favourites'
import { Drink } from '../../models/cocktail'
import { useParams } from 'react-router-dom'

export function FavouriteDetail() {
  const { id } = useParams()
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['favourites'],
    queryFn: () => fetchFavouriteById(id as string),
  })

  if (isLoading) {
    return <div>Loading</div>
  }
  if (isError) {
    return error.message
  }
  if (data) console.log(data)
  return (
    <>
      <div>
        <div>
          <h1>{data.strDrink}</h1>
          <img src={data.strDrinkThumb} alt="" />
          <p>Category: {data.strCategory}</p>
          <p>Glass: {data.strGlass}</p>
          <p>How To Make: {data.strInstructions}</p>
        </div>
      </div>
    </>
  )
}
