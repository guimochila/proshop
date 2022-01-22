import { MigrationInterface, QueryRunner } from 'typeorm'
import Product from '@modules/products/typeorm/entities/Product'
import { products as productsSample } from '../samples/products'

export class InsertProductsSamples1641750912482 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsSample)
      .execute()
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .delete()
      .from(Product)
      .execute()
  }
}
