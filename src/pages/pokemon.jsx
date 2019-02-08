import React, { Component } from 'react';
import {Card, Progress, List, Tag} from 'antd';

const { Meta } = Card;

class PokemonPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      pokeStats: [],
      name: '',
      weight:null,
      height:null,
      sprite:'',
      team: [],
      stats:[],
      loading:true,
      id:null,
      types:[],
      moves:[]
    }
  }

  componentDidMount(){

    const pokeName = `https://pokeapi.co/api/v2/pokemon/${this.props.match.params.pokemon}`;
    
    fetch(pokeName,{
      method:'GET',
    })
    .then( response => response.json())
    .then( json => this.setState({ 
      pokeStats: json, 
      name:json.name, 
      height:json.height, 
      weight:json.weight, 
      sprite:json.sprites.front_default,
      stats: json.stats,
      loading:false,
      id: json.id,
      types:json.types,
      moves: json.moves
    }))
    
  }

  render(){

    const { types, stats, loading } = this.state;
    console.log(this.state.pokeStats)
    
    return(
      <div>
      <Card
      style={{ width:300,marginBottom:10 }}  loading={loading}
      >
      <img src={this.state.sprite} alt={this.state.name}/>
      
      <Meta
        title={this.state.name}
        description={this.state.entry}/>
        {
          types.map((type,i) => {
            return(
              <Tag className={type.type.name} color key={i}>{type.type.name}</Tag>
            )
          })
        }
    </Card>
    
    <Card style={{width:500}} loading={loading}>
    <List>
      {
        stats.map((stat,i) => {
          return(
            <List.Item.Meta title={stat.stat.name} description={<Progress percent={stat.base_stat} format={percent => percent}/>} key={i}/>
          )
        })
      }
    </List> 
    </Card>
        
      <div>Weight: {(this.state.weight /4.536).toFixed(2)} lbs</div>
      <div>Height: {(this.state.height/3.048).toFixed(2)} ft</div>
        
        
      </div>
    )
  }
};

export default PokemonPage;