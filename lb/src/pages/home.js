import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Layout, Menu, Icon, Row, Col } from 'antd';

import 'antd/dist/antd.css';
const { Header, Content, Footer } = Layout;

class Home extends Component {
  render() {
    return (
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
          <Row style={{ maxWidth: '100%', height: '500px', fontSize: '20px' }}>
            <Col span={8} offset={3}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Col>
            <Col span={8} offset={2}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Col>
          </Row>
        </div>
        <Footer>© 2019</Footer>
      </Layout>
    );
  }
}
export default Home;
