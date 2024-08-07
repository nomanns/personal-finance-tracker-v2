import { Breadcrumb, Layout, theme } from 'antd';
import { Content,  Header } from 'antd/es/layout/layout';
import './styles.css'


const RootLayout = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();

  return (
  <Layout className='root-layout'>
    <Header
        style={{
        display: 'flex',
        width: '100%',
        padding: '0.2rem 2rem',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#eee',
        }}>
        <div className="logo" ><p>Expense<span>T</span>racker</p></div>
        <div className='user-profile'>
            <p>User</p>
        </div>
    </Header>
    <Content
        style={{
        padding: '0 1.8rem',
        background: 'radial-gradient(circle, rgba(241,192,213,1) 8%, rgba(148,187,233,0.9584033442478554) 100%)',
        display: 'flex', flexDirection: 'column', gap: '0.8rem'
        }}>
        <Breadcrumb style={{ margin: '0.6rem 0', marginLeft: '0.5rem' ,flex: 1, maxHeight: '1.4rem'}}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{
            background: colorBgContainer,
            maxHeight: '90%',
            flex: 2,
            padding: 8,
            borderRadius: borderRadiusLG,}}> Content
        </div>
    </Content>
    {/* <Footer style={{
        textAlign: 'center',
        padding: '14px 50px'}}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
    </Footer> */}
  </Layout>);
}

export default RootLayout