import { React, useState } from 'react';

function imageUpload() {
  const [image, setImage] = useState('../../../assets/images/test_logo.jpg');

  const upload = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      reader.readyState === 2 && setImage(reader.result);
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div>
      <h1>Upload image</h1>
      <img src={image} width={200} height={200}></img>
      <input type='file' onChange={upload} accept='image/*'></input>
    </div>
  );
}

export default imageUpload;
