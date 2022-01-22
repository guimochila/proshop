import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('reviews')
class Review {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column('int')
  rating: number

  @Column()
  comment: string
}

export default Review
