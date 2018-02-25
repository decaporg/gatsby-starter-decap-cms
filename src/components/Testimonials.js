import React from 'react'

export default ({ testimonials }) => (
  <div>
    {testimonials.map(testimonial => (
      <article className="message">
        <div className="message-body">
          {testimonial.quote}
          <br />
          <cite> – {testimonial.author}</cite>
        </div>
      </article>
    ))}
  </div>
)
