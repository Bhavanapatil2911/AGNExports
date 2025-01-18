import React from 'react'
import './RICEWEDEAL.scss'

const RICEWEDEAL = () => {
 const Ricevarities =[
    {
        image:"/images/AdobeStock_43908831.jpeg",
        Ricetype:"Basmati Rice",
        Varities:['1121 Basmati Rice',
                  '1509 Basmati Rice',
                  'Traditional Basmati Rice',
                  '1401 Basmati Rice',
                  'Pusa Basmati Rice',
                  '1718 Basmati Rice']
    },
    {
        image:"/images/AdobeStock_43908831.jpeg",
        Ricetype:"Non-Basmati Rice",
        Varities:[
            'Sugandha Rice',
            'Sharbati Rice',
            'PR 11 Rice',
            'Parmal Rice',
            'Sona Masoori Raw Rice',
        ]
    },
    {
        image:"/images/AdobeStock_43908831.jpeg",
        Ricetype:"Pesticide Free Rice",
        Varities:[
            'Raw Rice',
            'Steam Rice',
            'Sella Rice',
            'Golden Rice',
        ]
    },
 ]


  return (
    <section className="ricewedeal p-md-5 p-4 d-flex flex-column justify-content-center align-items-center  mt-3">
        <h1 className='headings text-center'>RICE WE DEAL With</h1>
        <div className="ricecards row  mx-md-5 px-md-5 py-3 gap-md-0  gap-3 mb-md-5 pt-5">
            {Ricevarities.map((rice,index) => (
                <div className="col-md-4 ">
                <div className="card p-3 mx-md-3">
                    <img src={rice.image} alt="" className='mb-3'/>
                    <span className='' >{rice.Ricetype}</span>
                    <p className='pt-2'>
                        <ul>
                            {rice.Varities.map((item,index) => (
                                <li>{item}</li>

                            ))}
                        </ul>
                    </p>
                </div>
                </div>

            ))}
            
        </div>

    </section>
  )
}


export default RICEWEDEAL
