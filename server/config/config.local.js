'use strict';

const ms = require('ms');
module.exports = () => {
    const config = exports = {};

    config.vuessr = {
        cache: false,
        renderOptions: {
            directives: {
                mshow(node, dir) {
                    // 基于指令绑定元数据(metadata)转换 vnode
                    let style = node.data.style || (node.data.style = {});
                    if (!dir.value) {
                        if (Array.isArray(style)) {
                            style.push({display: 'none'});
                        } else {
                            style.display = 'none';
                        }
                    }else{
                        if (Array.isArray(style)) {
                            style.push({display: ''});
                        } else {
                            style.display = '';
                        }
                    }

                }
            }
        },
        cachePage: {
            lru: { max: 1000, maxAge: ms('5s') }
        }
    };

    config.proxies = {
        target: {
            // 类似 Nginx Upstream 概念，用来管理代理的服务端
            upstream: {
                // 配置代理的服务端
                server: [
                    // 可直接传入 Host，如 ["goods.kaola.com"]
                    // local 默认走 mock
                    // 也可以在此配置 Target 的 ip: port，直连
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
