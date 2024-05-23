'use client'
import Image from 'next/image';
import { useTheme } from 'next-themes';

interface SCSUImageProps {
    DefaultImage: string;
    DarkImage: string;
    AltDesc: string;
    imgWidth: number;
    imgHeight: number;
}
const ModeImage: React.FC<SCSUImageProps> = ({DefaultImage, DarkImage, AltDesc, imgWidth, imgHeight}) => {
    const { setTheme, resolvedTheme } = useTheme();
    console.log('Current theme: ' + resolvedTheme);
    let imageSrc = DefaultImage;
    if (resolvedTheme === 'dark') {
        imageSrc = DarkImage;
    }
    return (

        <Image
            src={imageSrc}
            alt={AltDesc}
            width={imgWidth}
            height={imgHeight}
        />

    )
}

export default ModeImage;