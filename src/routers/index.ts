import * as compose from 'koa-compose';
import * as glob from 'glob';
import { resolve } from 'path';

export const registerRouter = () => {
  let routers: any[] = [];
  glob
    .sync(resolve(__dirname, './', '**/*.ts'), {
      ignore: resolve(__dirname, './index.ts')
    })
    .map((path: string) => {
      routers.push(require(path).routes());
      routers.push(require(path).allowedMethods());
    });

  return compose(routers);
};
