import request from 'superagent'
import type { Drink, Cocktail, CocktailData } from '../../models/cocktail'

export async function fetchAlcoholicCocktails() {
  const res = await request.get(
    'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic',
  )
  return res.body as Cocktail
}

export async function fetchNonAlcoholicCocktails() {
  const res = await request.get(
    'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic',
  )
  return res.body as Cocktail
}

export async function fetchCocktailById(id: string) {
  const res = await request.get(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
  )
  return res.body as Cocktail
}

export async function fetchCocktailByName(search: string) {
  const res = await request.get(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`,
  )
  return res.body
}
