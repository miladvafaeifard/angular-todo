export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export default class Action {
    public increase(){
        return {
            type: INCREMENT
        }
    }

    public decrease(){
        return {
            type: DECREMENT
        }
    }
}

