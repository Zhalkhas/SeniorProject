import { React, useState } from 'react'

function imageUpload() {

  const [image, setImage] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png')

  const upload = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      reader.readyState === 2 && setImage(reader.result)
    }

    reader.readAsDataURL(e.target.files[0])
  }

  return(
    <div>
      <h1>Upload image</h1>
        <div>
          <img src={image} width="120" height="150"></img>
        </div>
      <input type='file' onChange={upload} accept="image/*"></input>
      <input type='submit' onSubmit={() => {console.log('yo')}}></input>
    </div>
  )
}

export default imageUpload;