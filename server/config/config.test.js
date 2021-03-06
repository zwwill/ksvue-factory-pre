'use strict';

module.exports = function(appInfo) {
    const config = exports = {};

    let zkHosts = 'kaola-test-dubbozk01.v1.kaola.jdb.vpc:2181,kaola-test-dubbozk02.v1.kaola.jdb.vpc:2181,kaola-test-dubbozk03.v1.kaola.jdb.vpc:2181';

    config.addressing = {
        zkHosts,
        catchErrorOnStarting: true
    };

    return config;
};
