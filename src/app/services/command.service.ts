import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Root, RootEdit } from '../models/iImages';

@Injectable({
  providedIn: 'root'
})
export class CommandService {
  public APIKEY = '5hagZGgxW3sqavExEc0efvM6NQNDL5R0';
  private readonly url: string = 'https://api.giphy.com/v1/gifs/trending?api_key=5hagZGgxW3sqavExEc0efvM6NQNDL5R0&limit=15&offset=0&rating=g&bundle=messaging_non_clips';

  constructor(private http: HttpClient) {}

  getImages(): Observable<Array<RootEdit>> {
    return this.http.get(this.url).pipe(map((data:any) => {
        return this.transformerFunc(data.data);
      }
    ));
  }

  private transformerFunc(data: Array<Root>):Array<RootEdit> {
    let list:Array<RootEdit> = [];
    const modifiedTypes = data.map((type) => {
      const modifiedType:any = { ...type };

        modifiedType.bitlyGifUrl = type.bitly_gif_url;
        delete modifiedType.bitly_gif_url;

        modifiedType.bitlyUrl = type.bitly_url;
        delete modifiedType.bitly_url;

        modifiedType.contentUrl = type.content_url;
        delete modifiedType.content_url;

        modifiedType.embedUrl = type.embed_url;
        delete modifiedType.embed_url;

        modifiedType.sourceTld = type.source_tld;
        delete modifiedType.source_tld;

        modifiedType.sourcePostUrl = type.source_post_url;
        delete modifiedType.source_post_url;

        modifiedType.isSticker = type.is_sticker;
        delete modifiedType.is_sticker;

        modifiedType.importDatetime = type.import_datetime;
        delete modifiedType.import_datetime;

        modifiedType.trendingDatetime = type.trending_datetime;
        delete modifiedType.trending_datetime;

        modifiedType.analyticsResponsePayload = type.analytics_response_payload;
        delete modifiedType.analytics_response_payload;

      list.push(modifiedType);
    });

    return list;
  }
}

