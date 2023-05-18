import { Injectable , BadRequestException} from '@nestjs/common';
import { existsSync } from 'fs';
import { join } from 'path';


@Injectable()
export class FilesService {
    staticProductImage(imageNeme: string){
        const path = join( __dirname, '../../static/products', imageNeme);



        if (!existsSync(path)){
            throw new BadRequestException(
                `no se encuentra el producto con la imagen ${imageNeme}`,

            )
        }

        return path;
    }
}

