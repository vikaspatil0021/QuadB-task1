import React, { useState } from 'react'
import * as bootstrap from 'bootstrap';
const BookTicket = (props) => {
    const [userData, setUserData] = useState({
        email: '',
        phone: '',
        name: ''
    })


    const bookTickets = (e) => {
        e.preventDefault()
        var myModal = bootstrap.Modal.getOrCreateInstance('#bookTicket');
        console.log(myModal)
        myModal.hide();
        if (userData.email != '' && userData.phone != '' && userData.name != 0) {

            const a = localStorage.setItem('ticket', userData);
            setTimeout(() => {
            }, 1000);
        }
    }
    return (
        <div>
            <div id='bookTicket' class="modal mt-5" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">{props.showName}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={bookTickets}>

                            <div class="modal-body">

                                <div class="input-group flex-nowrap">
                                    <input type="text" class="form-control" placeholder="Full Name" 
                                        onChange={(e) => {
                                            setUserData({  ...userData ,name: e.target.value})
                                        }} value={userData.name} required />
                                </div>
                                <div class="input-group flex-nowrap mt-3">
                                    <input type="email" class="form-control" placeholder="Email" 
                                        onChange={(e) => {
                                            setUserData({  ...userData,email: e.target.value })
                                        }} value={userData.email}
                                        required />
                                </div>
                                <div class="input-group flex-nowrap mt-3">
                                    <input type="number" class="form-control" placeholder="Phone" 
                                        onChange={(e) => {
                                            setUserData({  ...userData,phone: e.target.value })
                                        }} value={userData.phone}
                                        required />
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-dark rounded-4" >Book Tickets
                                    <i class="bi bi-arrow-right ps-2"></i>

                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default BookTicket
