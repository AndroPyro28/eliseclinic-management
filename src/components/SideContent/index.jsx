import { Space, Layout, Divider } from 'antd';
import { Typography } from 'antd';

import logo from '@/style/images/logo.jpeg';

const { Content } = Layout;
const { Title, Text } = Typography;

export default function SideContent() {
  return (
    <Content
      style={{
        padding: '110px 30px 30px',
        width: '100%',
        maxWidth: '400px',
        margin: '0 auto',
      }}
      className="sideContent"
    >
      <div style={{ width: '100%' }}>
        <img
          src={logo}
          alt="Logo"
          style={{ margin: '0 auto 40px', display: 'block', width: '250px' }}
        />
        <div className="space20"></div>
        <Title level={3}>Tan&apos;s Pediatrician Multi Specialty Clinic</Title>
        <div className="space20"></div>
        <ul className="list-checked">
          <li className="list-checked-item">
            <Space direction="vertical">
              <Text strong>157, A.Bonifacio Avenue, Quezon City, Philippines</Text>
            </Space>
          </li>

          <li className="list-checked-item">
            <Space direction="vertical">
              <Text strong>philiptan@doctor.com</Text>
            </Space>
          </li>

          <li className="list-checked-item">
            <Space direction="vertical">
              <Text strong>Management System</Text>
            </Space>
          </li>
        </ul>
        <Divider />
      </div>
    </Content>
  );
}
