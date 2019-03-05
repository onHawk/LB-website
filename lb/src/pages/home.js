import React, { Component } from 'react';

import { Layout, Menu, Icon } from 'antd';

import 'antd/dist/antd.css';
const { Header, Content, Footer } = Layout;

class Home extends Component {
  render() {
    return (
      <Layout>
        <Header>
          <div>LOGO</div>
          <Menu mode="horizontal">
            <Menu.Item>link 1</Menu.Item>
            <Menu.Item>link 2</Menu.Item>
            <Menu.Item>link 3</Menu.Item>
          </Menu>
        </Header>
        <Content>
          <div>Something</div>
        </Content>
      </Layout>
    );
  }
}
export default Home;
