import { useState } from 'react'
import './FAQ.css'

const faqs = [
  'Do you offer 24hr support?',
  'Do you sell Xerox printers?',
  'Can I upgrade my support package?',
  'Do you offer 24hr support?',
  'Do you sell Xerox printers?',
  'Do you sell Xerox printers?',
  'Do you sell Xerox printers?',
  'Do you sell Xerox printers?',
]

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index)
  }

  return (
    <div className="faq-section">
      <h3>FAQ’s</h3>
      <ul className="faq-list">
        {faqs.map((question, index) => (
          <li key={index}>
            <button onClick={() => toggle(index)} className="faq-toggle">
              {question}
              <span>{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="faq-answer">
                <p>This is the answer to: {question}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
      <a className="faq-link" href="/faqs">View all FAQs</a>
    </div>
  )
}
