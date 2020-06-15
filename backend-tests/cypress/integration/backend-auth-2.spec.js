import * as reservationHelpers from '../helpers/reservationHelpers'
  
import * as roomHelpers from  '../helpers/roomHelpers' 



describe('testing auth-2', function(){
    it.only('Get all reservations', function(){
        reservationHelpers.getAllReservationsRequest(cy)
     })

     it('Get all rooms', function(){
       // roomsHelpers.(cy)
     })



     /*
     it.only('Create a new  reservation', function(){
        reservationHelpers.(cy)
     })
*/
   /* it('Edit reservations', function(){
        clientHelpers.getAllClientsRequest(cy)
     })


     it('Create a reservations and delete it', function(){
      clientHelpers.createClientRequestAndDelete(cy)
   }) */



})