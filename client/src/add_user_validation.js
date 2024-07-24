function validation(values){
    let error ={}
    if(!values.user){
        error.user = "User  is required"
    }
    if(!values.email){
        error.email = "Email is required"
    }
    else if(!/\S+@\S+\.\S+/.test(values.email)){
        error.email = "Email is invalid"
    }
    else {
        error.email = ""
    }
    
    if(!values.password){
        error.password = "Password is required"
    }
    else {
        error.password = ""
    }
    
    if(!values.confirmer){
        error.confirmer = "User name is required"
    }
    if(!(values.confirmer == values.password)){
        error.confirmer = "Password didn't match"
    }
    return error;
}
    export default validation;