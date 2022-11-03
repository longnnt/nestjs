import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auth } from './entities/auth.entity';

@Injectable({})
export class AuthServiceP {
  constructor(
    @InjectRepository(Auth)
    private readonly authRepository: Repository<Auth>
  ) {}

  findAll() {
    return this.authRepository.find();
  }

  async findOne(id: string) {
    const auth = await this.authRepository.findOne({
      where: { id: parseInt(id) },
    });
    if (!auth) {
      throw new NotFoundException(`Auth #${id} not found}`);
    }

    return auth;
  }

  create(createAuthDto: any) {
    const auth = this.authRepository.create(createAuthDto);
    return this.authRepository.save(auth);
  }

  async update(id: string, updateAuthDto: any) {
    const auth = await this.authRepository.preload({
      id: +id,
      ...updateAuthDto,
    });
    if (!auth) {
      throw new NotFoundException(`Auth #${id} not found`);
    }
    return this.authRepository.save(auth);
  }

  async remove(id: string) {
    const auth = await this.authRepository.findOne({
      where: { id: parseInt(id) },
    });
    return this.authRepository.remove(auth);
  }
}
