export interface instrument{
    nombre:string;
    description:string;
    type_ins:'wind' | 'percussion' | 'electric' | 'string';
    year:number;
    price:number;    
}