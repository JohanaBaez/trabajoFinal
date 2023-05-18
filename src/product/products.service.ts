import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/product.dto';
import { ProductImage } from './entities/product-image.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(ProductImage)
    private readonly imageRepository: Repository<ProductImage>,

  ) {}

  async create(productDto: CreateProductDto){
    const {images =[], ...detalleProducto}= productDto;
    const product=await this.productRepository.create({
      ...detalleProducto,
      images:images.map((images)=>this.imageRepository.create({url:images})),
    });
    await this.productRepository.save(product);
    return product;
  }

  //Metodo para visualizar todos los productos
  findAll() {
    return this.productRepository.find();
  }

  //Metodo para visualizar un producto especifico
  findOne(id: string) {
    return this.productRepository.findOneBy({ id });
  }

  //Remover un producto especifico
  async remove(id: string) {
    const product = await this.findOne(id);
    await this.productRepository.remove(product);
    return 'Producto eliminado satisfactoriamente';
  }

  async update(id: string, cambios:CreateProductDto){
    const product = await this.productRepository.preload({
      id:id,
      ...cambios,
      images:[],
    });
    await this.productRepository.save(product);
    return product;
  }
}
