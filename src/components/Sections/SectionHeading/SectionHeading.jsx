import React from 'react'

const SectionHeading = ({title}) => {
  return (
    <div className='flex flex-wrap justify-around'>
        <div>
        </div>     
        <p>{title}</p>
    </div>
  )
}

SectionHeading.defaultProps = {

}

SectionHeading.protoTypes = {
  title:String
}

export default SectionHeading
