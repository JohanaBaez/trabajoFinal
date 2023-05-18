import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseUUIDPipe,
    Patch,
    Post,
  } from '@nestjs/common';
  import { UserService } from './user.service';
  import { CreateUserDto } from './dto/user.dto';
  
  @Controller('usuarios')
  export class UserController {
    constructor(private readonly usuariosServiceRepo: UserService) {}
  
    //Metodo para crear un producto
    @Post()
    create(@Body() userDto: CreateUserDto) {
      return this.usuariosServiceRepo.create(userDto);
    }
  
    //Metodo para mostrar todos los productos
    @Get()
    findAll() {
      return this.usuariosServiceRepo.findAll();
    }
  
    //Metodo para mostrar un producto especifico
    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: string) {
      return this.usuariosServiceRepo.findOne(id);
    }
  
    //Eliminar un producto especifico
    @Delete(':id')
    remove(@Param('id', ParseUUIDPipe) id: string) {
      return this.usuariosServiceRepo.remove(id);
    }
  
    //Crear método patch, para actualizar
    @Patch(':id')
    update(
      @Param('id', ParseUUIDPipe) id: string,
      @Body() updateUserDto: CreateUserDto,
    ){
      return this.usuariosServiceRepo.update(id, updateUserDto);
    }
  }
  