import React from 'react'
import PropTypes from 'prop-types'

const Testimonials = ({ testimonials }) => (
  <div>
    {testimonials.map((testimonial,index) => (
      <article key={index} className="message">
        <div className="message-body">
          {testimonial.quote}
          <br />
          <cite> – {testimonial.author}</cite>
        </div>
      </article>
    ))}
  </div>
)

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    })
  ),
}

export default Testimonials
