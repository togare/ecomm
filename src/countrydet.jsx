import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function Coo() {
    var res = useParams();
    var [cdetails, setCdetalis] = useState({})
    console.log(res)
    useEffect(() => {
        if (res.cname) {
            axios.get(`https://restcountries.com/v2/name/${res.cname}`).then((response) => {
                console.log(response.data)
                setCdetalis({ ...response.data })

            })
        }
    }, [res.cname])



    return (
        <div className="border border-4 border-success p-2">
            <h1>{res.cname} Details</h1>
            {
                cdetails[0] && (<div>

                    <h1>capital : {cdetails[0].capital}</h1>
                    <h2>population: {cdetails[0].population}</h2>
                    <img src={cdetails[0].flag} width='15%' alt="" />

                </div>

                )


            }




        </div>
    )
}

export default Coo