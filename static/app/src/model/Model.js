var Util = require('Util.js');
var Database = require('model/Database.js');

//model
//http://githut.info/
exports.TopProgramLan = [{"id": "22,106", "language": "JavaScript, CoffeeScript"}, {
  "id": "133,135",
  "language": "CSS"
}, {"id": "3,39", "language": "HTML"}, {"id": 137, "language": "Swift"}, {
  "id": 35,
  "language": "Objective-C"
}, {"id": 23, "language": "Java"}, {"id": 19, "language": "Python"}, {"id": 24, "language": "PHP"}, {
  "id": 32,
  "language": "Ruby"
}, {"id": 28, "language": "C"}, {"id": 16, "language": "C++"}, {"id": 6, "language": "C#"}, {
  "id": 55,
  "language": "Go"
}, {"id": 51, "language": "Perl"}, {"id": "104,109", "language": "Clojure, ClojureScript"}, {
  "id": 40,
  "language": "Haskell"
}, {"id": 54, "language": "Lua"}, {"id": 20, "language": "Matlab"}, {"id": 144, "language": "R"}, {
  "id": 47,
  "language": "Scala"
}, {"id": "69,78,146", "language": "Shell"}, {"id": 29, "language": "Lisp"}, {"id": 42, "language": "ActionScript"}];

exports.BeanHelpers = new function () {
  this.getRandomLabelType = function () {
    var types = ['primary', 'secondary', 'success', 'info', 'warning', 'danger'];
    return Util.randomList(types, 1)[0];
  };

  this.getKeyWordReg = function (key) {
    return new RegExp('([\\-_\\w\\d\\/\\$]{0,}){0,1}' + key + '([\\-_\\w\\d\\$]{0,}){0,1}', 'gi');
  }
};
exports.Searchcode = require('./SearchcodeModel');
exports.YoudaoTranslate = require('./YoudaoTranslateModel');
exports.Bookmark = require('./BookmarkModel');
exports.DDMS = require('./DDMSModel');

//init DB
Database.schemaBuilder.connect({
  storeType: Util.os.ios?lf.schema.DataStoreType.WEB_SQL: null
}).then(function (db) {
  $(window).trigger('DB:ready',db);
});
