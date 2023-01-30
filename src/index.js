import ReactDOM from 'react-dom/client';
import AntdConfig from './layout/AntdConfig';
import RouterConfig from './routers/RouterConfig';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AntdConfig>
        <RouterConfig/>
    </AntdConfig>
);
