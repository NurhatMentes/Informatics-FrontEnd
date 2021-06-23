import { OfficeMaterialImage } from "./officeMaterialImage";

export interface OfficeMaterial{
    officeMaterialId: number;
    officeName: string;
    oldPrice: number;
    price: number;
    stockQuantity: number;
    description: string;
    quickDescription: string;
    features: string;
    imagePath: OfficeMaterialImage[];
}