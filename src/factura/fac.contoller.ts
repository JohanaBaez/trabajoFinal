import { Body, Controller, Get, Param, ParseUUIDPipe, Post, Delete, Patch } from "@nestjs/common";
import { CreateFacDto } from "./dto/fac.dto";
import { facturaService } from "./fac.service";

@Controller('factura')
export class facturaController {
    constructor (
        private readonly FacturaServiceRepo: facturaService) {}

        //metodo para crear un factura
        @Post()
        create(@Body() facdto: CreateFacDto) {
            return this.FacturaServiceRepo.create(facdto)
        }

        //metodo para mostrar las facturas
        @Get()
        findAll() {
            return this.FacturaServiceRepo.findAll();
        }

        //metodo para mostrar una factura en especifico
        @Get(':id')
        findOne(@Param('id', ParseUUIDPipe) id: string) {
                return this.FacturaServiceRepo.findOne(id);
            } 

        // Para eliminar   
        @Delete(':id')
        remove(@Param('id', ParseUUIDPipe) id: string) {
            return this.FacturaServiceRepo.remove(id);
        }

        // crear metodo patch, para actualizar 
        @Patch(':id')
        update(
            @Param('id', ParseUUIDPipe) id: string,
            @Body() updateFacDto: CreateFacDto,
        ){
        return this.FacturaServiceRepo.update(id, updateFacDto);
  }
}