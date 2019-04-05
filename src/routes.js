import Home from './components/Home';
import QRCode from './components/QRCode';
import BarCode from './components/BarCode';
import Business from './components/Business';

export const routes = [
    {path: '/', component: Home},
    {path: '/qr-code', component: QRCode},
    {path: '/bar-code', component: BarCode},
    {path: '/business', component: Business},
    {path: '*', redirect: '/'}
];