import { Injectable } from '@nestjs/common';
import { AlgoliaService } from 'nestjs-algolia';

@Injectable()
export class SearchIndexService {
    constructor(private readonly algoliaService: AlgoliaService) {}

    async addRecordToIndex(
            indexName: string,
            record: any
        ): Promise<any> {
            const index = await this.algoliaService.initIndex(indexName);
            index.a

            return index.addObject(record);
    }
}
