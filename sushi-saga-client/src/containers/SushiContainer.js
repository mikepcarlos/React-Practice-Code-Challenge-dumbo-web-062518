import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(sushi => <Sushi data={sushi} sushiClick={props.sushiClick} table={props.table}/>)}
        <MoreButton handleClick={props.handleClick}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
