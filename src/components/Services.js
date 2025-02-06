import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Services = () => {
    useEffect(() => {
        const sr = ScrollReveal({
          distance: '30px', // Distance for the animation
          duration: 800, // Duration of animation in milliseconds
          easing: 'ease-in-out', // Easing function
          interval: 200, // Delay between animations for consecutive elements
        });
    
        // Apply animations to the cards
    sr.reveal('.service-card:nth-child(1)', { origin: 'left', delay: 300 }); // 300ms delay for the first card
    sr.reveal('.service-card:nth-child(2)', { origin: 'bottom', delay: 600 }); // 600ms delay for the second card
    sr.reveal('.service-card:nth-child(3)', { origin: 'right', delay: 900 });
    sr.reveal('.servics-section h2', { origin: 'bottom', delay: 300 });
    sr.reveal('.servics-section p', { origin: 'bottom', delay: 400 });
      }, []);

    return (
      <div className="main">
        {/* Original Services Section */}
        <section className="servics-section">
          <h2>Talk To Us</h2>
          <p>
            Feeling stuck? We are here to help you navigate life's twists and
            turns with expert guidance, supportive ears, and a dash of "you've got
            this!" Together, we'll help you find clarity, resilience, and a
            renewed sense of purpose.
          </p>
        </section>
  
        {/* New Section for Cards */}
        <section className="services-container">
          <div className="services-cards">
            {/* Counseling Services Card */}
            <div className="service-card">
              <div className="card-content">
                <h3>Counseling Services</h3>
                <p>
                  Offering personalized support to help you navigate mental health
                  challenges, personal struggles, and emotional well-being.
                </p>
                <button className="book-button">Book</button>
              </div>
            </div>
  
            {/* Career Planning Card */}
            <div className="service-card">
              <div className="card-content">
                <h3>Career Planning</h3>
                <p>
                  Gain clarity on your future by identifying strengths, exploring
                  options, and developing actionable career strategies.
                </p>
                <button className="book-button">Book</button>
              </div>
            </div>
  
            {/* Stress Management Card */}
            <div className="service-card">
              <div className="card-content">
                <h3>Stress Management</h3>
                <p>
                  Learn practical techniques to manage stres<br></br> and build resilience
                  in your daily life for a healthier, balanced you.
                </p>
                <button className="book-button">Book</button>
              </div>
            </div>
          </div>
        </section>

        <section className="counseling-area-section">
        <div className="counseling-area">
          <div className="area-image-wrapper">
            <img
              src="https://www.tpoftampa.com/wp-content/uploads/2023/05/managing-depression-and-anxiety-turning-point-of-tampa.webp"  // Update with an actual image URL
              alt="Anxiety and Depression"
              className="area-image"
            />
          </div>
          <div className="area-info">
            <h3 className="area-title">Anxiety and Depression</h3>
            <p className="area-description">
              Offering compassionate support to help you cope with anxiety, depression, and emotional distress. 
              We provide strategies and guidance to manage your mental health and restore balance in your life.
            </p>
            {/* <button className="book-btn">Book</button> */}
            <a href ="#" className = "buttontry">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            Book</a>
          </div>
        </div>
      </section>

      <section className="counseling-area-section">
        <div className="counseling-area">

          <div className="area-info">
            <h3 className="area-title">Relationship Issues</h3>
            <p className="area-description">
            Navigating the complexities of relationships can be challenging. We provide a safe and supportive 
            space to address communication breakdowns, conflicts, and emotional struggles. 
            Let us help you build stronger, healthier connections and foster mutual understanding.
            </p>
            {/* <button className="book-btn">Book</button> */}
            <a href ="#" className = "buttontry">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            Book</a>
          </div>
          <div className="area-image-wrapper">
            <img
              src="https://media.licdn.com/dms/image/C4E12AQGDbYPlkovdPw/article-cover_image-shrink_600_2000/0/1616753377654?e=2147483647&v=beta&t=SrVrsmEXr2td_2_3MndozQgSENIb0H0Yb4v9FiGByO8"
              alt="Anxiety and Depression"
              className="relationship-issues-image"
            />
          </div>
        </div>
      </section>

      <section className="counseling-area-section">
        <div className="counseling-area">
          <div className="area-image-wrapper">
            <img
              src="https://cdn.i-scmp.com/sites/default/files/styles/landscape/public/d8/yp/images/shutterstock_1007734795.jpg?itok=oOtrxjmB"  // Update with an actual image URL
              alt="Anxiety and Depression"
              className="area-image"
            />
          </div>
          <div className="area-info">
            <h3 className="area-title">Mental Health</h3>
            <p className="area-description">
            Your mental well-being matters. We offer a supportive and confidential space to 
            address a range of mental health concerns, from stress and anxiety to emotional overwhelm. 
            Together, we’ll work on strategies to enhance your mental clarity, resilience, and overall 
            quality of life.
            </p>
            {/* <button className="book-btn">Book</button> */}
            <a href ="#" className = "buttontry">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            Book</a>
          </div>
        </div>
      </section>

      <section className="counseling-area-section">
        <div className="counseling-area">

          <div className="area-info">
            <h3 className="area-title">CV/Resume Review </h3>
            <p className="area-description">
            Stand out from the crowd with a polished and professional CV or resume. 
            We provide personalized feedback to help you showcase your skills, experiences, 
            and achievements effectively. Let us assist you in creating a document that opens doors 
            to new opportunities.
            </p>
            {/* <button className="book-btn">Book</button> */}
            <a href ="#" className = "buttontry">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            Book</a>
          </div>
          <div className="area-image-wrapper">
            <img
              src="https://media.istockphoto.com/id/953195708/photo/side-view-picture-of-studio-workplace-with-blank-notebook-laptop-comfortable-work-table-home.jpg?s=612x612&w=0&k=20&c=V68ErfzRxobQWI0qM2Z3pQzp424VuiQ2CJUa6dYAxTg="
              alt="Anxiety and Depression"
              className="relationship-issues-image"
            />
          </div>
        </div>
      </section>
      
      </div>
    );
  };
  
  export default Services;
  