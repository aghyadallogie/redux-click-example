const initialState = {
    clicked: 0
}

const increment = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT_CLICKS":
            let newTotalClicks = state.clicked + 1;
            return { ...state, clicked: newTotalClicks }
        default:
            return state;
    }
}

export default increment;