import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import { Layout, Menu, Icon, Row, Col } from 'antd';

import 'antd/dist/antd.css';
const { Header, Content, Footer } = Layout;

class Home extends Component {
  render() {
    return (
      <Layout>
        <Header
          theme="light"
          style={{
            width: '100%',
            display: 'flex',
            background: 'white',
            borderBottom: '1px solid #001529',
            height: '100px',
            position: 'fixed',
          }}
        >
          <div
            // logo div
            style={{
              border: '2px solid red',
              color: 'white',
              width: '300px',
              height: '100px',
            }}
          />
          <Menu
            mode="horizontal"
            style={{
              lineHeight: '98px',
              width: '400px',
              borderBottom: 'none',
            }}
          >
            <Menu.Item>
              <a href="https://www.google.com" target="_blank">
                ex link
              </a>
            </Menu.Item>
            <Menu.Item>link 2</Menu.Item>
            <Menu.Item>link 3</Menu.Item>
          </Menu>
        </Header>

        <Layout style={{ marginTop: '100px' }}>
          <div
            style={{
              height: '80vh',
              border: '1px solid red',
              textAlign: 'center',
            }}
          >
            Homepage carrousel or bg image
          </div>

          <div>
            <Row
              style={{ maxWidth: '100%', height: '500px', fontSize: '20px' }}
            >
              <Col span={8} offset={3}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Col>
              <Col span={8} offset={2}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Col>
            </Row>
          </div>
        </Layout>
        <Footer>© 2019</Footer>
      </Layout>
    );
  }
}
export default Home;
