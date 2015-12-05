import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('name'),
  parent: DS.belongsTo('state'),
  children: DS.hasMany('children'),
  transitions: DS.hasMany('transition'),

  isDeleted: DS.attr('boolean', {defaultValue: false}),
  isEmpty: DS.attr('boolean', {defaultValue: false}),
  isError: DS.attr('boolean', {defaultValue: false}),
  isLoaded: DS.attr('boolean', {defaultValue: false}),
  isLoading: DS.attr('boolean', {defaultValue: false}),
  isNew: DS.attr('boolean', {defaultValue: false}),
  isReloading: DS.attr('boolean', {defaultValue: false}),
  isSaving: DS.attr('boolean', {defaultValue: false}),
  isValid: DS.attr('boolean', {defaultValue: false})
});
