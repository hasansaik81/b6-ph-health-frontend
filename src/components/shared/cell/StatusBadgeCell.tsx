import { Badge } from "@/components/ui/badge";

interface IStatusBadgeCellProps {
    status:UserStatus;
}


const StatusBadgeCell=({status}:IStatusBadgeCellProps)=>{
    return(
        <Badge
        variant={status===}
    )
}