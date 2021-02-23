import { React, useState } from 'react'

function imageUpload() {

  const [image, setImage] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png')

  const upload = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      // if(reader.readyState === 2) {
      //   setImage(reader.result)
      // }
      reader.readyState === 2 && setImage(reader.result)
    }

    reader.readAsDataURL(e.target.files[0])
  }

  return(
    <div>
      <h1>Upload image</h1>
      <img accept="image/*" src={image}></img>
      <input type='file' onChange={upload}></input>
    </div>
  )
}

export default imageUpload;

// import React, { Component } from 'react';
// import './App.css';
// export class App extends Component {
//   state={
//     profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
//   }
//   imageHandler = (e) => {
//     const reader = new FileReader();
//     reader.onload = () =>{
//       if(reader.readyState === 2){
//         this.setState({profileImg: reader.result})
//       }
//     }
//     reader.readAsDataURL(e.target.files[0])
//   };
// 	render() {
//     const { profileImg} = this.state
// 		return (
// 			<div className="page">
// 				<div className="container">
// 					<h1 className="heading">Add your Image</h1>
// 					<div className="img-holder">
// 						<img src={profileImg} alt="" id="img" className="img" />
// 					</div>
// 					<input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
// 					<div className="label">
//           <label className="image-upload" htmlFor="input">
// 						<i className="material-icons">add_photo_alternate</i>
// 						Choose your Photo
// 					</label>
//           </div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// export default App;
