import React, { useEffect, useState } from 'react'
import Axios from "axios";
const EachShow = () => {
    const [data, setData] = useState('');

    useEffect(()=>{
        Axios.get("https://api.tvmaze.com" + window.location.pathname)
            .then((res) => {
                console.log(res.data);
                setTimeout(() => {

                    setData(res.data)
                }, 2000)
            }).catch((err) => {
                console.log(err.message);
            })
    },[])

  return (
    <div style={{ backgroundColor: "#d3d3d3" }}>
    {(data === '') ?
                <div className='d-flex justify-content-center align-items-center minHeight' style={{ width: "100%" }}>
                    <div class="spinner-border text-dark" role="status"></div>
                </div> :null}
    </div>
  )
}

export default EachShow;
