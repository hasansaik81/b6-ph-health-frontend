
import jwt, { JwtPayload } from "jsonwebtoken"

const verifyToken=(token:string,secret:string)=>{
    try{
        const decoded=jwt.verify(token,secret)as JwtPayload;
        return {
            success:true,
            data:decoded
        }
    }catch(error:any){
       return {
        success:false,
        message:error.message,
        error
       }
    }
}

const decodedToen=(token:string)=>{
    const docoded=jwt.decode(token)as JwtPayload;
    return docoded;
}

export const jwtUtils={
    verifyToken,
    decodedToen
}