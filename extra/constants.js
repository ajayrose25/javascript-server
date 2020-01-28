export const permissions = {
  'getUsers': {
  all: ['head-trainer'],
  read : ['trainee', 'trainer'],
  write : ['trainer'],
  delete: [],
  }
}

const {getUsers} = permissions;