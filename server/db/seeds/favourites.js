/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('favourites').del()
  await knex('favourites').insert([
    {
      idDrink: '001',
      strDrink: 'Test',
      strCategory: 'Beer',
      strAlcoholic: 'Alchoholic',
      strGlass: 'Cocktail',
      strInstructions: 'blah blah bla',
      strDrinkThumb:
        'https://www.thecocktaildb.com/images/media/drink/yk70e31606771240.jpg',
      strIngredient1: 'Vermouth',
      strIngredient2: 'Bourbon',
      strIngredient3: 'Angostura bitters',
      strIngredient4: 'Ice',
      strIngredient5: 'araschino cherry',
      strIngredient6: 'Orange peel',
      strIngredient7: '',
      strIngredient8: '',
      strIngredient9: '',
      strIngredient10: '',
      strIngredient11: '',
      strIngredient12: '',
      strIngredient13: '',
      strIngredient14: '',
      strIngredient15: '',
      strMeasure1: '3/4 oz',
      strMeasure2: '2 1/2 oz Blended',
      strMeasure3: 'dash',
      strMeasure4: '2 or 3 ',
      strMeasure5: '1',
      strMeasure6: '1 twist of ',
      strMeasure7: '',
      strMeasure8: '',
      strMeasure9: '',
      strMeasure10: '',
      strMeasure11: '',
      strMeasure12: '',
      strMeasure13: '',
      strMeasure14: '',
      strMeasure15: '',
      strImageSource:
        'https://commons.wikimedia.org/wiki/File:Oak_Fired_Manhattan_-_Stierch_1.jpg',
    },
  ])
}
