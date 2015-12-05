import Ember from 'ember';

export default Ember.Component.extend({
  isExpanded: false,
  actions: {
    toggleExpansion(){
      this.toggleProperty('isExpanded')
    }
  }
})
