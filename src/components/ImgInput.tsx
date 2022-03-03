import React, { ChangeEvent, useState } from 'react'

export const ImgInput = () => {
    const [image, setImage] = useState<string | null>(null)

    const handleSetImage = (evt: ChangeEvent<HTMLInputElement>) => {
        if (!!evt.target?.files) {
            setImage(URL.createObjectURL(evt.target.files[0]))
        }
    }
    
    return <>
        <input type="file" name="myImage" onChange={handleSetImage} />
        {image && <img src={image}/>}
    </>
}