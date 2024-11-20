// Dùng cho router ko cần đăng nhập cũng xem đc
import {HeaderOnly} from '~/Components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly},
    { path: '/search', component: Search, layout: null},
];

// Phải đăng nhập mới xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
