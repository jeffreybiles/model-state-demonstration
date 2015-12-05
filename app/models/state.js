import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  parent: DS.belongsTo('state', {inverse: 'children'}),
  children: DS.hasMany('state', {defaultValue: [], inverse: 'parent'}),
  transitions: DS.hasMany('transition', {defaultValue: []}),

  isDeleted: DS.attr('boolean', {defaultValue: false}),
  isEmpty: DS.attr('boolean', {defaultValue: false}),
  isError: DS.attr('boolean', {defaultValue: false}),
  isLoaded: DS.attr('boolean', {defaultValue: false}),
  isLoading: DS.attr('boolean', {defaultValue: false}),
  isNew: DS.attr('boolean', {defaultValue: false}),
  isReloading: DS.attr('boolean', {defaultValue: false}),
  isSaving: DS.attr('boolean', {defaultValue: false}),
  isValid: DS.attr('boolean', {defaultValue: false}),

  shortName: Ember.computed('name', function(){
    return this.get('name').split('.').get('lastObject')
  })
});
