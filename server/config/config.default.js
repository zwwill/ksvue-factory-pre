'use strict';
const path = require('path');
const { getEnv, adapters } = require('@kapp/disconf-toolkit');

module.exports = function(appInfo) {
    const disconfEnv = getEnv(appInfo);

    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = `${appInfo.name}_1539693898962_4431`;

    // add your config here
    config.middleware = [];

    config.siteFile = {
        '/favicon.ico': 'https://haitao.nos.netease.com/25ab9d19-4fba-4ef7-8907-e8ff22a64fe4.ico'
    };

    config.view = {
        defaultViewEngine: 'art',
        root: [
            path.join(appInfo.baseDir, 'app/view')
        ].join(',')
    };

    config.httpclient = {
        enableDNSCache: true
    };

    config.security = {
        csrf: {
            // enable: false
        }
    };

    config.view = {
        defaultViewEngine: 'art',
        root: [
            path.join(appInfo.baseDir, 'app/view'),
        ].join(','),
    };
       
    config.art = {
        imports: require('../app/helper'),
        writeResp: true,
        debug: false,
        htmlMinifierOptions: {
            collapseWhitespace: true,
            minifyCSS: false,
            minifyJS: false,
            // 运行时自动合并：rules.map(rule => rule.test)
            ignoreCustomFragments: []
        }
    };

    config.proxies = {
        tomcat: {
            // 统一设置代理时的 headers
            // 类似于 proxy_set_header Host 'goods.kaola.com'
            // 不填会使用当前 node 应用获取到的 Host 值
            headers: {
                // host: 'm.kaola.com'
            },
            // 类似 Nginx Upstream 概念，用来管理代理的服务端
            upstream: {
                // 配置代理的服务端
                server: [
                    // 可直接传入 Host，如 ["goods.kaola.com"]
                    // 'https://m.kaola.com'
                ],
                // 健康检查
                check: {
                    // 是否启用健康检查
                    enable: false,
                    // 健康检查的路径
                    path: '/health/status',
                    // 健康检查间隔
                    interval: '5s'
                },
                // 负载均衡的类型
                // 可选值 ['Random', 'RoundRobin']
                loadBalancerType: 'Random'
            }
        }
    };

    config.addressing = {
        zkHosts: void 0,
        catchErrorOnStarting: false,
        timeout: 5000,
        webServers: {
            tomcat: {
                application: 'ksvue-factory-pre',
                env: appInfo.kaolaEnv
            }
        }
    };


    config.disconf = {
        groups: [
            {
                type: 'normal',
                name: 'trace_config',
                env: disconfEnv.normal,
                adapter: adapters.trace({
                    percent: `kaola#${appInfo.name}_sample_rate`
                })
            }, {
                type: 'normal',
                name: 'node_grayscale_config',
                env: disconfEnv.normal,
                adapter: adapters.grayscale({
                    name: `${appInfo.name.replace(/^kaola\-/, '').replace(/\-fed/, '')}_gc`
                    // 填写 UCC 上 `node_grayscale_config` 配置项内的 key，如 tradecenter_gc 或者 mykaola_gc
                })
            }, {
                type: 'rate-limiter',
                application: appInfo.name,
                env: disconfEnv.normal,
                adapter: adapters.rateLimiter()
            }, {
                // 静态配置填写字符串 'static'
                type: 'static',
                name: 'dubbo',
                // 静态配置 env 可填写 appInfo.kaolaEnv，代表集群名
                env: disconfEnv.static,
                // 静态配置必须带上 application 字段
                application: 'ksvue-factory-pre', // 填写后端 web 服务的应用名
                adapter: adapters.addressing()
            }
        ]
    };

    config.httpclient = {
        enableDNSCache: true
    };

    config.security = {
        csrf: {
            enable: true
        }
    };

    config.cluster = {
        listen: {
            port: Number('3000')
        }
    };

    return config;
};
