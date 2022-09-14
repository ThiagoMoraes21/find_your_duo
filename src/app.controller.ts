import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("games")
  async getGames(): Promise<any[]> {
    return await this.appService.getGames();
  }

  @Get("games/:id/ads")
  getGamesAds(@Param("id") id: string): any[] {
    return this.appService.getGamesAds(id);
  }

  @Get("ads/:id/discord")
  getAdsDiscord(@Param("id") id: string): any {
    return this.appService.getAdsDiscord(id);
  }

  @Post("ads")
  createAds(): any[] {
    return this.appService.createAds();
  }
}
