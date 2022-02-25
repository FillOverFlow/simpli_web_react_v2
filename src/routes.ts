import React from "react";
import { RouteComponentProps } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'

export interface RouteType { 
    path: string,
    name: string, 
    exact? : boolean,
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}

const routeList : RouteType[] =  [
    {
        name: 'Home',
        path: '/',
        component: Home,
        exact: true,

    },
    {
        name : 'About', 
        path : '/about',
        component: About,
        exact: true,
    }
    
];

export default routeList