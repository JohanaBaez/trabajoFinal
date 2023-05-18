import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import {UsuariosImage}from './user-image.entity';

@Entity()
export class Usuarios {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text'})
  apellido: string;

  @Column({ type: 'numeric' })
  edad: number;

  @Column({ type: 'text'})
  nacionalidad: string;

  @Column({ type: 'text'})
  email: string;

  //relacion
  @OneToMany(
    ()=> UsuariosImage,
    (ususariosImage)=>ususariosImage.usuarios,
    {cascade:true},

  )
  images?: UsuariosImage[];
}
