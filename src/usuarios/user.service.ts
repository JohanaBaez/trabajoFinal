import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuarios } from './entities/user.entity';
import { CreateUserDto } from './dto/user.dto';
import { UsuariosImage } from './entities/user-image.entity';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Usuarios)
    private readonly usuariosRepository: Repository<Usuarios>,
    @InjectRepository(UsuariosImage)
    private readonly imageRepository: Repository<UsuariosImage>,

  ) {}

  async create(userDto: CreateUserDto){
    const {images =[], ...detalleUsuarios}= userDto;
    const usuarios=await this.usuariosRepository.create({
      ...detalleUsuarios,
      images:images.map((images)=>this.imageRepository.create({url:images})),
    });
    await this.usuariosRepository.save(usuarios);
    return usuarios;
  }

  //Metodo para visualizar todos los usuarios
  findAll() {
    return this.usuariosRepository.find();
  }

  //Metodo para visualizar un usuario especifico
  findOne(id: string) {
    return this.usuariosRepository.findOneBy({ id });
  }

  //Remover un usuario especifico
  async remove(id: string) {
    const usuarios = await this.findOne(id);
    await this.usuariosRepository.remove(usuarios);
    return 'usuario eliminado satisfactoriamente';
  }

  async update(id: string, cambios:CreateUserDto){
    const usuarios = await this.usuariosRepository.preload({
      id:id,
      ...cambios,
      images:[],
    });
    await this.usuariosRepository.save(usuarios);
    return usuarios;
  }
}
