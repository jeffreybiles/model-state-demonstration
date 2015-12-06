import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  parent: DS.belongsTo('state', {inverse: 'children', async: true}),
  children: DS.hasMany('state', {defaultValue: [], inverse: 'parent', async: true}),
  transitions: DS.hasMany('transition', {defaultValue: [], async: true}),

  flags: DS.attr(),
  isDeleted: isX('deleted'),
  isDirty: isX('dirty'),
  isEmpty: isX('empty'),
  isError: isX('error'),
  isLoaded: isX('loaded'),
  isLoading: isX('loading'),
  isNew: isX('new'),
  isSaving: isX('saving'),
  isValid: isX('valid'),
  possibleFlags: ['isDeleted', 'isDirty', 'isEmpty', 'isError', 'isLoaded', 'isLoading', 'isNew',  'isSaving', 'isValid'],

  shortName: Ember.computed('name', function(){
    return this.get('name').split('.').get('lastObject')
  })
});

function isX(dependentKey) {
  return Ember.computed(`flags.${dependentKey}`, function() {
    return this.get('flags').includes(dependentKey);
  });
}
