import { Injectable } from '@nestjs/common';
import { PrismaService } from './services/prisma.service';

@Injectable()
export class AppService {

  constructor(private readonly prisma: PrismaService) {}

  async getGames(): Promise<any[]> {
    return this.prisma.game.findMany();
  }

  getAds(): any[] {
    return [];
  }

  createAds(): any {
    return null;
  }

  getGamesAds(id: string): any[] {
    return [{ games: id }];
  }

  getAdsDiscord(id: string): any {
    return id;
  }
}
