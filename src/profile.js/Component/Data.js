import React from 'react'
import propTypes from 'prop-types'
const Data = ({data,fun}) => {
    return (
        <div>
        <h1>  {data.fullName } </h1>
        <h2> {data.profession }</h2>
        <button onClick={() => fun (data.fullName)} > view user profile </button>
        </div>
    )
}
Data.defaultProps={
    fullName:'hello'
}
Data.propTypes = {
    data:propTypes.array
}
export default Data

