const initialState={
    volunteerName:'',
    marketId:'',
    volunteersId:'',
    productName:'',
        productWeight:'',
        Amount:''

    }
    export default(state = initialState,action)=>{
    // debugger
    switch(action.type){
    case "VOLUNTEER":{
    return{...state,
    volunteerName:action.payload.volunteerName,
    marketId:action.payload.marketId,
   
   
    }
    }
    case "PRODUCTS":{
        return{...state,
            volunteersId:action.payload1.volunteersId,
            productName:action.payload1.productName,
            productWeight:action.payload1.productWeight,
            Amount:action.payload1.Amount,
       
       
        }
        }
    default:
    return state;
    }
    }
   