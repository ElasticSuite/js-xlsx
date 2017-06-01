var miniExcludes = {
    "rql/README.md": 1,
    "rql/package": 1
  },
  amdExcludes = {
  },
  isTheFile = /xlsx\.full\.min\.js$/,
  isJsRe = /\.js$/,
  isTestRe = /\/test\//,
  isSpecificationRe = /\/specification\//;

var profile = {
  resourceTags: {
    test: function(filename, mid){
      return isTestRe.test(filename);
    },

    miniExclude: function(filename, mid){
      return !(isTheFile.test(filename));
    },

    copyOnly: function(filename, mid){
      return isTheFile.test(filename);
    }
  }
};
