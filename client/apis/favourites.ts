import request from 'superagent'
import { useQuery } from '@tanstack/react-query'
import { Drink } from '../../models/cocktail'
export async function fetchFavourites() {
  const res = await request.get('/api/v1/favourites/')
  return res.body
}

export async function fetchFavouriteById(id: string) {
  const res = await request.get(`/api/v1/favourites/${id}`)
  return res.body as Drink
}
