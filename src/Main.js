import React from 'react'
import ReactDOM, { unmountComponentAtNode } from 'react-dom'
import {Row, Col} from 'antd';
import './App.css';
import './People.css';
import './Albums.css';
import logo from './imagesmisc/finallogopng.png'

/*C:\Users\jackf\OneDrive\afterhours\public*/

const style = {   padding: '10vw 0' };
const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;


function Main(){

    return(
<div>        
<section className="et-hero-tabs">
<div className="et-hero-tabs-container">
    <a className="et-hero-tab" href="#about">ABOUT</a>
    <a className="et-hero-tab" href="#upcoming">UPCOMING</a>
    <a className="et-hero-tab" href="#members">MEMBERS</a>
    <a className="et-hero-tab" href="#home"><img src = {logo} alt = "pleasework" className = "logo-image-tab"/></a>
    <a className="et-hero-tab" href="#music">MUSIC</a>
    <a className="et-hero-tab" href="#media">MEDIA</a>
    <a className="et-hero-tab" href="#bookus">BOOK US</a>
    <span className="et-hero-tab-slider"></span>
  </div>
  <section className = "title-holder" id="home">
  <Row>
      <Col span={24}>
          <h1 className = "after">After Hours <h3 className = "premiere">Rochester's premiere co-ed a cappella group</h3></h1>
           
      </Col>
      
    </Row>
  
  
  
  </section>
  
</section>


<main className="et-main">
  <div className ="content-holder">
  <section className="et-slide-about" id="about">
    <h1><img src = {logo} alt = "pleasework" className = "logo-image"/></h1>
    <h1 className = "about-heading-text">ABOUT AFTER HOURS</h1>
    <h3 className = "about-text">After Hours, the University of Rochester's oldest co-ed a cappella group, was formed in 1998 as a vocal jazz group called Charivari. In 2000, the group was renamed After Hours and evolved into the ensemble it now is. While our members spend most of their time together building friendships through tight harmonies and kick-ass tunes, we pride ourselves on being close friends outside of rehearsal as well.
    <br/>
    <br/>
After Hours has participated in ICCAs (International Championship of Collegiate A Cappella) throughout its many years of being hosted regionally. In both 2013 and 2015, After Hours placed first in the Regional Division, advancing to the ICCA semifinals. In the 2019 ICCA Regionals, After Hours took third place, and brought home the accolade of “Best Arrangement”, by our talented Reagan Casteel, class of 2020. 
    <br/>
    <br/>
If you'd like to see us live, After Hours has two major concerts per year, one each in the fall and spring, in addition to a joint Meliora Weekend concert with UR's other a cappella groups. Also throughout the school year, we perform at various events and shows often held by other UR clubs. We sing serenades for Valentine's Day and take road trips to any place we possibly can. We also frequently take Spring Break Tours, and sing in different cities such as DC, NYC, Philly, and more!
</h3>
  </section>
  </div>
  </main>
  <section className="et-slide-upcoming" id="upcoming">
    <h1 className = "about-heading-text">UPCOMING SHOWS</h1>
    <h3 className = "about-text">
      No upcoming shows.
</h3>
  </section>
  <main className="et-main">
  <div className ="content-holder">
  <section className="slideshow" id="members">
    <h2>
      MEET US
    </h2>
    <div className = "grid">
            
            <div className = "grace">
            </div>
             
            <div className = "ben">
                
            </div>
            <div className = "erin">
              
            </div>
            <div className = "sydney">
              
            </div>
            <div className = "steven">
              
            </div>
            <div className = "zoe">
              
            </div>
            <div className = "emma">
              
            </div>
            <div className = "ashwin">
              
            </div>
            <div className = "luke">
              
            </div>
            <div className = "jack">
              
            </div>
            <div className = "franklin">
              
            </div>
          </div>

  </section>
  <section className="slideshow" id="tab-flexbox">
    <h2></h2>
    <div className = "musicgrid">
            
            <div className = "japan-card">
            
            </div>  
            <div className = "juice-card">
                
            </div>
            <div className = "bellyache-card">
              
            </div>
            <div className = "treasure-card">
              
            </div>
            <div className = "more-card">
              
            </div>
            <div className = "acid-card">
              
            </div>
            <div className = "bestpart-card">
              
            </div>
            <div className = "cough-card">
              
            </div>
            <div className = "brookyln-card">
              
            </div>
            <div className = "heart-card">
              
            </div>
            <div className = "dance-card">
              
            </div>
            <div className = "soclose-card">
              
            </div>
          </div>

  </section>
 
  <section className="et-slide" id="tab-angular">
    <h1>Angular</h1>
    <h3>something about angular</h3>
  </section>
  <section className="et-slide" id="tab-other">
    <h1>Other</h1>
    <h3>something about other</h3>
  </section>
  </div>
</main>
</div>
    );

    
}




export default Main;