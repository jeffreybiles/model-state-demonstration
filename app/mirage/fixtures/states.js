export default [
  {
    id: 1,
    name: 'root',
    parent: null,
    children: [2, 6],
    flags: ['valid']
  }, {
    id: 2,
    name: 'deleted',
    parent: 1,
    children: [3, 4, 5, 16],
    flags: ['valid', 'dirty', 'deleted', 'loaded']
  }, {
    id: 3,
    name: 'deleted.saved',
    parent: 2,
    flags: ['valid', 'deleted', 'loaded']
  }, {
    id: 4,
    name: 'deleted.uncommitted',
    parent: 2,
    flags: ['valid', 'dirty', 'deleted', 'loaded']
  }, {
    id: 5,
    name: 'deleted.inFlight',
    parent: 2,
    flags: ['valid', 'dirty', 'deleted', 'loaded', 'saving']
  }, {
    id: 6,
    name: 'empty',
    parent: 1,
    flags: ['valid', 'empty']
  }, {
    id: 7,
    name: 'loaded',
    parent: 1,
    children: [8, 11, 12],
    flags: ['valid', 'loaded']
  }, {
    id: 8,
    name: 'loaded.created',
    parent: 7,
    children: [9, 10, 17],
    flags: ['valid', 'dirty', 'loaded', 'new']
  }, {
    id: 9,
    name: 'loaded.created.uncommitted',
    parent: 8,
    flags: ['valid', 'dirty', 'loaded', 'new']
  }, {
    id: 10,
    name: 'loaded.created.inFlight',
    parent: 8,
    flags: ['valid', 'dirty', 'loaded', 'new', 'saving']
  }, {
    id: 11,
    name: 'loaded.saved',
    parent: 7,
    flags: ['valid', 'loaded']
  }, {
    id: 12,
    name: 'loaded.updated',
    parent: 7,
    children: [13, 14, 18],
    flags: ['valid', 'dirty', 'loaded']
  }, {
    id: 13,
    name: 'loaded.updated.uncommitted',
    parent: 12,
    flags: ['valid', 'dirty', 'loaded']
  }, {
    id: 14,
    name: 'loaded.updated.inFlight',
    parent: 12,
    flags: ['valid', 'dirty', 'loaded', 'saving']
  }, {
    id: 15,
    name: 'loading',
    parent: 1,
    flags: ['valid', 'loading']
  }, {
    id: 16,
    name: 'deleted.invalid',
    parent: 2,
    flags: ['dirty', 'deleted', 'loaded']
  }, {
    id: 17,
    name: 'loaded.created.invalid',
    parent: 8,
    flags: ['dirty', 'loaded']
  }, {
    id: 18,
    name: 'loaded.updated.invalid',
    parent: 12,
    flags: ['dirty', 'loaded']
  }
]
