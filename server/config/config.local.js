'use strict';

module.exports = () => {
    const config = exports = {};
    config.proxies = {
        tomcat: {
            // 类似 Nginx Upstream 概念，用来管理代理的服务端
            upstream: {
                // 配置代理的服务端
                server: [
                    // 可直接传入 Host，如 ["goods.kaola.com"]
                    // local 默认走 mock
                    // 也可以在此配置 Tomcat 的 ip: port，直连
                    'http://127.0.0.1:' +  (Number( 3000 ) + 1)
                ],
                // 健康检查
                check: {
                    // 是否启用健康检查
                    enable: false,
                },
            }
        }
    };

    config.mock = {
        port: Number( 3000 ) + 1
    };

    config.art = {
        compileDebug: true,
        cache: false,
        minimize: false
    };
    
    return config;
};
