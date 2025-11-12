import { Iteminterface } from "./interfaceItem";

export interface AchievementItems extends Iteminterface{
    imageUrl: string,
    issuedDate: string,
    description?: string
}