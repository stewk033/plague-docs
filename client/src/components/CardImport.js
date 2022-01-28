import React, { useState, useEffect } from "react";

function UploadImage() {
  const [images, setImages] = useState([]);
  const [imageURLSs, setImageURLs] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageURLs = [];
    images.forEach(image => newImageURLs.push(URL.createObjectURL(image)));
    set
  })

  //accessing the files through an objest to be stored in state
  function imageChange(e) {
    setImages([...e.target.files]);
  }
  return (
    <>
    //portal for image upload that can accept ant image type
    <input type="file" multiple accept="image/*" onChange={imageChange}/>
    </>
  )

}

export default UplaodImage;
