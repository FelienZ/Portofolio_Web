import { ReactElement } from "react";
import { Iteminterface } from "./interfaceItem";

export interface FeaturedItem extends Iteminterface{
    imgUrl: string,
    icon: ReactElement
}