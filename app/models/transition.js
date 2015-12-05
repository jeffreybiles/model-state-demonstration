import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  from: DS.belongsTo('state'),
  to: DS.belongsTo('state'),
  notes: DS.attr('string')
});
