
const ENDPOINT_GET_RESERVATIONS = 'http://localhost:3000/api/reservations'




function getAllReservationsRequest(cy){
    cy.authenticateSession().then((response =>{
        cy.request({
            method: "GET",
            url: ENDPOINT_GET_RESERVATIONS,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            },
        }).then((response =>{
            const responseAsString = JSON.stringify(response)
            cy.log(responseAsString)
           
        }))
    }))
}



/*
function createReservationRequest(cy){
    cy.authenticateSession().then((response =>{
        let fakeReservationsPayload = createRandomClientPayload() 
        
        // post request to create a reservation
        cy.request({
            method: "POST",
            url: ENDPOINT_POST_CLIENT,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            },
            body:fakeClientPayload 
        }).then((response =>{               
           const responseAsString = JSON.stringify(response)
           expect(responseAsString).to.have.string(fakeClientPayload.name)
        }))

        getRequestAllClientsWithAssertion(cy,fakeClientPayload.name, fakeClientPayload.email, fakeClientPayload.telephone)
    }))
}
*/




module.exports = {
    getAllReservationsRequest, 
    //createClientRequest, 
    //getAllClientsRequest,
    //createClientRequestAndDelete
}



















