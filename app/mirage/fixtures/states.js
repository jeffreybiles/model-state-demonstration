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
    children: [3, 4, 5]
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
  }
]
