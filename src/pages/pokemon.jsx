import React, { Component } from 'react';
import {Card, Progress, List, Tag, Row, Col, Button, Icon} from 'antd';

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
      stats:[],
      loading:true,
      id:null,
      types:[],
      moves:[],
      xp:null
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
      xp: json.base_experience, 
      sprite:json.sprites.front_default,
      stats: json.stats,
      loading:false,
      id: json.id,
      types:json.types,
      moves: json.moves,
      
    }))
    
  }

  goBack(){
    window.history.back();
  }

  render(){

    const { types, stats, loading, moves, pokeStats } = this.state;
    console.log(this.state.pokeStats)
    
    return(
      <div style={{textTransform:'capitalize'}}>
        <Button type="primary" style={{marginBottom: 20}} onClick={() => this.goBack()}>
          <Icon type="left" />
        </Button>

        <Row gutter={24}>
          <Col xs={24} xl={12}>

            <Row gutter={16}>
              <Col span={8} xs={24} xl={8}>
                <Card loading={loading}
              >
              <img src={this.state.sprite} alt={this.state.name}/>
      
              <Meta title={this.state.name + ' #' + this.state.id }/>
                <div style={{marginTop:10}}>
                {
                  types.map((type,i) => {
                    return(
                      <Tag className={type.type.name} color key={i}>{type.type.name}</Tag>
                    )
                  })
                }
                </div>
            </Card>
          </Col>

          <Col span={8} xs={24} xl={8}>
            <Card title="Height" bordered={false}>
              {(this.state.height/3.048).toFixed(2)} ft / {(this.state.height*0.1).toFixed(2)} m
            </Card>
          </Col>

          <Col span={8} xs={24} xl={8}>
            <Card title="Weight" bordered={false}>
              {(this.state.weight /4.536).toFixed(2)} lbs / {(this.state.weight*0.1).toFixed(2)} kg
            </Card>
          </Col>
        </Row>
          
        
          <Card loading={loading} size="small" style={{marginTop: 24}} title="Stats">
          <List size="small">
            <List.Item>
              <List.Item.Meta title="Base XP" description={<Progress percent={pokeStats.base_experience} size="small" format={percent => percent}/>} /> 
            </List.Item>
            {
              stats.map((stat,i) => {
                return(
                  <List.Item>
                    <List.Item.Meta title={stat.stat.name} description={<Progress percent={stat.base_stat} size="small" format={percent => percent}/>} key={i}/>
                  </List.Item>
                  
                )
              })
            }
            </List> 
          </Card>
        </Col>

        <Col xs={24} xl={12}>
          <Card loading={loading} size="small" title="Moves">
            <List>
              {
                moves.map((move,i) => {
                  return(
                    <List.Item key={i}>{move.move.name}</List.Item>
                  )
                })
              }
            </List> 
          </Card>      
        </Col>
        </Row>  
      </div>
    )
  }
};

export default PokemonPage;