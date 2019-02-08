import React from 'react';
import { Card, Icon } from 'antd';
import { Link } from 'react-router-dom';

const pokeCard = (props) => {
  return(
    <Card title={props.name} size="small" extra={<Icon type="plus-circle" theme="filled" />} style={{marginBottom:10,textAlign:'center'}} >             
        <div>
          <Link to={`/p/${props.name}`}  >
            {props.name}
          </Link>
        </div>                  
    </Card>
  )
}

export default pokeCard;