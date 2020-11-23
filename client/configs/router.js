import {RouterFactory, nativeScrollBehavior} from 'meteor/akryum:vue-router2';
import routes from '../routes';


const routerFactory = new RouterFactory({
    mode: 'history',
    scrollBehavior: nativeScrollBehavior
})

RouterFactory.configure((factory) => {
    factory.addRoutes(routes)
})

export default routerFactory;