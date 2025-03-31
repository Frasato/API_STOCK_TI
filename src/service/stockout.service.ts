import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class StockOutService {
    constructor(private prisma: PrismaService){}

    async getAllDeletedItems(){
        return this.prisma.stockOut.findMany();
    }

    async removeItem(id: string, quantity: number){
        const item = await this.prisma.stockIn.findFirst({where:{id}});

        await this.prisma.stockOut.create({
            data: {
                barcode: item?.barcode as string,
                group: item?.group as string,
                quantity: quantity,
                mark: item?.mark as string,
                name: item?.name as string
            }
        })
    }
}