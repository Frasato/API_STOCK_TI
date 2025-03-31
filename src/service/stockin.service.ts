import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class StockIn {
    constructor(private prisma: PrismaService){}

    async getAllItems(){
        return this.prisma.stockIn.findMany();
    }

    async setItem(barcode: string, name: string, mark: string, group: string, quantity: number){
        await this.prisma.stockIn.create({
            data: {
                barcode,
                name,
                mark,
                group,
                quantity
            }
        });
    }

    async findItemById(id: string){
        return this.prisma.stockIn.findFirst({
            where: {
                id
            }
        })
    }

    async updateItem(id: string, quantity: number){
        return this.prisma.stockIn.update({
            where: {id},
            data: {quantity}
        })
    }
}