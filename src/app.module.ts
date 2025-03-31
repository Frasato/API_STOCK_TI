import { Module } from '@nestjs/common';
import { StockIn } from './service/stockin.service';
import { StockInController } from './controller/stockin.controller';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [StockInController],
  providers: [StockIn],
})
export class AppModule {}
