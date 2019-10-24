import { createStore } from 'redux';

// const updateCount = ({ type = 'INCREMENT', value = 1 } = {}) => ({
//     type,
//     value
// });

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

// Reducers
// 1. Reducers are pure functions, i.e. output is determined purely by input
// 2. Never change state or action, return updates instead

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
                return {
                    count: 0
                };            
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(decrementCount({ decrementBy: 2 }));
store.dispatch(setCount({ count: 999 }));
store.dispatch(resetCount());

// store.dispatch(updateCount({ type: 'INCREMENT', value: 5 }));
// store.dispatch(updateCount({ type: 'INCREMENT' }));
// store.dispatch(updateCount({ type: 'DECREMENT' }));
// store.dispatch(updateCount({ type: 'DECREMENT', value: 7 }));
// store.dispatch(updateCount({}));
// store.dispatch(updateCount({ type: 'RESET' }));
// store.dispatch(updateCount({ type: 'SET', value: 200 }));
