export default {
  path: 'tables',
  component: require('../../components/common/Layout').default,

  childRoutes: [
    {
      path: 'danh-sach-don-hang',
      getComponent(nextState, cb){
        System.import('./containers/Datatables').then((m)=> {
          cb(null, m.default)
        })
      }
    }
    ,
    {
      path: 'tao-don-hang-moi',
      getComponent(nextState, cb){
        System.import('./containers/NormalTables').then((m)=> {
          cb(null, m.default)
        })
      }
    }
  ]


};
