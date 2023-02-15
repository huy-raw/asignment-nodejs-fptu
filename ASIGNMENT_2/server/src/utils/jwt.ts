import jsonwebtoken from 'jsonwebtoken'
require('dotenv').config()


export const generateToken = async (payload: any, expried?: number) => {
    try {
        const secret: string = process.env['ACCESS_TOKEN_PRIVATE_KEY'] || 'NotTheRealKey'
        return jsonwebtoken.sign(payload, secret, { expiresIn: expried })
    } catch (error) {
        throw error
    }
}

export const decodeToken: any = async (token: string) => {
    try {
        const secret: string = process.env['ACCESS_TOKEN_PRIVATE_KEY'] || 'NotTheRealKey'
        return jsonwebtoken.verify(token, secret).valueOf();
    } catch (error) {
        throw error
    }
}
