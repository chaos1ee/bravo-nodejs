import * as compose from 'koa-compose';
import * as glob from 'glob';
import { resolve } from 'path';

const registerRouter = () => {
  let routes: any[] = [];
  glob
    .sync(resolve(__dirname, './', '**/*.ts'), {
      ignore: resolve(__dirname, './index.ts')
    })
    .map((path: string) => {
      routes.push(require(path).routes());
      routes.push(require(path).allowedMethods());
    });

  return compose(routes);
};

module.exports = registerRouter;
