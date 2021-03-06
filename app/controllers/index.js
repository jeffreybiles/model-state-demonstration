import Ember from 'ember';

export default Ember.Controller.extend({
  rootStates: Ember.computed.filterBy('model', 'name', 'root'),
  rootState: Ember.computed.alias('rootStates.firstObject'),

  highlightedFlag: null,
  actions: {
    highlightFlag(flag){
      this.set('highlightedFlag', flag)
    }
  }
})
