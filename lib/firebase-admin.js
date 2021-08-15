const admin = require("firebase-admin");
const util = require("util");
const Connector = require("loopback-connector").Connector;

exports.initialize = function initializeDataSource(dataSource, callback) {
  dataSource.connector = new FirebaseAdmin(dataSource.settings);
  process.nextTick(() => {
    callback();
  });
};

class FirebaseAdmin {
  constructor(dataSourceProperties) {
    this._models = {};

    admin.initializeApp({
      credential: admin.credential.cert({
        clientEmail: dataSourceProperties.clientEmail,
        privateKey: dataSourceProperties.privateKey.replace(/\\n/g, "\n"),
        projectId: dataSourceProperties.projectId,
      }),
      databaseURL: dataSourceProperties.databaseURL,
    });
  }
}

util.inherits(FirebaseAdmin, Connector);
exports.FirebaseAdmin = FirebaseAdmin;
