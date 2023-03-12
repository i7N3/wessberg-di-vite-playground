export interface Logger {
  log(message: string): void;
}

export class ConsoleLogger implements Logger {
  public log = (message: string): void => console.log(message);
}
