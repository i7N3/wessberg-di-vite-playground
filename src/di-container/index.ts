// https://github.com/wessberg/DI
import { DIContainer } from '@wessberg/di';

// container:
// - knows which objects with which interfaces are required by each of the modules
// - knows which objects these interfaces implement
// - creates and injects automatically dependencies into modules
const container = new DIContainer();

interface Logger {
  log(message: string): void;
}

export class ConsoleLogger implements Logger {
  public log = (message: string): void => console.log(message);
}

container.registerSingleton<Logger, ConsoleLogger>();

export const diEntry = (): void => {
  const logger = container.get<Logger>();
  logger.log('log here');
};
