import './ContactUs.css'


const ContactUs = () => {
    return (
        <div className='container'>
            <div className='intro'>
                <h1>Contact Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis culpa commodi modi? Doloremque ipsum magni tempore ullam sint provident laborum, dicta quis deleniti assumenda, esse iste optio nemo laboriosam quidem.</p>
            </div>
            <div className='info'>
                <div className = 'details'>
                  <i class="fas fa-map-marker-alt"></i>
                  <div >
                    <h3>Address</h3>
                    <p>jggjhgjhgjh,<br/>sajdlasjldas,<br/>745757657</p>
                 </div>
                </div>
                <div className = 'details'>
                <i class="fas fa-phone"></i>
                <div>
                    <h3>Phone</h3>
                    <p>0980913801</p>    
                </div>
                </div>
                <div className = 'details'>
                <i class="far fa-envelope"></i>
                <div>
                    <h3>Email</h3>
                    <p>jkhjkjjajsd<br/>@hotmail.com</p>
                </div>
                </div>

            </div>
        </div>
      );
}
 
export default ContactUs;