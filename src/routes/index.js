import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OderPage from "../pages/OderPage/OderPage";
import ProductsPage from './../pages/ProductsPage/ProductsPage';

export const routes =[
    {
        path: '/',
        page: HomePage
    },
    {
        path: '/Order',
        page: OderPage
    },
    {
        path: '/Products',
        page: ProductsPage
    },  
    {
        path: '*',
        page: NotFoundPage
    }
]