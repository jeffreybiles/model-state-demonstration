module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'ember-data-model-states',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
