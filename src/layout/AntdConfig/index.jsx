import './index.less';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';

const AntdConfig=({children})=> (
  <ConfigProvider locale={zhCN}>
    {children}
  </ConfigProvider>
);

export default AntdConfig;
