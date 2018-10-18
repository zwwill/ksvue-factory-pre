import Network from '../../mods/Network'

function getUserById(id) {
  return Network.get('/api/user',{id})
}

export default {
  getUserById
}