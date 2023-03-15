import './mainpage.css'
import './ab.jpg'
import './dc.jpg'
import navLogo from "./logo4.png"
import img2 from "./dc.jpg"
import img3 from "./pp.jpg"
import img4 from "./kk.jpg"
import img5 from "./ab.jpg"
import img6 from "./abc.jpg"
import img7 from "./cd.jpg"
import img8 from "./boy.jpg"
import img9 from "./girl.jpg"

function HomePage() {
    
    return (
        <>

    <div class="site">
        <nav>
            <img src={navLogo} class="logo" />
            
            <div className='navItems'>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Therapist Jobs</a></li>
                <li><a href="/signin">Sign in</a></li>
            </ul>
            </div>
        </nav>
        <h1 class="title">MIND <br/> INSIGHT</h1>
        <div class="buttonMP">  
            <a href="/signin">LOGIN</a>
            <a href="/signup">REGISTER</a>
        </div>


        </div>
       

        
       
        
    <section class="things">
         <h1>Things We Offer</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quam eaque dolore magnam facilis. Quas ducimus beatae atque! Quis optio quam odio sequi laborum mollitia harum corporis magni aut rem.</p>
    
    <div class="t">
        <div class="things-c">
            <h3>Doctor</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>


        <div class="things-c">
            <h3>Medicine</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>


        <div class="things-c">
            <h3>Therapy</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </div>
</section>







<section class="doctor">
    <h1>Our     Doctors</h1>
    <p>Doctors have a very noble profession. In addition, they are equipped with comprehensive knowledge and devices that enable them to diagnose and treat their patients with correct procedures.</p>
       <div class="t">
        <div class="doctor-d">
            <img src={img2}/>
            <div class="layer">
                <h3>I'M DOCTOR ALISA</h3>
            </div>
        </div>



        <div class="doctor-d">
            <img src={img3}/>
            <div class="layer">
                <h3>I'M DOCTOR JACK</h3>
            </div>
        </div>




        <div class="doctor-d">
            <img src={img4}/>
            <div class="layer">
                <h3>I'M DOCTOR HARRY</h3>
            </div>
        </div>
       </div>
</section>





<section class="facilities">
    <h1>Our facilities</h1>
    <p>We help people with depression and anxiety and personal issues by taking appointment we can easliy intereact with them and help them solving their problems.</p>
    <div class="t">
        <div class="facilities-f">
            <img src= {img5}/>
            <h3>Anxiety</h3>
            <p>Anxiety disorders are a group of mental illnesses that cause constant and overwhelming anxiety and fear. The excessive anxiety can make you avoid work, school, family get-togethers, and other social situations that might trigger or worsen your symptoms.</p>
        </div>


        <div class="facilities-f">
            <img src= {img6} />
            <h3>Depression</h3>
            <p>Depression is one of the most common types of mental health conditions and often develops alongside anxiety.

                Depression can be mild and short-lived or severe and long-lasting. Some people are affected by depression only once, while others may experience it multiple times.
                
                 </p>
        </div>


        <div class="facilities-f">
            <img src= {img7}/>
            <h3>Issues</h3>
            <p>any personal problem that affects a certain individual. Typical personal issues could relate, among others, to family, finance, addiction, disability or health.</p>
        </div>


    </div>
</section>






<section class="test">
    <h1>What Our Patient Says</h1>
    <p>We love that our patients feel inspired to write about the care they received here at Mind Insight! Here are some of the wonderful letters and comments we have recently received.</p>
    <div class="t">
        <div class="test-col">
            <img src={img8}/>
            <div>
                <p>“My Sessions are always good.”</p>
                <h3>HARRY BROOK</h3>
                
            </div>
        </div>
        <div class="test-col">
            <img src={img9}/>
            <div>
                <p>“I was very satisfied with everything.”</p>
                <h3>ALEXA</h3>
            </div>
        </div>
    </div>
</section>


<section class="cta">
    <h1>ENROLL FOR OUR VARIOUS ONLINE THERAPIES ANY WHERE FROM THE WORLD</h1>
    <a href="" class="hero-btn">CONTACT US</a>
</section>




<section class="footer">
    <h4>ABOUT US</h4>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Iusto dolorem, commodi quisquam nemo nulla quo maiores modi ratione dignissimos illo quas dolorum dolor obcaecati, eligendi quidem quae suscipit laboriosam. Ipsum.
    </p>
</section>


        </>
    )
   

}

export default HomePage;