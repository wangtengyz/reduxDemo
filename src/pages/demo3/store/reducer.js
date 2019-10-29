
import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './action'
const defaultState = {
  inputValue: "Write Something",
  list: ["demo3"]
};

// 处理inputValue改变的reducer
function inputValue (state='Write Something',action){
  const { type,payload } = action;
   switch (type) {
     case CHANGE_INPUT:
       return payload
     default:
       return state;
   }
}
// 处理列表list改变的reducer
function list (state=["早上6点跑步"],action){
  const { type,payload } = action;
   switch (type) {
     case ADD_ITEM:
     case DELETE_ITEM:
       return [...payload]
     default:
       return state;
   }
}

export default function reducer (state = defaultState, action) {
  return {
    inputValue: inputValue(state.inputValue, action),
    list:list(state.list, action)
    }
  }
