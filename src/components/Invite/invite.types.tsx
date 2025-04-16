export interface WrapperCardProps {
    invert?: boolean;
}


export interface CardProps {
    invert?: boolean;
}
export interface ResponseProps {
    id: number
    title: string
    confirmation?: boolean
    expirationDate: string
    users: User[]
}

export interface User {
    id: number;
    email: string;
    name: string;
    lastName: string;
    phone: string;
    inviteId: number;
    honorId: number;
    confirmation?: boolean
    honor: Honor
}

export interface Honor {
    id: number
    title: string
}


export interface RequestUser {
    id: number;
    confirmation: boolean
}

export interface RequestProps {
    confirmation: boolean
    users?: RequestUser[]
}
