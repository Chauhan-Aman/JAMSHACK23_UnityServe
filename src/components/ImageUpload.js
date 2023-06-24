import React, { useState,useEffect } from 'react'

const ImageUpload = () => {

    const [image, SetImage] = useState("")
    const [allimage, SetAllimage] = useState([])

    const convertToBase64 = (e) => {
        console.log(e);
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            console.log(reader.result)  // base64encoded string
            SetImage(reader.result)
        };
        reader.onerror = error => {
            console.log("Error: ", error)
        }
    }

    useEffect(() => {
        getImage()
        // eslint-disable-next-line
    }, [])


    const UploadImage = async () => {
        const response = await fetch("http://localhost:8080/api/product/upload-image", {
            method: "POST",
            crossDomain: true,
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({
                base64: image
            })
        })
        const json = await response.json()
        console.log(json)
    }

    const getImage = async () => {
        const response = await fetch("http://localhost:7000/api/product/get-image", {
            method: "GET",
            crossDomain: true,
            headers: {
                "auth-token": localStorage.getItem('token')
            },
        })
        const json = await response.json()
        SetAllimage(json)
    }

    return (
        <>
            <div className="input-group mb-3">
                <input type="file" className="form-control" id="inputGroupFile02" onChange={convertToBase64} />
            </div>
            {image === "" || image === null ? "" : <img width={100} height={100} src={image} alt='' />}
            <button onClick={UploadImage}>Upload</button>
<br />
            {allimage.map(data=>{
                return( <img width={100} height={100} src={data.image} alt='' />)
            })}
        </>
    )
}

export default ImageUpload