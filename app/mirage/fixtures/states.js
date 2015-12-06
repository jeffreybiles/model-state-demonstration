export default [
  {
    id: 1,
    name: 'root',
    parent: null,
    children: [2, 6]
  }, {
    id: 2,
    name: 'deleted',
    parent: 1,
    children: [3, 4, 5, 16]
  }, {
    id: 3,
    name: 'deleted.saved',
    parent: 2
  }, {
    id: 4,
    name: 'deleted.uncommitted',
    parent: 2
  }, {
    id: 5,
    name: 'deleted.inFlight',
    parent: 2
  }, {
    id: 6,
    name: 'empty',
    parent: 1
  }, {
    id: 7,
    name: 'loaded',
    parent: 1,
    children: [8, 11, 12]
  }, {
    id: 8,
    name: 'loaded.created',
    parent: 7,
    children: [9, 10, 17]
  }, {
    id: 9,
    name: 'loaded.created.uncommitted',
    parent: 8
  }, {
    id: 10,
    name: 'loaded.created.inFlight',
    parent: 8
  }, {
    id: 11,
    name: 'loaded.saved',
    parent: 7
  }, {
    id: 12,
    name: 'loaded.updated',
    parent: 7,
    children: [13, 14, 18]
  }, {
    id: 13,
    name: 'loaded.updated.uncommitted',
    parent: 12
  }, {
    id: 14,
    name: 'loaded.updated.inFlight',
    parent: 12
  }, {
    id: 15,
    name: 'loading',
    parent: 1
  }, {
    id: 16,
    name: 'deleted.invalid',
    parent: 2,
    isValid: false
  }, {
    id: 17,
    name: 'loaded.created.invalid',
    parent: 8,
    isValid: false
  }, {
    id: 18,
    name: 'loaded.updated.invalid',
    parent: 12,
    isValid: false
  }
]
