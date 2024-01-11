"use client"
import { Hero2 } from '@/components'
import { useDrawerContext } from 'app/context/store';
import useLocalStorage from '@/hooks/useLocalStorage'
import { useState, useEffect } from 'react';

export default function Home() {
    // const { open, setOpen } = useDrawerContext()
    // const [value, setValue] = useLocalStorage("lang", "")
    // const [lang, setLang] = useState(value)

    return (
        <>

             
            <div className="custom-header-1">
                <div className="container-xl">
                    <br />
                    <h4 className="text-center text-white pt-3 mb-4 font-sinkinsans-700bold">
                    About Triple Win Solutions Insurance Brokers
                    </h4>
                    <br />
                    <br />
                </div>
            </div>
            <div className="container-xl bg-white custom-page-1 mb-5">
                <br />
                <div className="company-profile">
                    
                    <p className="w-md-60 color-secondary font-sinkinsans-700bold line-height: 24px; mx-auto text-center font-size-14px"></p>
                    <p style={{ textAlign: "center", paddingLeft: 40 }}>
                        <strong>
                            <span style={{ fontSize: "12pt" }}>
                            Welcome to Triple Win Solutions, where expertise meets excellence in insurance brokerage. With a rich legacy spanning 24 years, we take pride in being stalwarts in the field, specializing in medical insurance portfolio management.
                            </span>
                        </strong>
                    </p>
                    <p />
                    <br />
 
                </div>
 
 
                 
 
                 
                <br />
                <div className="our-values mt-4" id="our-values-scrl">
 
                    <div
                        className="row pl-5 pr-5 text-center"
                        style={{ display: "flex", flexWrap: "wrap" }}
                    >
                        <div
                            className="col-lg-4 mb-2 pl-0 pr-0 pb-3 pl-sm-4 pr-sm-4"
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <div className="background-gray h-100">
                                <div className="header background-light-blue list-inline p-1">
 
                                    <h5 className="list-inline-item text-white m-0">
                                    Our Commitment
                                    </h5>
                                </div>
                                <div className="body p-3">
                                    <p className="m-0 font-size-13px">
                                    At Triple Win Solutions, we are dedicated to offering premium-quality services and unwavering support to our valued clients. As a testament to our commitment, we meticulously curate partnerships with the most reputable insurance companies and mutual funds, ensuring that our clients have access to the best-in-class products.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 mb-2 pl-0 pr-0 pb-3 pl-sm-4 pr-sm-4"
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <div className="background-gray h-100">
                                <div className="header background-light-blue list-inline p-1">
 
                                    <h5 className="list-inline-item text-white m-0">Our Expertise</h5>
                                </div>
                                <div className="body p-3">
                                    <p className="m-0 font-size-13px">
                                    
Specializing in medical insurance products, our team boasts seasoned professionals who bring a wealth of knowledge and experience to the table. We understand the nuances of the medical insurance landscape and tailor our offerings to meet the unique needs of our clients.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 mb-2 pl-0 pr-0 pb-3 pl-sm-4 pr-sm-4"
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <div className="background-gray h-100">
                                <div className="header background-light-blue list-inline p-1">
 
                                    <h5 className="list-inline-item text-white m-0">
                                    Portfolio Management
                                    </h5>
                                </div>
                                <div className="body p-3">
                                    <p className="m-0 font-size-13px">
                                    
Currently overseeing a diverse portfolio exceeding $1 million USD in both general and medical insurance, we excel in the intricate art of portfolio management. Our meticulous approach ensures that each client receives personalized attention and a bespoke insurance solution that aligns with their individual requirements.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="row pl-5 pr-5 text-center"
                        style={{ display: "flex", flexWrap: "wrap" }}
                    >
                        <div
                            className="col-lg-4 mb-2 pl-0 pr-0 pb-3 pl-sm-4 pr-sm-4"
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <div className="background-gray h-100">
                                <div className="header background-light-blue list-inline p-1">
 
                                    <h5 className="list-inline-item text-white m-0">Client-Centric Approach</h5>
                                </div>
                                <div className="body p-3">
                                    <p className="m-0 font-size-13px">
                                    
At the core of our philosophy is a client-centric approach. We believe in not just meeting but exceeding our clients' expectations. Our relentless pursuit of excellence and commitment to service sets us apart in the industry.

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 mb-2 pl-0 pr-0 pb-3 pl-sm-4 pr-sm-4"
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <div className="background-gray h-100">
                                <div className="header background-light-blue list-inline p-1">
 
                                    <h5 className="list-inline-item text-white m-0">
                                    Why Choose Triple Win Solutions?
                                    </h5>
                                </div>
                                <div className="body p-3">
                                    <p className="m-0 font-size-13px">
                                    
Experience: With over two decades of expertise, we bring a wealth of experience to every client interaction.
                                    </p>
                                </div>
                            </div>
                        </div>
 
                    </div>
                </div>
                <br />
                 
                <div className="management-team" id="mgmt-team-scrl">
                    <h4 className="text-center color-blue font-sinkinsans-700bold mt-3 font-size-19px">
                    Partnerships
                    </h4>
                    <p className="w-md-60 color-secondary font-sinkinsans-semibold mx-auto text-center mb-0 font-size-14px">
                     We collaborate with the most reputable names in the industry, ensuring a wide array of choices for our clients.
                    </p>
                    <br />
                    <div className="row pl-5 pr-5">
                        <div className="col-md-4 position-relative has-overlay-video">

                            <img
                                className="personal-img w-100 h-100"
                                src="https://crm.securiteapps.com/storage/AppSectionItem/image1587110212.png"
                                alt=""
                            />
                            <div className="title position-absolute">
                                Jeff Khawam
                                <br />
                                Chairman
                            </div>
                        </div>
                        <div className="col-md-4 position-relative ">
                            <img
                                className="personal-img w-100 h-100"
                                src="https://crm.securiteapps.com/storage/AppSectionItem/image1587110237.png"
                                alt=""
                            />
                            <div className="title position-absolute">
                                Anthony Khawam
                                <br />
                                CEO
                            </div>
                        </div>
 
 
 
 
 
 
 

                       
                        <div className="col-md-4 position-relative ">
                            <img
                                className="personal-img w-100 h-100"
                                src="https://crm.securiteapps.com/storage/AppSectionItem/image1634560378.jpg"
                                alt=""
                            />
                            <div className="title position-absolute">
                                Racha El Hout
                                <br />
                                Quality &amp; IA Manager
                            </div>
                        </div>
                    </div>
                </div> 



                <div className="management-team" id="mgmt-team-scrl">
                    <h4 className="text-center color-blue font-sinkinsans-700bold mt-3 font-size-19px">
                    Tailored Solutions
                    </h4>
                    <p className="w-md-60 color-secondary font-sinkinsans-semibold mx-auto text-center mb-0 font-size-14px">
                    Our team crafts personalized insurance solutions, understanding that one size does not fit all.
                    </p>
                    <br /> 
                </div> 


 






            </div>
        </>

    )
}
