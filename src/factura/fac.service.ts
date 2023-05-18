import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFacDto } from './dto/fac.dto';
import { Factura } from './entities/fac.entity';


@Injectable()
export class facturaService{
    constructor (
        @InjectRepository(Factura)
        private readonly facturaRepository: Repository<Factura>,
        ) {}

        //metodo para agregar factura

        async create(facdto: CreateFacDto) {
            const factura = this.facturaRepository.create(facdto);
            await this.facturaRepository.save(facdto)

            return factura;
        }

        //Metodo para visualizar todos las facturas
        findAll() {
            return this.facturaRepository.find();
        }

        //metodo para visualizar una factura en  especifico
        findOne(id: string) {
            return this.facturaRepository.findOneBy({ id}); 
        }

        //remover una factura en especifico
        async remove(id: string) {
            const factura = await this.findOne(id);
            await this.facturaRepository.remove(factura);
            return 'factura eliminada sastifactoriamante';
        }

        //actualizar una factura en especifico
        async update(id: string, cambios: CreateFacDto) {
            const findFactura = await this.findOne(id); 
            const updatedFactura = await this.facturaRepository.merge(
                findFactura,
                cambios,
            );

            return this.facturaRepository.update(id, updatedFactura);
        }

       
}