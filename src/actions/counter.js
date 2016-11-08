/**
 * Created by itay on 08/11/16.
 */
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const UNDO = 'UNDO';
export const REDO = 'REDO';

export function increment(){
  return (dispatch,getState) => {

    dispatch(
      {
        type: INCREMENT
      }
    );
  }
}

export function decrement(){
  return (dispatch,getState) => {

    dispatch(
      {
        type: DECREMENT
      }
    );
  }
}

export function undo(){
  return (dispatch,getState) => {

    dispatch(
      {
        type: UNDO
      }
    );
  }
}

export function redo(){
  return (dispatch,getState) => {

    dispatch(
      {
        type: REDO
      }
    );
  }
}
