/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('favourites', function (table) {
    table.string('idDrink')
    table.string('strDrink')
    table.string('strCategory')
    table.string('strAlcoholic')
    table.string('strGlass')
    table.string('strInstructions')
    table.string('strDrinkThumb')
    table.string('strIngredient1')
    table.string('strIngredient2')
    table.string('strIngredient3')
    table.string('strIngredient4')
    table.string('strIngredient5')
    table.string('strIngredient6')
    table.string('strIngredient7')
    table.string('strIngredient8')
    table.string('strIngredient9')
    table.string('strIngredient10')
    table.string('strIngredient11')
    table.string('strIngredient12')
    table.string('strIngredient13')
    table.string('strIngredient14')
    table.string('strIngredient15')
    table.string('strMeasure1')
    table.string('strMeasure2')
    table.string('strMeasure3')
    table.string('strMeasure4')
    table.string('strMeasure5')
    table.string('strMeasure6')
    table.string('strMeasure7')
    table.string('strMeasure8')
    table.string('strMeasure9')
    table.string('strMeasure10')
    table.string('strMeasure11')
    table.string('strMeasure12')
    table.string('strMeasure13')
    table.string('strMeasure14')
    table.string('strMeasure15')
    table.string('strImageSource')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('idDrink')
}
