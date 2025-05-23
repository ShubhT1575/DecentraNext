import React from 'react'
import RankingHead from './RankingHead'
import RankingRow from './RankingRow'

function RankingMain() {
  return (
    <div className="main-content app-content" id="m-content" style={{background:"linear-gradient(to left, #004e92, #000428)"}}>
      <div className="container-fluid">
        <RankingHead/>
        <RankingRow/>
      </div>
    </div>
  )
}

export default RankingMain