import React,{Component} from 'react';
import {Layout, Menu,Icon} from 'antd';
import {Link, Redirect} from 'react-router-dom';
import '../asset/css/home.css';
import logo from '../asset/img/logo.svg';
const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;
class Home extends Component{
    constructor(){
        super();
        this.state={
            openkeys: []
        }
    }
    render(){
        return (
            <Layout className="home-page" style={{height:'100vh'}}>
                <Sider
                    style={{overflow: 'auto', height: '100vh', position: 'fixed', left: 0, zIndex: '10'}}
                    width={256}
                >
                    <div className="home-logo">
                        <a href="">
                            <img src={logo} alt=""/>
                            <h1>Ant Design Pro</h1>
                        </a>
                    </div>

                    <Menu
                        theme='dark'
                        onClick={this.handleClick}
                        defaultOpenKeys={[this.props.defaultOpenKeys]}
                        selectedKeys={[this.props.selected]}
                        mode="inline"

                    >
                        <SubMenu key="sub1" title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}>
                            <Menu.Item key="1">
                                <Link to='/'>分析页</Link>
                            </Menu.Item>
                            <Menu.Item key="2">监控页</Menu.Item>
                            <Menu.Item key="3">工作台</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigtion Two</span></span>}>
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <SubMenu key="sub3" title="Submenu">
                                <Menu.Item key="7">Option 7</Menu.Item>
                                <Menu.Item key="8">Option 8</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ marginLeft: 256,background: '#f0f2f5',minHeight: 'calc(100vh - 64px)'}}>
                    <Header className="admin-header" style={{width: '100%',boxShadow:' 0 1px 4px rgba(0,21,41,.08)',background: '#fff'}}>

                    </Header>
                    <Content style={{margin: '24px 16px 0', overflow: 'initial'}}>
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
export default Home;