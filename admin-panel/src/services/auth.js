import axios from "axios";

export const fetchUser =async(token)=>{
    try{
        const obj ={
            token:token,
        }
        // convert the token object to the json
        const json =JSON.stringify(obj);
        console.log(json);
        const headers = {
            'content-type':'application/json',
            'Authorization':`Bearer ${token}`,
        }
        const res =await axios.get('http://localhost:8080/admin/',{headers});
        console.log('hello kaise ho')
        console.log(res.data);
        if(res){
            const user = res.data.user;
            // console.log(user);
            return user;
        }
    }catch(error){
        console.log(error);
    }
}
