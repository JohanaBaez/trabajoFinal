import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductImage } from './product-image.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  tablet: string;

  @Column({ type: 'text'})
  marca: string;

  @Column({ type: 'text'})
  color: string;

  @Column({ type: 'numeric' })
  tamaño: number;

  @Column({ type: 'numeric' })
  price: number;

  @Column({type: 'varchar', nullable: true})
  filename: string;

  //relacion
  @OneToMany(
    ()=> ProductImage,
    (productImage)=>productImage.product,
    {cascade:true},

  )
  images?: ProductImage[];
}
