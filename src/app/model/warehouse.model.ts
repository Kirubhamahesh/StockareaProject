export class Warehousemodel
{
    public name:string;
    public code:string;
    public city:string;
    public id: number;
    public space_available: number;
    public type:string;
    public cluster:string;
    public is_registered:boolean;
    public is_live: boolean;
    constructor(name:string,
        code:string,
        city:string,
        id: number,
        space_available: number,
        type:string,
        cluster:string,
        is_registered:boolean,
        is_live: boolean
        )   {}
}