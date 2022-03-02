import { toast } from "react-toastify";


export const notify = (Text, type) => {
    
    if (type === "success") {
        toast.success(Text)
    } else{
     toast.error(Text)}

}