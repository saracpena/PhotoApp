// [] is representing my Store i.e. data

export default function reducer(state = [], action) {
    switch(action.type){
        case "userAdded":
            return [
             ...state,
             {
                id: ++lastId,
                description: action.payload.description,
                new: true
             }
        ];
        case "userRemoved":
            return store.filter(user => user.id !== action.payload.id);

            default:
                return state;
    }
}

