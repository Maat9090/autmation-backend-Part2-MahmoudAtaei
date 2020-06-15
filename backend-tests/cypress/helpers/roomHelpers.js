const ENDPOINT_GET_ROOMS = 'http://localhost:3000/api/rooms'

function getAllRoomsRequest(cy){
    cy.authenticateSession().then((response =>{
        cy.request({
            method: "GET",
            url: ENDPOINT_GET_ROOMS,
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







module.exports = {
    getAllRoomsRequest,
    //createClientRequest, 
    //getAllClientsRequest,
    //createClientRequestAndDelete
}