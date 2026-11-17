import { redirect } from "next/navigation"

const AppointmentsRedirectPage=async({
    searchParams,
}:{
    searchParams:Promise<{[key:string]: | string | string[] | undefined}>
})=>{
    const params=await searchParams
    const query=new URLSearchParams()

    Object.entries(params).forEach(([Key,value])=>{
        if(value===undefined){
            return
        }
        if(Array.isArray(value)){
            value.forEach((item)=>query.append(Key,item))
            return 
        }
        query.set(Key,value)
            
    })
    redirect(query.toString()? `/dashboard/my-appointments?${query.toString}`:"/dashboard/my-appointments")
}

export default AppointmentsRedirectPage