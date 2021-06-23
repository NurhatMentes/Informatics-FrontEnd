import { SecurityCameraSystemImage } from "./securityCameraSystemImage";

export interface SecurityCameraSystem{
    securityCameraSystemId: number;
    cameraName: string;
    price: number;
    oldPrice: number;
    stockQuantity: number;
    description: string;
    quickDescription: string;
    features: string;
    imagePath: SecurityCameraSystemImage[];
}