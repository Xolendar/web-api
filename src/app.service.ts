import { Injectable } from '@nestjs/common';
import * as os from 'os';

@Injectable()
export class AppService {

  private count = 0;
  getHello(): string {
    return 'Hello World!';
  }

  getHostname() : string {
    return 'Vous venez de faire une requête sur l\'instance '+os.hostname();
  }

}
