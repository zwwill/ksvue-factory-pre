'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
    const { router, controller } = app;


    router.get('/error.html', controller.common.error);
    router.get('/fail.html', controller.common.fail);

    router.get('/api/*', controller.common.proxy);
    router.get('*', controller.serverPage.auto);

};
