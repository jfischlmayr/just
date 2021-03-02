import {Address} from "./Address";

export class Project {
    id!: number
    title!: string
    notes!: string
    from!: Date
    to!: Date
    address!: Address
    priority!: number
}