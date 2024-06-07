import { useQuery } from '@tanstack/react-query'
import { fetchFavouriteById } from '../apis/favourites'
import { useParams } from 'react-router-dom'

export function FavouriteDetail() {
  const { id } = useParams()
  const {
    isLoading,
    isError,
    data: drink,
    error,
  } = useQuery({
    queryKey: ['favourites', { id }],
    queryFn: () => fetchFavouriteById(id as string),
  })

  if (isLoading) {
    return <div>Loading</div>
  }
  if (isError) {
    return error.message
  }
  if (drink) {
    console.log(drink)
    return (
      <>
        <div className="drinkdetail">
          <div>
            <h1>{drink.strDrink}</h1>
            <img src={drink.strDrinkThumb} alt="" className="drinkimage" />
            <p>Category: {drink.strCategory}</p>
            <p>Glass: {drink.strGlass}</p>
            <ul>
              Ingredients:
              <li>
                {drink.strIngredient1} {drink.strMeasure1}
              </li>
              <li>
                {drink.strIngredient2} {drink.strMeasure2}
              </li>
              <li>
                {drink.strIngredient3} {drink.strMeasure3}
              </li>
              <li>
                {drink.strIngredient4} {drink.strMeasure4}
              </li>
              <li>
                {drink.strIngredient5} {drink.strMeasure5}
              </li>
              <li>
                {drink.strIngredient6} {drink.strMeasure6}
              </li>
              <li>
                {drink.strIngredient7} {drink.strMeasure7}
              </li>
              <li>
                {drink.strIngredient8} {drink.strMeasure8}
              </li>
              <li>
                {drink.strIngredient9} {drink.strMeasure9}
              </li>
              <li>
                {drink.strIngredient10} {drink.strMeasure10}
              </li>
              <li>
                {drink.strIngredient11} {drink.strMeasure11}
              </li>
              <li>
                {drink.strIngredient12} {drink.strMeasure12}
              </li>
              <li>
                {drink.strIngredient13} {drink.strMeasure13}
              </li>
              <li>
                {drink.strIngredient14} {drink.strMeasure14}
              </li>
              <li>
                {drink.strIngredient15} {drink.strMeasure15}
              </li>
            </ul>
            <p>How To Make: {drink.strInstructions}</p>
          </div>
        </div>
      </>
    )
  }
}
