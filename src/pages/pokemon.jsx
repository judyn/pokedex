import React, { Component } from 'react';
import {Card, Icon, Progress, List} from 'antd';

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
      speed:'',
      spdef: '',
      spatk: '',
      defense: '',
      attack: '',
      hp: ''
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
      speed: json.stats[0].base_stat,
      spdef: json.stats[1].base_stat,
      spatk: json.stats[2].base_stat,
      defense: json.stats[3].base_stat,
      attack: json.stats[4].base_stat,
      hp: json.stats[5].base_stat
    }))
  }

  render(){

    console.log(this.state.pokeStats);
    
    return(
      <div>
      <Card
      style={{ width: 300 }}
      actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
      
      >
      <img src={this.state.sprite} alt={this.state.name}/>
      <Meta
        //avatar={<Avatar src={`https://img.pokemondb.net/sprites/sun-moon/icon/gyarados.png`}/>}
        title={this.state.name}
        description="This is the description"
      />
    </Card>
        
    <Card>
    <List>
    <List.Item>
      <List.Item.Meta title="HP" description={<Progress percent={this.state.hp} format={percent => percent}/>}/>
    </List.Item>  
    <List.Item>
      <List.Item.Meta title="Speed" description={<Progress percent={this.state.speed} format={percent => percent}/>}/>
    </List.Item>
    <List.Item>
      <List.Item.Meta title="Attack" description={<Progress percent={this.state.attack} format={percent => percent}/>}/>
    </List.Item>
    <List.Item>
      <List.Item.Meta title="Defense" description={<Progress percent={this.state.defense} format={percent => percent}/>}/>
    </List.Item>
    <List.Item>
      <List.Item.Meta title="Special Attack" description={<Progress percent={this.state.spatk} format={percent => percent}/>}/>
    </List.Item>
    <List.Item>
      <List.Item.Meta title="Special Defense" description={<Progress percent={this.state.spdef} format={percent => percent}/>}/>
    </List.Item>
  </List>
    </Card>
        

        <div>Weight: {(this.state.weight /4.536).toFixed(2)} lbs</div>
        <div>Height: {(this.state.height/3.048).toFixed(2)} ft</div>
        
        
      </div>
    )
  }
};

export default PokemonPage;