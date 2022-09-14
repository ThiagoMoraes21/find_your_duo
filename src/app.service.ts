import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getGames(): any[] {
    return ["test"];
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
