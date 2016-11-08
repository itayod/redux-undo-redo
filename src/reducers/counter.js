/**
 * Created by itay on 08/11/16.
 */
import {INCREMENT} from "./../actions/counter";
import {DECREMENT} from "./../actions/counter";
import {UNDO} from "./../actions/counter";
import {REDO} from "./../actions/counter";

const initialState = {
  past: [],
  present: 0, // (?) How do we initialize the present?
  future: []
}

export default function counter(state = initialState, action) {

  const { past, present, future } = state

  switch (action.type) {
    case INCREMENT:
      past.push(state.present)
      state.present ++;
      return state;
    case DECREMENT:
      past.push(state.present)
      state.present --;
      return state;
    case UNDO:
      if(past.length === 0) return state;

      const previous = past[past.length - 1]
      const newPast = past.slice(0, past.length - 1)
      return {
        past: newPast,
        present: previous,
        future: [ present, ...future ]
      }
    case REDO:
      if(future.length === 0) return state;

      const next = future[0]
      const newFuture = future.slice(1)
      return {
        past: [ ...past, present ],
        present: next,
        future: newFuture
      }
    default:

      return state;
  }
}
