import cursoController from '../controller/curso-controller';

export default class cursoRoutes {
  static init(router) {
    router
      .route('/api/curso')
      .get(cursoController.getAll)
      .post(cursoController.createNew);

    router
      .route('/api/curso/:id')
      .delete(cursoController.removeById);
  }
}
