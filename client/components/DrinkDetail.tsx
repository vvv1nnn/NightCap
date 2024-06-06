import { fetchCocktailById } from '../apis/cocktails'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

export function DrinkDetail() {
  const { id } = useParams()
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ['drink'],
    queryFn: () => fetchCocktailById(id as string),
  })

  if (isLoading) {
    return <p>LOADING...</p>
  }
  if (isError) {
    return <p>ERROR: {error.message}</p>
  }
  if (data) {
    console.log(data)
    const drink = data.drinks[0]
    return (
      <>
        <h1>{drink.strDrink}</h1>
        <img src={drink.strDrinkThumb} alt="" />
        <p>Category: {drink.strCategory}</p>
        <p>Glass: {drink.strGlass}</p>
        <p>How To Make: {drink.strInstructions}</p>
      </>
    )
  }
}
