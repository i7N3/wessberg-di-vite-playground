// https://github.com/wessberg/DI
import { DIContainer } from '@wessberg/di';

import { Counter } from '../counter';
import { ConsoleLogger, type Logger } from '../logger';

// container:
// - knows which objects with which interfaces are required by each of the modules
// - knows which objects these interfaces implement
// - creates and injects automatically dependencies into modules
const container = new DIContainer();

// https://bespoyasov.me/blog/di-ts-in-practice/

container.registerSingleton<Logger, ConsoleLogger>();

const counterWithManualInjection = new Counter(console);

export const manualDi = (): void => {
  counterWithManualInjection.sayHello('manual');
};

container.registerSingleton<Counter>();

export const automaticDi = (): void => {
  const counterServiceWithAutoInjection = container.get<Counter>();
  counterServiceWithAutoInjection.sayHello('automatic');
};
