import './WhoWe.css'

import aboali from '../media/aboali.jpeg'
import workshop from '../media/workshop.png'


const WhoWe = () => {
    return (  
        <div className='who-con'>
            <div className='who-item'>
                <img src={aboali} alt='person'  className= 'who-image'/>
                <div className='who-desc'>
                    <h1>
                        Muhammad Abo Ali
                    </h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi illo dicta mollitia ex quas, error eveniet perspiciatis, perferendis dolorem minima ea nihil dolores quis expedita id facilis non. Alias, quas!</p>
                </div>
            </div>
            <div className='who-item2'>
                <img src={workshop} alt='workshop' className= 'who-image'/>
                <div className='who-desc'>
                    <h1>
                        WorkShop
                    </h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi illo dicta mollitia ex quas, error eveniet perspiciatis, perferendis dolorem minima ea nihil dolores quis expedita id facilis non. Alias, quas!</p>
                </div>
            </div>

        </div>
    );
}
 
export default WhoWe;
