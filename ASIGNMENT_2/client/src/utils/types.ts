
export interface IPlayer {
    _id?: string
    name: string,
    image: string,
    club: string
    position: EPosition
    goals: number
    isCaptain?: boolean
    nation: string | INation
}

export interface INation {
    _id?: string
    name: string
    plagImg?: string
    description?: string
    players?: IPlayer[]
}


export enum EPosition {
    GOALKEEPER = 'goalkeeper',
    MIDFIELDERS = 'midfielder',
    FORWARD = 'forward',
    DEFENDERS = 'defender'
}

export interface IResponse<T> {
    code: number
    pagination: any
    results: {
        object: T
    }
}

export interface IResponsePaging<T> {
    code: number
    pagination: any
    results: {
        objects: {
            count: number,
            rows: T[]
        }
    }
}

export enum EAction {
    UPDATE = 'UPDATE',
    CREATE = 'CREATE'
}