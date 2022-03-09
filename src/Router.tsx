import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AppLayout from './components/layout/AppLayout';
import AIFarm from './pages/aifarm';
import Farm from './pages/farm';
import YourPosition from './pages/your_position';
import Stake from './pages/stake';
import DocumentPage from './pages/document';
// import routesList, { RouteType } from './routes';

// const mapRoutes = (routes: RouteType[]) =>
//   routes.map(({ path, component, name, exact }, i) => {
//     return <Route key={i} path={path} element={component} children />
//   })

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = props => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<AIFarm />} />
                    <Route path="aifarm" element={<AIFarm />} />
                    <Route path="farm" element={<Farm />} />
                    <Route path="position" element={<YourPosition />} />
                    <Route path="stake" element={<Stake />} />
                    <Route path="document" element={<DocumentPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Application;
