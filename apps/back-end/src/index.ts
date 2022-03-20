import {BackEndApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {BackEndApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new BackEndApplication(options);
  await app.boot();
  await app.start();

  let url = app.restServer.url;
  url = url?.replace("[::1]", "localhost") // Hack to make it linkable in the console since it is very convenient for developing
  console.log(`  > Back-end: ${url}/\n`);

  return app;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
main().then(()=>{})
