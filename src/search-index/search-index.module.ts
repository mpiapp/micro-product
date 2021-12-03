import { Module } from '@nestjs/common';
import { SearchIndexController } from './search-index.controller';
import { AlgoliaModule } from 'nestjs-algolia';
import { SearchIndexService } from './search-index.service';

@Module({
  imports: [
    AlgoliaModule.register({
      applicationId: 'X0RKYDMJ0J',
      apiKey: '191cff9cbe16107cb946a1e374b5efa6',
    })
  ],
  controllers: [SearchIndexController],
  providers: [SearchIndexService],
  exports: [SearchIndexService]
})
export class SearchIndexModule {}
