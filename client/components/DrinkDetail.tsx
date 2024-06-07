import { fetchCocktailById } from '../apis/cocktails'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import { Drink } from '../../models/cocktail'

export function DrinkDetail() {
  const { id } = useParams()
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ['drink'],
    queryFn: () => fetchCocktailById(id as string),
  })
  async function handleSave() {
    if (data) {
      try {
        const drink = data.drinks[0]
        const newDrink: Drink = {
          idDrink: drink.idDrink,
          strDrink: drink.strDrink,
          strCategory: drink.strCategory,
          strAlcoholic: drink.strAlcoholic,
          strGlass: drink.strGlass,
          strInstructions: drink.strInstructions,
          strDrinkThumb: drink.strDrinkThumb,
          strIngredient1: drink.strIngredient1,
          strIngredient2: drink.strIngredient2,
          strIngredient3: drink.strIngredient3,
          strIngredient4: drink.strIngredient4,
          strIngredient5: drink.strIngredient5,
          strIngredient6: drink.strIngredient6,
          strIngredient7: drink.strIngredient7,
          strIngredient8: drink.strIngredient8,
          strIngredient9: drink.strIngredient9,
          strIngredient10: drink.strIngredient10,
          strIngredient11: drink.strIngredient11,
          strIngredient12: drink.strIngredient12,
          strIngredient13: drink.strIngredient13,
          strIngredient14: drink.strIngredient14,
          strIngredient15: drink.strIngredient15,
          strMeasure1: drink.strMeasure1,
          strMeasure2: drink.strMeasure2,
          strMeasure3: drink.strMeasure3,
          strMeasure4: drink.strMeasure4,
          strMeasure5: drink.strMeasure5,
          strMeasure6: drink.strMeasure6,
          strMeasure7: drink.strMeasure7,
          strMeasure8: drink.strMeasure8,
          strMeasure9: drink.strMeasure9,
          strMeasure10: drink.strMeasure10,
          strMeasure11: drink.strMeasure11,
          strMeasure12: drink.strMeasure12,
          strMeasure13: drink.strMeasure13,
          strMeasure14: drink.strMeasure14,
          strMeasure15: drink.strMeasure15,
          strImageSource: drink.strImageSource,
        }
        await request.post('/api/v1/favourites/').send(newDrink)
      } catch (error) {
        console.log('failed to save', error)
      }
    }
  }
  if (isLoading) {
    return <p>LOADING...</p>
  }
  if (isError) {
    return <p>ERROR: {error.message}</p>
  }
  if (data) {
    const drink = data.drinks[0]
    return (
      <>
        <div>
          <h1>{drink.strDrink}</h1>
          <img src={drink.strDrinkThumb} alt="" />
          <p>Category: {drink.strCategory}</p>
          <p>Glass: {drink.strGlass}</p>
          <p>How To Make: {drink.strInstructions}</p>
        </div>
        <div>
          <button onClick={handleSave}>Save to Favourites</button>
        </div>
      </>
    )
  }
}
