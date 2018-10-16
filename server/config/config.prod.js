'use strict';

module.exports = function(appInfo) {
    const config = {};

    config.notfound = {
        pageUrl: '/fail.html'
    };

    config.onerror = {
        errorPageUrl: '/error.html', // 重定向
        // templatePath: path.join(appInfo.baseDir, 'app/view/ERROR_500.html'), // render，模板语法 Mustache
    };

    config.cluster = {
        listen: {
            port: 9191 // 线上环境统一 9191
        }
    };

    config.proxies = {
        tomcat: {
            upstream: {
                check: {
                    // 线上启用健康检查
                    enable: true,
                }
            }
        }
    };

    config.art = {
        compileDebug: false,
        cache: true,
        minimize: true
    };

    return config;
};