'use client'
import React from 'react';
import Image, { StaticImageData } from 'next/image';

type ImageData = {
    imagePrj: StaticImageData;
    title: string;
    imgWidth: number;
}

const ProjectImage: React.FC<ImageData> = (props) => {

    let alt = '';
    if(props.title) {
        alt = props.title;
    } else {
        alt = 'A generic project image';
    }
  
    return (
        <>
            <Image src={props.imagePrj} alt={alt} className="shadow-xl object-cover h-52 w-full" width={props.imgWidth} />
        </>
    );
}
export default ProjectImage;