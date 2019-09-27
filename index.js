module.exports = (config = {}) =>
  require('secret-stack')(config)
    .use(require('ssb-db'))
    .use(require('ssb-replicate'))

    .use(require('ssb-about'))
    .use(require('ssb-backlinks'))
    .use(require('ssb-blobs'))
    .use(require('ssb-ebt'))
    .use(require('ssb-friends'))
    .use(require('ssb-gossip'))
    .use(require('ssb-invite'))
    .use(require('ssb-links'))
    .use(require('ssb-local'))
    .use(require('ssb-logging'))
    .use(require('ssb-master'))
    .use(require('ssb-no-auth'))
    .use(require('ssb-onion'))
    .use(require('ssb-ooo'))
    .use(require('ssb-plugins'))
    .use(require('ssb-query'))
    .use(require('ssb-tangle'))
    .use(require('ssb-unix-socket'))
    .use(require('ssb-ws'))
