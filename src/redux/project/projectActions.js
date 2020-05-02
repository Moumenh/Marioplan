export const createProject = (project) => {
    return (dispatch,getState, {getFirestore}) => {  //we have to connect them with fb using compose method to use more than store inhancer and then pass the config to their libraries in the store
        // make a synce call to database
        const firestore = getFirestore(); // ref to our firestore database
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Net',
            authorLastName: 'Momooz',
            authorId: 12345,
            createdAt: new Date()
        }).then( ()=> {
            dispatch({type:"CREATE_PROJECT" , payload:project})   // so we only dispatch after assigning the data
        }).catch ((err) => {
            dispatch({type:"CREATE_PROJECT_ERROR" , err})
        })

    }
}