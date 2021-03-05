import { Module } from '@nestjs/common';
import { BioDataService } from './bio-data.service';
import { BioDataController } from './bio-data.controller';
import { BioDatum } from './entities/bio-datum.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BioDatum])],
  controllers: [BioDataController],
  providers: [BioDataService]
})
export class BioDataModule {}
