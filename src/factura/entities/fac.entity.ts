import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Factura {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'numeric' })
  number: number;

  @Column({ type: 'numeric' })
  fecha: number;

  @Column({ type: 'text' })
  tienda: string;

  @Column({ type: 'text' })
  usuario: string;

  @Column({ type: 'text' })
  nombrePro: string;

  @Column({ type: 'numeric' })
  precio: number;

  @Column({ type: 'numeric' })
  total: number;
}