import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'vehicles'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('plate', 20).notNullable().unique()
      table.string('model', 50).notNullable()
      table.string('brand', 50).notNullable()
      table.string('color', 30).notNullable()
      table.enum('status', ['registered', 'unregistered']).defaultTo('registered')
      table.timestamp('created_at').notNullable().defaultTo(this.now())
      table.timestamp('updated_at').nullable().defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}