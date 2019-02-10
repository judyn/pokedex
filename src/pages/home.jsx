import React, { Component } from 'react';
import {Card, Icon, List} from 'antd';
import { Link } from 'react-router-dom';

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

  render(){
    const { pokemon, loading, team } = this.state;
    
    return(
      <div>
        <List>
          {
            team.map((team,i) => {
              return(
                <div>{team}</div>
              )
            })
          }
          
        </List>
        <List loading={loading} 
              grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 4,}}
              dataSource={pokemon}
              renderItem = { (mon,i) => (
                <List.Item >
                  <Card title={mon.name} size="small" hoverable extra={<Icon type="plus-circle" theme="filled" />} style={{marginBottom:10,textAlign:'center'}} key={i} >             
                    <Link to={`/p/${mon.name}`}  >
                      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`} alt={mon.name} />
                    </Link>
                  </Card>
                </List.Item>
              )}
        >
        </List>
        
        
      </div>
    )
  }
};

export default Home;