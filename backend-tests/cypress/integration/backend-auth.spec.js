import * as clientHelpers from '../helpers/clientHelpers'


describe('testing auth', function(){
    it('Create a new client', function(){
       clientHelpers.createClientRequest(cy)
    })

    it.only('Get all clients', function(){
        clientHelpers.getAllClientsRequest(cy)
     })

/*
     it.only('Edit a client', function(){
      clientHelpers.getAllClientsRequest(cy)
   })
*/



     it('Create a client and delete it', function(){
      clientHelpers.createClientRequestAndDelete(cy)
   })



})