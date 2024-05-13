import React from 'react'

const Carousel=()=> {
  return (
    <section className="section-hero">
    <div className="hero">
        <div className="hero-text-box">
            <h1 className="heading-primary">
                A healthy meal delivered to your door, every single day
            </h1>
            </div>
            <p className="hero-description text-2xl">
                The smart 365-days-per-year food subscription that will make you eat
                healthy again. Tailored to your personal tastes and nutritional
                needs.
            </p>
            <a href="#" className="btn btn--fill margin-right-btn italic">Start eating well!</a>
           
        
        <div className="hero-img-box">
            <img
                src="https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/hero.png"
                alt="Woman enjoying food, meals in storage container, and food bowls on a table"
                className="hero-img"
            />
        </div>
        <div className="delivered-meals">
            <div className="delivered-imgs">
                <img src="https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-1.jpg" alt="Customer photo" />
                <img src="https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-2.jpg" alt="Customer photo" />
                <img src="https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-3.jpg" alt="Customer photo" />
                <img src="https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-4.jpg" alt="Customer photo" />
                <img src="https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-5.jpg" alt="Customer photo" />
                <img src="https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-6.jpg" alt="Customer photo" />
            </div>
            <p className="delivered-text">
                <span>250,000+</span> groceries delivered last year!
            </p>
        </div>
    </div>
</section>
  )
}

export default Carousel
