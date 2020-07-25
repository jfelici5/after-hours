import React from 'react'
import ReactDOM, { unmountComponentAtNode } from 'react-dom'
import {Row, Col} from 'antd';
import './CSS/App.css';
import './CSS/People.css';
import './CSS/Albums.css';
import './CSS/Styles.css';
import './CSS/images.css';
import logo from './imagesmisc/finallogopng.png';
import $ from "jquery";



function Main(){
  
  $(function () {
    $(document).scroll(function () {
      var $nav = $(".et-hero-tabs-container");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

  $(function(){
    $('a').click(function(){
        $('a').removeClass('active');
        $(this).addClass('active');
    });
  })

    return(
<div>        
<section className="et-hero-tabs" id ='#'>
  <nav className="et-hero-tabs-container" id = "top-menu">
    <a href="#" className = "active">HOME</a>
    <a href="#about" >ABOUT</a>
    <a href="#upcoming">UPCOMING</a>
    <a href="#members">MEMBERS</a>
    <a href="#music">MUSIC</a>
    <a href="#media">MEDIA</a>
    <a href="#gallery">GALLERY</a>
    <a href="#bookus">BOOK US</a>
    </nav>
    <div className = "wrapper" id="#home">
      <div data-text className = "maroon">
      </div>
      <div className="item">Rochester's Premiere CO-ED A CAPELLA GROUP</div>
      <div className="item">ICCA QUARTERFINALISTS</div>
      <div className="item">Frontend developer</div>

      <h2 className = "johndoe">We are After Hours.</h2>
    </div>  
</section>

<main className="et-main">
  <div className ="content-holder">
  <section className="et-slide-about" id="about">
    <h1><img src = {logo} alt = "pleasework" className = "logo-image"/></h1>
    <h1 className = "about-heading-text">ABOUT AFTER HOURS</h1>
    <h3 className = "about-text">
      After Hours, the University of Rochester's oldest co-ed a cappella group, was formed in 1998 as a vocal jazz group called Charivari. In 2000, the group was renamed After Hours and evolved into the ensemble it now is. While our members spend most of their time together building friendships through tight harmonies and kick-ass tunes, we pride ourselves on being close friends outside of rehearsal as well.<br/><br/>
      After Hours has participated in ICCAs (International Championship of Collegiate A Cappella) throughout its many years of being hosted regionally. In both 2013 and 2015, After Hours placed first in the Regional Division, advancing to the ICCA semifinals. In the 2019 ICCA Regionals, After Hours took third place, and brought home the accolade of “Best Arrangement”, by our talented Reagan Casteel, class of 2020. <br/><br/>
      If you'd like to see us live, After Hours has two major concerts per year, one each in the fall and spring, in addition to a joint Meliora Weekend concert with UR's other a cappella groups. Also throughout the school year, we perform at various events and shows often held by other UR clubs. We sing serenades for Valentine's Day and take road trips to any place we possibly can. We also frequently take Spring Break Tours, and sing in different cities such as DC, NYC, Philly, and more!
    </h3>
    <div className = "about-grid">    
        <div className = "rettner">
          <div className = "overlay">
            <div className = "text">
              <h6 className = "member-title">GRACE CONHEADY '21 | <em>PRESIDENT</em></h6>
            </div> 
          </div>
        </div>     
        <div className = "hands-up">
          <div className = "overlay">
            <div className = "text">
              <h6 className = "member-title">BEN RICHARDSON'21 | <em>MUSIC DIRECTOR</em></h6>
            </div> 
          </div>
        </div>
        <div className = "groovestand">
          <div className = "overlay">
            <div className = "text">
              <h6 className = "member-title">ERIN TOOHEY '21 | <em>BUSINESS MANAGER</em></h6>
            </div> 
          </div>
        </div>
        <div className = "zoe-emma">
        <div className = "overlay">
            <div className = "text">
              <h6 className = "member-title">SYDNEY SISSON '21 | <em>PUBLICITY MANAGER</em></h6>
            </div> 
          </div>
        </div>
    </div>
  </section>
  </div>
  </main>
  <section className="et-slide-upcoming" id="upcoming">
    <div className = "upcoming-holder">
    <h1 className = "about-heading-text">UPCOMING SHOWS</h1>
    <h3 className = "about-text">
      No upcoming shows.
    </h3>
    </div>
  </section>
  <main className="et-main">
  <div className ="content-holder">
  <section className="slideshow" id="members">
    <h1 className = "about-heading-text">
      MEET US
    </h1>
      <div className = "grid">     
        <div className = "grace">
          <div className = "overlay">
            <div className = "text">
              <h6 className = "member-title">GRACE CONHEADY '21 | <em>PRESIDENT</em></h6>
            </div> 
          </div>
        </div>     
        <div className = "ben">
          <div className = "overlay">
            <div className = "text">
              <h6 className = "member-title">BEN RICHARDSON'21 | <em>MUSIC DIRECTOR</em></h6>
            </div> 
          </div>
        </div>
        <div className = "erin">
          <div className = "overlay">
            <div className = "text">
              <h6 className = "member-title">ERIN TOOHEY '21 | <em>BUSINESS MANAGER</em></h6>
            </div> 
          </div>
        </div>
        <div className = "sydney">
        <div className = "overlay">
            <div className = "text">
              <h6 className = "member-title">SYDNEY SISSON '21 | <em>PUBLICITY MANAGER</em></h6>
            </div> 
          </div>
        </div>
        <div className = "steven">
          <div className = "overlay">
            <div className = "text">
              <h6 className = "member-title">STEVEN LI '23 | <em>ASSISTANT MUSIC DIRECTOR</em></h6>
            </div> 
          </div>
        </div>
          <div className = "zoe">
          <div className = "overlay">
              <div className = "text">
                <h6 className = "member-title">ZOE HYNES '23 | <em>BOOKING MANAGER</em></h6>
              </div> 
            </div>
          </div>
          <div className = "emma">
          <div className = "overlay">
              <div className = "text">
                <h6 className = "member-title">EMMA MICHELS '22 | <em>SECRETARY</em></h6>
              </div> 
            </div>
          </div>
          <div className = "ashwin">
            <div className = "overlay">
              <div className = "text">
                <h6 className = "member-title">ASHWIN MENON '20</h6>
              </div> 
            </div>
          </div>
          <div className = "luke">
            <div className = "overlay">
              <div className = "text">
                <h6 className = "member-title">LUKE NASH '20</h6>
              </div> 
            </div>
          </div>
          <div className = "jack">
            <div className = "overlay">
              <div className = "text">
                <h6 className = "member-title">JACK FELICIANO '23</h6>
              </div> 
            </div>
          </div>
          <div className = "sydney">
            <div className = "overlay">
              <div className = "text">
                <h6 className = "member-title">SYDNEY SISSON '21 | PUBLICITY MANAGER</h6>
              </div> 
            </div>
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
 
  <section className="et-slide" id="music">
    <h1>Angular</h1>
    <h3>something about angular</h3>
  </section>
  <section className="et-slide" id="media">
    <h1>Other</h1>
    <h3>something about other</h3>
  </section>
  </div>
</main>
</div>
    );

    
}




export default Main;