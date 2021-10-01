const initialState = {
    bots: [
        {
            id: 1,
            bot: "Hot Bot",
            description: "Hot bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
            indexvalue: 289.34,
            cagr: "22.63%"
        },
        {
            id: 2,
            bot: "Cool Bot",
            description: "Cool bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
            indexvalue: 439.34,
            cagr: "36.02%"
        },
        {
            id: 3,
            bot: "Options Bot",
            description: "Options bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
            indexvalue: 139.34,
            cagr: "28.54%"
        }


    ],
    cartCount: 0,
    selectedBot: {}
};
const rootReducers = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CART":
            return {
                ...state,
                cartCount: state.cartCount + 1
            };
        case "EACH_DATA":
            return {
                ...state,
                selectedBot: state.bots[action.payload]
            }
        default:
            return state;
    }
};

export default rootReducers;