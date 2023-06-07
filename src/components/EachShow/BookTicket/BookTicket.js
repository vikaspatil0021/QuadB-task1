import React, { useState } from 'react'
import * as bootstrap from 'bootstrap';
const BookTicket = (props) => {
    const [userData, setUserData] = useState({
        email: '',
        phone: '',
        name: ''
    })


    const bookTickets = (e) => {
        e.preventDefault();
        const icon = document.querySelector('#icon')
        const loader = document.querySelector('#loader');
        const toastLive = document.getElementById('liveToast')
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLive)

        if(userData.name!='' && userData.email!='' && userData.phone!='' ){

            loader.classList.remove('d-none');
            icon.classList.add('d-none')
            
            localStorage.setItem('ticket', userData);
            setTimeout(() => {
                setUserData({
                    email: '',
                    phone: '',
                    name: ''
                });
                loader.classList.add('d-none');
                icon.classList.remove('d-none')
                var myModal = bootstrap.Modal.getOrCreateInstance('#bookTicket');
                myModal.hide();;
                toastBootstrap.show()

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
                        <form method='POST' onSubmit={(e) => bookTickets(e)}>

                            <div class="modal-body">

                                <div class="input-group flex-nowrap">
                                    <input type="text" class="form-control" placeholder="Full Name"
                                        onChange={(e) => {
                                            setUserData({ ...userData, name: e.target.value })
                                        }} value={userData.name} required />
                                </div>
                                <div class="input-group flex-nowrap mt-3">
                                    <input type="email" class="form-control" placeholder="Email"
                                        onChange={(e) => {
                                            setUserData({ ...userData, email: e.target.value })
                                        }} value={userData.email}
                                        required />
                                </div>
                                <div class="input-group flex-nowrap mt-3">
                                    <input type="number" class="form-control" placeholder="Phone"
                                        onChange={(e) => {
                                            setUserData({ ...userData, phone: e.target.value })
                                        }} value={userData.phone}
                                        required />
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-dark rounded-4" >Book Tickets
                                    <i id='icon' class="bi bi-arrow-right ps-2"></i>
                                    <div id='loader' class="ms-2 d-none spinner-border spinner-border-sm" role="status"></div>
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
