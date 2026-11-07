export interface ILoginResponse {
    tokent:string
    accessToken: string;
    refreshToken: string;
    user: {
        needsPasswordChange: boolean;
        mail: string;
        name: string;
        role: string;
        image: string;
        status: string;
        isDeleted: boolean;
        emailVerified: boolean;
    }
}