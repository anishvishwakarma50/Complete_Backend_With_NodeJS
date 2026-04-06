import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CreatePost() {

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const image = formData.get('image')
    const caption = formData.get('caption')

    axios.post('http://localhost:3000/create-post', { image, caption }, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((response) => {
      console.log(response.data)
      navigate('/feed')
    })
    .catch((error) => {
      console.error('Error creating post:', error)
    })
  }

  return (
    <section className='create-post-section'>
        <h1>Create Post</h1>

        <form className='create-post-form' onSubmit={handleSubmit}>
            <input type="file" name="image" id="image" accept='image/*' />
            <input type="text" name="caption" id="caption" placeholder='Caption...' required />
            <button type="submit" className='submit-btn'>Submit</button>
        </form>
    </section>
  )
}

export default CreatePost