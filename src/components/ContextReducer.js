import React,{createContext,useReducer, useContext} from 'react'

const cartStateContext= createContext();
const cartDispatchContext= createContext();

const reducer= (state,action)=>{
switch(action.type){
    case "ADD":
        return [...state,{id:action.id,name:action.name,qty:action.qty,size:action.size,price:action.price,img:action.img}]

        case "REMOVE":
            let newArr=[...state]
            newArr.splice(action.index,1)
            return newArr;

            case "UPDATE":
                let arr=[...state]
                arr.find((grocery,index)=>{
                    if(grocery.id === action.id){
                        console.log(grocery.qty,parseInt(action.qty),action.price+grocery.price)
                        arr[index]={...grocery,qty:parseInt(action.qty)+grocery.qty,price:action.price+grocery.price}
                    }
                })
                return arr;
                case "DROP":
                let emptyArray=[]
                return emptyArray
        default:
            console.log("error in reducer"); 
}
}

export const CartProvider=({children})=>{

const[state,dispatch] = useReducer(reducer,[]);

    return(
        <cartDispatchContext.Provider value={dispatch}>
            <cartStateContext.Provider value={state}>
                {children}
            </cartStateContext.Provider>
        </cartDispatchContext.Provider>
    )
};

export const useCart=()=>useContext(cartStateContext);
export const useDispatchCart=()=> useContext(cartDispatchContext);
