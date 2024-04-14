import React, { useState } from 'react'

interface ContactFormState {
  name: string
  email: string
  subject: string
  message: string
  [key: string]: string // This allows us to access values dynamically using keys
}

const ContactSection = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<ContactFormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const validate = (): boolean => {
    let isValid = true
    let newErrors: ContactFormState = {
      name: '',
      email: '',
      subject: '',
      message: '',
    }

    if (!formData.email.match(/^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i)) {
      newErrors.email = 'Invalid email format'
      isValid = false
    }

    // Example validation for other fields
    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!validate()) {
      return
    }

    const actionURL = 'contactform/contactform.php' // Set the URL here

    try {
      const response = await fetch(actionURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
      })
      const result = await response.text()
      if (result === 'OK') {
        alert('Message Sent Successfully')
        setFormData({ name: '', email: '', subject: '', message: '' }) // Reset form
      } else {
        alert('Error: ' + result)
      }
    } catch (error) {
      alert('An error occurred while sending the message.')
    }
  }

  return (
    <div>
      <form className='contactForm' onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Your Name'
          />
          {errors.name && <div className='validation'>{errors.name}</div>}
        </div>
        <div className='form-group'>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Your Email'
          />
          {errors.email && <div className='validation'>{errors.email}</div>}
        </div>
        <div className='form-group'>
          <textarea
            name='message'
            value={formData.message}
            onChange={handleChange}
            placeholder='Message'
          ></textarea>
          {errors.message && <div className='validation'>{errors.message}</div>}
        </div>
        <button type='submit'>Send Message</button>
      </form>
    </div>
  )
}

export default ContactSection
