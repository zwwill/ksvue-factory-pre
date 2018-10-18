'use strict';

/**
 * middleware 区
 * 越后面的插件的 middleware 先执行
 */
exports.network = {
    enable: true,
    package: '@kapp/network',
};

exports.vuessr = {
    enable: true,
    package: '@kapp/vuessr'
};

exports.health = {
    enable: true,
    package: '@kapp/health'
};

exports.rateLimiter = {
    enable: true,
    package: '@kapp/rate-limiter'
};

exports.trace = {
    enable: false,
    package: '@kapp/trace'
};

exports.kagent = {
    enable: true,
    package: '@kapp/kagent'
};
/**
 * middleware 区
 */

exports.mock = {
    enable: false,
    package: '@kaola/kapp-mock'
};

exports.grayscale = {
    enable: false,
    package: '@kapp/grayscale'
};

exports.art = {
    enable: true,
    package: 'egg-view-art'
};

exports.proxy = {
    enable: true,
    package: '@kapp/proxy'
};

exports.zookeeper = {
    enable: true,
    package: 'egg-zookeeper'
};

exports.disconf = {
    enable: true,
    package: '@kapp/disconf'
};

exports.addressing = {
    enable: true,
    package: '@kapp/addressing'
};

exports.kafka = {
    enable: true,
    package: '@kapp/kafka'
};
