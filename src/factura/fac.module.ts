import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Factura } from './entities/fac.entity';
import { facturaController  } from './fac.contoller';
import { facturaService } from './fac.service';

@Module({
  imports: [TypeOrmModule.forFeature([Factura])],
  controllers: [facturaController ],
  providers: [facturaService],
})
export class FacturaModule {}