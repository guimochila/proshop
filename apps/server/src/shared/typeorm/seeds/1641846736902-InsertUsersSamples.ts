import User from '@modules/users/typeorm/entities/User'
import { MigrationInterface, QueryRunner } from 'typeorm'
import { users } from '../samples/users'

export class InsertUsersSamples1641846736902 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into(User)
      .values(users)
      .execute()
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.createQueryBuilder().delete().from(User).execute()
  }
}
