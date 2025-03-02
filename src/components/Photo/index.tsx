import * as React from "react";
import {PhotoProps} from "./photo.types.tsx";
import {PhotoWrapper} from "./photo.styles.tsx";

export const Photo: React.FC<PhotoProps> = ({ src, alt = "Foto" }) => {
    return (
        <PhotoWrapper>
            <img src={src} alt={alt} />
        </PhotoWrapper>
        )
  };