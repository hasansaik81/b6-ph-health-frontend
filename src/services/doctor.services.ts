"use server"

import { httpClient } from "@/lib/axios/httpClient"
import { ICreateDoctorPayload, IDoctor, IDoctorDetails, IUpdatedDoctorPayload } from "@/types/doctor.types";
import { ISpecialty } from "@/types/specialty.types";

export const getDoctors=async()=>{
    try{
        const doctors= await httpClient.get<IDoctor[]>('/doctors');
        return doctors;
    }catch(error){
        console.log("Error fetching doctors:", error);
        throw error;
    }
}


export const getAllSpecialties=async()=>{
    try{
        const specialties=await httpClient.get<ISpecialty[]>("/specialties");
        return specialties;
    }catch(error){
        console.log("Error fetching specialties:",error);
        throw error;
    }
}


export const createDoctor=async(payload:ICreateDoctorPayload)=>{
    try{
        const response=await httpClient.post<IDoctor>("/users/create-doctor",payload);
        return response;
    }catch(error){
        console.log("Error creating doctor:", error);
        throw error;
    }
}


export const updateDoctor=async(id:string,payload:IUpdatedDoctorPayload)=>{
    try{const response = await httpClient.patch<IDoctor>(`/doctor/${id}`,payload)
}catch(error){
    console.log("Error updating doctor:", error);
    throw error
}
}


export const deleteDoctor=async(id:string)=>{
    try{
        const response=await httpClient.delete<{message:string}>(`/doctors/${id}`);
        return response
    }catch(error){
        console.log("Error fetching doctor by id:", error);
        throw error;
    }
}


export const getDoctorById=async(id:string)=>{
    try{
        const doctor=await httpClient.get<IDoctorDetails>(`/doctors/${id}`);
        return doctor
    }catch(error){
        console.log("Error fetching doctor by id:",error);
        throw error;
    }
}