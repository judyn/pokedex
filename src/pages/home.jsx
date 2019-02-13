import React, { Component } from 'react';
import {Card, Icon, List, Tabs, message, Input} from 'antd';
import { Link } from 'react-router-dom';

const TabPane = Tabs.TabPane;
const Search = Input.Search;

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      pokemon: [],
      loading:true,
      team:[]
    }
  }

  componentDidMount(){
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=151',{
      method:'GET',
    })
    .then( response => response.json())
    .then( json => this.setState({ pokemon: json.results, loading:false }))
  }

  addToTeam(name,id){
    let newTeam = [...this.state.team];
    
    newTeam.push({
      name:name,
      id:id
    })
    
    this.setState({ team: newTeam })

    message.success(`Added ${name} to team`);

  }

  removeFromTeam(index,name){
    this.setState({
      team: this.state.team.filter((_, i) => i !== index)
    });

    message.error(`Removed ${name} from team`);
  }

  searchPokemon(name){
    window.location.assign(`/p/${name}`)
  }

  render(){
    const { pokemon, loading, team } = this.state;
    
    return(
      <div>
      <Tabs type="card">
        <TabPane tab="List" key="1">
            
            <List loading={loading} 
              grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 4,}}
              dataSource={pokemon}
              renderItem = { (mon,i) => (
                <List.Item >
                  <Card title={mon.name} size="small" hoverable extra={<Icon type="plus-circle" theme="filled" onClick={() => this.addToTeam(mon.name, i+1)}  />} style={{marginBottom:10,textAlign:'center'}} key={i} >             
                    <Link to={`/p/${mon.name}`}  >
                      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`} alt={mon.name} />
                    </Link>
                  </Card>
                </List.Item>
              )}
            >
            </List>
        </TabPane>
        
        <TabPane tab="Team" key="2"> 
          <List 
            grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 4,}}
            dataSource={team}
            renderItem = { (mon,i) => (
              <List.Item >
                <Card title={mon.name} size="small" hoverable extra={<Icon type="minus-circle" theme="filled" onClick={() => this.removeFromTeam(i,mon.name)}  />} style={{marginBottom:10,textAlign:'center'}} key={i} >             
                  <Link to={`/p/${mon.name}`}  >
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${mon.id}.png`} alt={mon.name} />
                  </Link>
                </Card>
              </List.Item>
            )}
          >  
        </List>
        </TabPane>
        
        </Tabs>      
      </div>
    )
  }
};

export default Home;