import { LucideProps } from "lucide-react";
import React, { ForwardRefExoticComponent } from "react";
import { Iteminterface } from "./interfaceItem";

export type iconItem = ForwardRefExoticComponent<Omit<LucideProps, "ref">& React.RefAttributes<SVGSVGElement>>
export interface SidebarItem extends Iteminterface{
    icon: iconItem
}