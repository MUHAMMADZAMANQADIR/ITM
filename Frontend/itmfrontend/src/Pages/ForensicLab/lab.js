import Button from '@mui/material/Button';
import React, { useState } from "react";
import * as tf from "@tensorflow/tfjs";
//import * as tf from '@tensorflow/tfjs-node'
 

function Lab() {
const [images, setImage] = useState(null)
  
    let img = new Image();
    img.height = 128
    img.width = 128
  const [result, setResult] = useState('')

  async function predict  () {
    console.log("33333")
    console.log(images)
    const CLASS_NAMES1 = ['FAKE', 'REAL'];
    console.log("4444")
    await tf.loadLayersModel('https://raw.githubusercontent.com/Sodium-Technologies/Model/main/model.json').then(model => {
      console.log("here" ,img)
      img.src = URL.createObjectURL(images);
      // const tt = model.pred(img)
      // console.log(tt)
      const tensor = tf.browser.fromPixels(img, 3).div(255).resizeBilinear([128, 128])
      const pred = model.predict(tensor.reshape([-1, 128, 128, 3])).squeeze()
      // tt = model.pred(tensor)
      let highestIndex = pred.argMax().arraySync();
      let predictionArray = pred.arraySync();

      console.log('Prediction: ' + CLASS_NAMES1[highestIndex] + ' with ' + Math.floor(predictionArray[highestIndex] * 100) + '% confidence');
    
      setResult('Prediction: ' + CLASS_NAMES1[highestIndex] + ' with ' + Math.floor(predictionArray[highestIndex] * 100) + '% confidence')
      console.log(result)
    });
}
  return (
    <div  >
     
        <div>
          <h1 style={{marginLeft:"250px"}} >Digital Forensics</h1>
          <br /> 
          <input
            type="file"
            id="upload-photo"  
            name="myImage"
            style={{marginLeft:"145px" , width:"500px"}}
              onChange={(event) => {
              console.log("11111111", event.target.files[0])  
              setImage(event.target.files[0]);
              console.log(images)
            }}
          />
          <br />
          <br />
          <Button
                variant={"contained"}
                style={{
                  color: "white",
                  backgroundColor: "blueviolet",
                  width: "50%",
                  maxWidth: "250px",
                  marginLeft:"250px"
                }}
                onClick={() => {
                  predict();
                }}
              >
                Predict
          </Button>
          <div style={{marginLeft:"250px"}}>{result}</div>
        </div>
       
    </div>
  );
}

export default Lab;