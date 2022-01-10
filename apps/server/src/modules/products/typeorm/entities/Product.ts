import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('products')
class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column('decimal')
  price: number

  @Column('int')
  quantity: number

  @Column()
  image: string

  @Column()
  brand: string

  @Column()
  description: string

  @Column('int')
  num_reviews: number

  @Column('int')
  rating: number

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Product
