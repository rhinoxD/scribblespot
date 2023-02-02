import { useState } from 'react'

import styles from '@/styles/Contact.module.css'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')

  const handleChange = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value)
    } else if (e.target.name === 'email') {
      setEmail(e.target.value)
    } else if (e.target.name === 'comment') {
      setComment(e.target.value)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { name, email, comment }

    const res = await fetch('http://localhost:3000/api/postcontact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    // const resData = await res.json()
    // console.log(resData)
    setName('')
    setEmail('')
    setComment('')
  }

  return (
    <div className='main'>
      <form className={styles.form} onSubmit={handleSubmit} method='post'>
        <div className={`${styles.field}`}>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            className={styles.formControl}
            id='name'
            name='name'
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className={`${styles.field}`}>
          <label htmlFor='email' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            className={styles.formControl}
            id='email'
            aria-describedby='emailHelp'
            name='email'
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className={`${styles.field}`}>
          <label htmlFor='comment'>Comments</label>
          <textarea
            className={styles.textarea}
            placeholder='Leave a comment here'
            id='comment'
            name='comment'
            value={comment}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type='submit' className={`${styles.btn} ${styles.btnPrimary}`}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact
