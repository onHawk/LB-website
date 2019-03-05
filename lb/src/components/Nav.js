import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Layout, Menu, Icon, Row, Col } from 'antd';

import 'antd/dist/antd.css';
const { Header } = Layout;

class Nav extends Component {
  render() {
    return (
      <Header
        style={{
          width: '100%',
          display: 'flex',
          background: 'white',
          borderBottom: '1px solid #001529',
          height: '100px',
          position: 'fixed',
          top: 0,
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
          <Menu.Item>
            <Link to="/gallery">Our work</Link>
          </Menu.Item>
          <Menu.Item>link 3</Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default Nav;
