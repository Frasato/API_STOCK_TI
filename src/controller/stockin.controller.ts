import { Body, Controller, Get, NotFoundException, Post, Put } from "@nestjs/common";
import { StockIn } from "src/service/stockin.service";

@Controller('stockin')
export class StockInController {
    constructor(private stockService: StockIn){}

    @Get()
    async getAllItems(){
        return this.stockService.getAllItems();
    }

    @Post()
    async setItem(@Body() body: {barcode: string, name: string, mark: string, group: string, quantity: number}){
        return this.stockService.setItem(body.barcode, body.name, body.mark, body.group, body.quantity);
    }

    @Put()
    async updateItem(@Body() body: {id: string, quantity: number}){
        const item = await this.stockService.findItemById(body.id);

        if(!item){
            throw new NotFoundException("Item not found!");
        }

        return this.stockService.updateItem(body.id, body.quantity);
    }
}