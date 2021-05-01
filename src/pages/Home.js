import './Home.css';
import {Link, useHistory} from 'react-router-dom';



const styledIcon = {
    color: 'gold'
}



const Home = () => {

    const history = useHistory();
    const serviceHandler = () => history.push('/Services')
    const whoweHandler = () => history.push('./WhoWe')


    return (
        <div className='allClass'>
            <div className='con1'>
                <div className='homeInfo'>
                    <h1> Abo Ali Upholstery</h1>
                    <h3>Forty Years of Experience<br /><i className='fas fa-medal' style={styledIcon}></i></h3>
                    <button type="button" onClick={whoweHandler}  className="btn btn-info">Who We Are</button>
                    <button type="button" onClick={serviceHandler} className="btn btn-danger"  >Our Services</button>
                </div>
            </div>
            <div className='con2'>
                  <div className='content'>
                        <p>Lorem, ipsum do
                        lor sit amet consectetur adipisicing elit. Commodi ad tempore maxime laboriosam? Nulla consequuntur, placeat fugiat temporibus sed quam porro labore neque cumque ipsa! Deserunt temporibus perspiciatis autem ut.</p>
                    </div>
                    <Link className='image1' to='/Gallary'></Link> 
            </div>
            <div className='con3'>
                  <div className='content'>
                        <p>Lorem, ipsum do
                        lor sit amet consectetur adipisicing elit. Commodi ad tempore maxime laboriosam? Nulla consequuntur, placeat fugiat temporibus sed quam porro labore neque cumque ipsa! Deserunt temporibus perspiciatis autem ut.</p>
                    </div>
                    <Link className='image1' to='/Gallary'></Link>
            </div>

        </div>
    
    )
    
}
 
export default Home;

