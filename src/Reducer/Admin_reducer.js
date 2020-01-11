const initialState={
    Firstname:'',
    Lastname:'',
    email:'',
    product:''
    }
    export default(state = initialState,action)=>{
    // debugger
    switch(action.type){
    case "ADMIN":{
    return{...state,
    Firstname:action.payload.Firstname,
    Lastname:action.payload.Lastname,
    email:action.payload.email,
    product:action.payload.product,
   
    }
    }
    default:
    return state;
    }
    }