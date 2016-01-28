"use strict";

var _ = require('underscore');
var async = require('async');

module.exports = (Project, callback) => {

  function bootstrapOne(index, callback) {
    Project.findOrCreate({index: index, name: `Project ${index}`}, callback);
  }

  async.each(_.range(10), bootstrapOne, callback);
}
