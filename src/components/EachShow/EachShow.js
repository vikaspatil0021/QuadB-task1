import React, { useEffect, useState } from 'react'
import Axios from "axios";
const EachShow = () => {
    const [data, setData] = useState('');

    useEffect(() => {
        Axios.get("https://api.tvmaze.com" + window.location.pathname)
            .then((res) => {
                console.log(res.data);
                setTimeout(() => {

                    setData(res.data)
                }, 1000)
            }).catch((err) => {
                console.log(err.message);
            })
    }, [])

    useEffect(() => {

        if (data != '') {

            const ele = document.querySelector('#summary');
            if (ele) ele.innerHTML = data.summary
        }
    }, [data])

    return (
        <div id='eachshow-div' className='d-flex justify-content-center align-items-center' style={{ backgroundColor: "#d3d3d3" }}>
            {(data === '') ?
                <div className='d-flex justify-content-center align-items-center minHeight' style={{ width: "100%" }}>
                    <div class="spinner-border text-dark" role="status"></div>
                </div> :
                <div className='mt-5 d-flex px-3 px-md-5' style={{ width: "1100px", maxWidth: "1100px" }}>

                    <div className='d-flex flex-wrap w-100 '>
                        <div className='d-flex justify-content-center justify-content-lg-start align-items-center  col-12 col-lg-6 p-3 p-lg-0'>
                            <div>

                                <img src={data.image.original} class="rounded-4 eachshow-img" alt="..." />
                            </div>
                        </div>
                        <div className='col-12 col-lg-6 text-start p-3 p-lg-0'>
                            <div className='fw-bold fs-1 mb-2'>
                                {data.name}
                            </div>
                            <div className='d-flex justify-content-between'>

                                <div className='bg-white d-inline px-3 py-1 rounded-4'>
                                    <i class="bi bi-star-fill" style={{ color: "gold" }}></i>
                                    <span className='ps-1'>{data.rating.average || 0}</span>
                                </div>
                                <div className='d-flex text-center'>
                                    {data.genres.map((eachgenre) => {
                                        return (
                                            <div className='px-2 py-1 ms-1 rounded-4 border bg-primary' style={{ color: "white" }}>
                                                {eachgenre}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div id='summary' className='mt-3'>
                                summary

                            </div>
                            <div className='d-flex justify-content-between fw-bold mt-4'>
                                <div>
                                    Premiered : {data.premiered}
                                </div>
                                <div>
                                    Status : {data.status}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
        </div>
    )
}

export default EachShow;
