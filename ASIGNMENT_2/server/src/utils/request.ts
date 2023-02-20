export interface QueryOption {
    page: number,
    skip: number,
    limit: number,
    sort?: any | undefined,
    filter?: any | undefined,
}

export interface LoginRequest {
    email: string
    password: string
}

export interface RegisterRequest {
    name: string
    email: string
    password: string
    role?: string
}

export interface CreatePlayerRequest {
    name: string
    club: string
    goals?: string
    image: string
    isCaptain?: string
    position: string
    nation: string
}

export interface UpdatePlayerRequest {
    name?: string
    club?: string
    goals?: string
    image?: string
    isCaptain?: string
    position?: string
    nation?: string
}

export interface CreateNationRequest {
    name: string
    description: string,
    image: string
}

export interface UpdateNationRequest {
    name?: string
    description?: string,
    image?: string
}