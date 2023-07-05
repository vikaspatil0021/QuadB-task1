import React, { useEffect, useState } from 'react'
import Axios from "axios";

import './main.css'

const Main = () => {
    const [showsData, setShowsData] = useState([]);

    useEffect(() => {
        Axios.get("https://api.tvmaze.com/search/shows?q=all")
            .then((res) => {
                console.log(res.data);
                setTimeout(() => {

                    setShowsData(res.data)
                }, 1000)
            }).catch((err) => {
                console.log(err.message);
            })
    }, []);


    return (
        <div style={{ backgroundColor: "#d3d3d3" }}>
            {(showsData.length === 0) ?
                <div className='d-flex justify-content-center align-items-center minHeight' style={{ width: "100%" }}>
                    <div class="spinner-border text-dark" role="status"></div>
                </div> :
                <div className='d-flex justify-content-center pb-5' >
                    <div className='mt-5 pt-5  d-flex px-3 px-md-5' style={{ width: "1100px", maxWidth: "1100px" }}>
                        <div className='gridContainer'>
                            {showsData.map((each) => {
                                return (

                                    <div class="card rounded-4" >
                                        <div className='rounded-4 borderBot' style={{ overflow: "hidden"}}>
                                            <img src={each.show.image.original} class="rounded-4" alt="..." />
                                        </div>
                                        <div class="card-body p-0 ">
                                            <h5 class="card-title mt-2 fw-bold">{each.show.name}</h5>

                                            <div className='d-flex justify-content-between px-3 py-2 border-bottom border-top'>
                                                <div>
                                                    <i class="bi bi-star-fill" style={{ color: "gold" }}></i>
                                                    <span className='ps-1'>{each.show.rating.average || 0}</span>
                                                </div>
                                                <div className='d-flex text-center'>
                                                    {each.show.genres.map((eachgenre) => {
                                                        return (
                                                            <div className='px-2 py-1 ms-1 rounded-4 border bg-primary' style={{ color: "white" }}>
                                                                {eachgenre}
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                            <div className='d-flex p-3'>
                                                <a href={'/shows/' + each.show.id } class="btn btn-dark rounded-4 w-100 fw-semibold" >Get Details
                                                <i class="bi bi-arrow-right ps-2"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>}

        </div>
    )
}

export default Main;
