
import './Services.css'
import ServiceData from '../data/ServiceData'

const Services = () => {
    return ( 
        <div className='section'>
           <div className='services-intro'>
               <h1>Welcome To Our Workshop</h1>
               <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
           </div>
        <div className='services-videos' >
            {ServiceData.map((item, index) => { 
            return (
                <div className='services-video' key={index}>
                    <video autoPlay muted loop className='service-clip' >
                        <source src={item.video} type='video/mp4'  />
                    </video>
                    <div className='service-desc'>
                            <h1>{item.title} </h1>
                            <p>{item.desc}</p>
                    </div>
                </div>

            )
            })}
               
        </div>

        </div>
     );
}
 
export default Services;