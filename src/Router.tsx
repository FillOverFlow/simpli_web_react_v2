import { BrowserRouter, Route, Switch } from 'react-router-dom'
import routesList, { RouteType } from './routes'

const mapRoutes = (routes: RouteType[]) => (
    routes.map(
        ({ path, component, name, exact }, i) => {
            return <Route key={i} path={path} component={component} exact={exact} />
        }
    )
);

export default () => {
    const routes = mapRoutes(routesList)
    return (
        <>
            <BrowserRouter>
                <Switch>
                    {routes}
                </Switch>
            </BrowserRouter>
        </>
    )
}