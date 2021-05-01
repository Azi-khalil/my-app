import {useState} from 'react'

import './Gallary.css'

import GallaryData from '../data/GallaryData'
import FabricMaterial from '../data/FabricMaterial'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'


const Gallary = () => {

    const [current, setCurrent] = useState(0)
    const length = GallaryData.length


    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)

    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)

    }
   


    return ( 
        <>
        <div className='slider'>
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            {GallaryData.map((item, index) => {
                return(
                    <div key={index}>
                    {index === current && 
                        (
                            <img className='gallary-img'  src={item.image} alt='sofaimage' />
                            )} 
                    </div> 
                )
            })}
        </div>
        <h1 style={{textAlign: 'center'}}>Pick Your Fabric Material</h1>
        <div className='fabricMat'>
            {FabricMaterial.map((item, index) => {
                return(
                    <div key={index} style={{backgroundImage: `url(${item.image})`}} className='fabricItem'>
                        <div  className='itemText'>
                        <h1>{item.title}</h1>
                        <br></br>
                        <h4>{item.style}</h4>
                        <h6>{item.props}</h6>
                        </div>
                        <span className='desc'>{item.description}</span>
                    </div>
                )
            })}

        </div>

        </ >
     );
}
 
export default Gallary;