import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBioDatumDto } from './dto/create-bio-datum.dto';
import { UpdateBioDatumDto } from './dto/update-bio-datum.dto';
import { BioDatum } from './entities/bio-datum.entity';

@Injectable()
export class BioDataService {

  constructor(
    @InjectRepository(BioDatum)
    private biodataRepository: Repository<BioDatum>
  ){}

  async create(createBioDatumDto: CreateBioDatumDto) {
    const newBiodatum: BioDatum = this.biodataRepository.create(createBioDatumDto)
    return this.biodataRepository
    //return 'This action adds a new bioDatum';
  }

  async findAll() {
    //return `This action returns all bioData`;
    return await this.biodataRepository.find();
  }

  async findOne(id: number) {
    //return `This action returns a #${id} bioDatum`;
    return await this.biodataRepository.findOne(id);
  }

  async update(id: number, updateBioDatumDto: UpdateBioDatumDto) {
    //return `This action updates a #${id} bioDatum`;
    return await this.biodataRepository.update(id,updateBioDatumDto);
  }

 async remove(id: number) {
    //return `This action removes a #${id} bioDatum`;
    return await this.biodataRepository.delete(id);
  }
}
