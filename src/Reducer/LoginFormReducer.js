const initialState={
  password:'',
  Mobnum:''
}

export default(state = initialState,action)=>{
  debugger
  switch(action.type){
      
      case "LOGIN":{
      return{...state,
         password:action.payload.password,
          Mobnum:action.payload.Mobnum
      }
  }
  default:
      return state;
  }
  
}