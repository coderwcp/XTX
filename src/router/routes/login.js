import Logout from '@/views/Logout'

export default {
  path: '/login',
  component: Logout,
  name: 'Logout',
  children: [
    {
      path: '',
      component: '',
      name: '',
      mata: {

      }
    }
  ]
}
