import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'vips'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().notNullable()
      table.foreign('user_id').references('users.id').onDelete('CASCADE')
      table.integer('vehicle_id').unsigned().nullable()
      table.foreign('vehicle_id').references('vehicles.id').onDelete('SET NULL')
      table.enum('status', ['active', 'inactive']).defaultTo('active')
      table.timestamp('next_payment_date').nullable()
      table.timestamp('created_at').notNullable().defaultTo(this.now())
      table.timestamp('updated_at').nullable().defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}