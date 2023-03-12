import type { Logger } from '../logger';

export class Counter {
  constructor(private logger: Logger) {}

  private log = (msg: string): void => {
    this.logger.log("Hello. I'm counter a logger. " + msg);
  };

  sayHello = (msg: string): void => {
    this.log(msg);
  };
}
