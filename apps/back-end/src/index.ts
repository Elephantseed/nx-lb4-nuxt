import {BackEndApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {BackEndApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new BackEndApplication(options);
  await app.boot();
  await app.start();

  let url = app.restServer.url;
  url = url?.replace("[::1]", "localhost")
  console.log(`  > Back-end: ${url}/\n`);

  return app;
}

main().then(()=>{
  console.log('Loopback started correctly.')
})
