const initialState={
  password:'',
  email:''
}

export default(state = initialState,action)=>{
  debugger
  switch(action.type){
     case "LOGIN":{
      return{...state,
         password:action.payload.password,
         email:action.payload.email
      }
  }
  default:
      return state;
  }
  
}