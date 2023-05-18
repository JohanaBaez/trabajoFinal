import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import {Usuarios} from './user.entity';


@Entity()
export class UsuariosImage{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    url: string;
    @ManyToOne(
        ()=> Usuarios,
        (usuarios)=>usuarios.images
    )

    usuarios: Usuarios;
}