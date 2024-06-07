import request from 'superagent'

export async function fetchFavourites() {
  const res = await request.get('/api/v1/favourites/')
  return res.body
}
