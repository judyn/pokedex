import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import AboutPage from './pages/about';
import Home from './pages/home';
import PokemonPage from './pages/pokemon';
import './App.css';

const {
  Content, Sider,
} = Layout;


const SubMenu = Menu.SubMenu;


class App extends Component {
  state = {
    collapsed: false,
    team:[]
  };
  
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  
  render() {
  
    return (
      <Router className="App">
        <Layout>          
          <Sider breakpoint="lg"
            collapsedWidth="0"
          >
            <Menu
              theme="dark"
              mode="inline"
            >
              <Menu.Item key="2"><Link to="/pokedex">Home</Link></Menu.Item>
              <Menu.Item key="1"><Link to="/about">About</Link></Menu.Item>  
              <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Team</span></span>}>
              <SubMenu key="sub3" title="Team 1">
              <Menu.Item key="7">Pkmn 1</Menu.Item>
              <Menu.Item key="8">Pkmn 2</Menu.Item>
            </SubMenu>
            
          
        </SubMenu>
              
            </Menu>
            
          </Sider>

          <Layout>
            <Content style={{ margin: '0 16px' }}>
              <div style={{ padding: 24, background: '#fff', minHeight: '100vh' }}>
                <Route exact path="/about/" component={AboutPage}/>
                <Route exact path="/pokedex/" component={Home}/>
                <Route exact path="/p/:pokemon/" component={PokemonPage}></Route>
              </div>
            </Content>        
          </Layout>

        </Layout>
      </Router>
    );
  }
}

export default App;
