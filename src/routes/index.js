import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OderPage from "../pages/OderPage/OderPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";
import ProductsPage from './../pages/ProductsPage/ProductsPage';

export const routes =[
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/Order',
        page: OderPage,
        isShowHeader: true
    },
    {
        path: '/Products',
        page: ProductsPage,
        isShowHeader: true
    },  
    {
        path: '/:type',
        page: TypeProductPage,
        isShowHeader: true
    },
    {
        path: '*',
        page: NotFoundPage,
        isShowHeader: true
    }
]