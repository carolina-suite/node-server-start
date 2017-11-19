
module.exports = [
  {
    model: { app: 'auth', model: 'Group' },
    fields: {
      name: 'admins',
      permissions: [
        { name: 'canCreate' },
        { name: 'canRead' },
        { name: 'canUpdate' },
        { name: 'canDelete' }
      ],
      verboseName: 'Administrators'
    }
  },
  {
    model: { app: 'auth', model: 'Group' },
    fields: {
      name: 'mods',
      permissions: [
        { name: 'canRead' },
        { name: 'canUpdate' },
        { name: 'canDelete' }
      ],
      verboseName: 'Moderators'
    }
  },
  {
    model: { app: 'auth', model: 'Group' },
    fields: {
      name: 'regulars',
      permissions: [
        { name: 'canRead' },
        { name: 'canUpdate' }
      ],
      verboseName: 'Regular Users'
    }
  },
  {
    model: { app: 'auth', model: 'User' },
    fields: { username: 'admin', isAdmin: true },
    methods: [
      { methodName: 'setPassword', args: ['admin123'] },
      { methodName: 'addGroups', args: [['admins']] }
    ]
  },
  {
    model: { app: 'auth', model: 'User' },
    fields: { username: 'applejack' },
    methods: [
      { methodName: 'setPassword', args: ['orange'] }
    ]
  },
  {
    model: { app: 'auth', model: 'User' },
    fields: { username: 'pinkiepie' },
    methods: [
      { methodName: 'setPassword', args: ['pink'] }
    ]
  },
  {
    model: { app: 'auth', model: 'User' },
    fields: { username: 'twilightsparkle' },
    methods: [
      { methodName: 'setPassword', args: ['purple'] }
    ]
  },
  {
    model: { app: 'auth', model: 'User' },
    fields: { username: 'rarity' },
    methods: [
      { methodName: 'setPassword', args: ['white'] }
    ]
  },
  {
    model: { app: 'auth', model: 'User' },
    fields: { username: 'rainbowdash' },
    methods: [
      { methodName: 'setPassword', args: ['blue'] }
    ]
  },
  {
    model: { app: 'auth', model: 'User' },
    fields: { username: 'fluttershy' },
    methods: [
      { methodName: 'setPassword', args: ['yellow'] }
    ]
  }
];
