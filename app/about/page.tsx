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


 




                <>
                    <div className="feat bg-gray pt-5 pb-5">
                        <div className="container">
                            <div className="row">
                                <div className="section-head col-sm-12">
                                    <h4>
                                        <span>Partnerships</span>
                                    </h4>
                                    <p>
                                        We collaborate with the most reputable names in the industry, ensuring a wide array of choices for our clients.
                                    </p>
                                </div>

                                <div className="section-head col-sm-12">
                                    <h4>
                                        <span>Tailored</span> Solutions
                                    </h4>
                                    <p>
                                        Our team crafts personalized insurance solutions, understanding that one size does not fit all.
                                    </p>
                                </div>

                                <div className="section-head col-sm-12">
                                    <h4>
                                        <span>Why Do People Choose</span> Us?
                                    </h4>
                                    <p>
                                        Over 60% of our clients come to us via word-of-mouth recommendation - here are some of the words frequently used to describe us:








                                    </p>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="item">
                                        {" "}
                                        <span className="icon  ">
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>support</title> <rect width="24" height="24" fill="none"></rect> <path d="M12,2a8,8,0,0,0-8,8v1.9A2.92,2.92,0,0,0,3,14a2.88,2.88,0,0,0,1.94,2.61C6.24,19.72,8.85,22,12,22h3V20H12c-2.26,0-4.31-1.7-5.34-4.39l-.21-.55L5.86,15A1,1,0,0,1,5,14a1,1,0,0,1,.5-.86l.5-.29V11a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1v5H13.91a1.5,1.5,0,1,0-1.52,2H20a2,2,0,0,0,2-2V14a2,2,0,0,0-2-2V10A8,8,0,0,0,12,2Z"></path> </g></svg>
                                        </span>
                                        <h6>Helpful</h6>
                                        <p>
                                            We go out of our way to ensure our clients are happy
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="item">
                                        {" "}
                                        <span className="icon  ">
                                            <svg fill="#000000" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="m960 15 266.667 241.92 359.893-13.867 48.747 356.907L1920 820.547l-192 304.64 76.267 352.106-342.934 109.867-167.893 318.613L960 1769.56l-333.44 136.213-167.893-318.613-342.934-109.867L192 1125.187 0 820.547 284.693 599.96l48.747-356.907 359.893 13.867L960 15Zm0 144L764.907 335.96l-32.214 29.227-43.52-1.6-263.253-10.134-35.627 260.907-5.866 43.2-34.454 26.56-208.106 161.387L282.24 1068.44l23.253 36.693-9.28 42.667-55.68 257.387 250.774 80.426 41.493 13.334 20.373 38.506 122.667 232.96 243.84-99.52L960 1654.36l40.32 16.533 243.84 99.52 122.773-232.96 20.267-38.506 41.493-13.334 250.774-80.426-55.68-257.387-9.28-42.667 23.253-36.693 140.48-222.933-208.213-161.387-34.454-26.56-5.866-43.2-35.734-260.907-263.04 10.134-43.626 1.6-32.214-29.227L960 159Zm341.056 613.483 64.533 85.013-561.6 426.24-255.04-255.04 75.414-75.413 189.226 189.226 487.467-370.026Z" fill-rule="evenodd"></path> </g></svg>
                                        </span>
                                        <h6>Professional</h6>
                                        <p>
                                            We strive to provide the best service in the market
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="item">
                                        {" "}
                                        <span className="icon  ">
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12.5 7.5a1 1 0 1 1 1-1 1.002 1.002 0 0 1-1 1zM13 18V9h-2v1h1v8h-1v1h3v-1zm9.8-5.5A10.3 10.3 0 1 1 12.5 2.2a10.297 10.297 0 0 1 10.3 10.3zm-1 0a9.3 9.3 0 1 0-9.3 9.3 9.31 9.31 0 0 0 9.3-9.3z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
                                        </span>
                                        <h6>Knowledgeable</h6>
                                        <p>
                                            With years of experience, our advisers are genuine experts
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="item">
                                        {" "}
                                        <span className="icon  ">
                                            <svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"></path></g></svg>
                                        </span>
                                        <h6>Polite</h6>
                                        <p>
                                            We treat people with respect - we’re patient and polite.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="item">
                                        {" "}
                                        <span className="icon  ">
                                            <svg fill="#000000" viewBox="-1.67 0 29.184 29.184" id="_17_-_Direct_Massage" data-name="17 - Direct Massage" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="Path_247" data-name="Path 247" d="M4.43,20.809l8.7.967,3.914,7.829a2,2,0,0,0,3.7-.312L28.414,4.109a2,2,0,0,0-3.06-2.221L3.5,17.183a2,2,0,0,0,.926,3.626ZM26.5,3.526,18.836,28.711l-4.158-8.316a1,1,0,0,0-.784-.547L4.651,18.821,26.5,3.526h0Z" transform="translate(-2.651 -1.527)" fill-rule="evenodd"></path> <path id="Path_248" data-name="Path 248" d="M19.576,11.252l-6.6,9a1,1,0,0,0,1.613,1.182l6.6-9a1,1,0,0,0-1.613-1.183Z" transform="translate(-2.651 -1.527)" fill-rule="evenodd"></path> </g></svg>
                                        </span>
                                        <h6>Transparent</h6>
                                        <p>

                                            Ask us anything, and you’ll get an honest answer.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="item">
                                        {" "}
                                        <span className="icon  ">
                                            <svg
                                                viewBox="0 0 17 17"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                fill="#000000"
                                            >
                                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                                <g id="SVGRepo_iconCarrier">
                                                    {" "}
                                                    <path
                                                        d="M8.516 0c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.814-8.5-8.5-8.5zM1.041 9h2.937c0.044 1.024 0.211 2.031 0.513 3h-2.603c-0.481-0.906-0.776-1.923-0.847-3zM3.978 8h-2.937c0.071-1.077 0.366-2.094 0.847-3h2.6c-0.301 0.969-0.467 1.976-0.51 3zM5.547 5h5.896c0.33 0.965 0.522 1.972 0.569 3h-7.034c0.046-1.028 0.239-2.035 0.569-3zM4.978 9h7.035c-0.049 1.028-0.241 2.035-0.572 3h-5.891c-0.331-0.965-0.524-1.972-0.572-3zM13.013 9h2.978c-0.071 1.077-0.366 2.094-0.847 3h-2.644c0.302-0.969 0.469-1.976 0.513-3zM13.013 8c-0.043-1.024-0.209-2.031-0.51-3h2.641c0.48 0.906 0.775 1.923 0.847 3h-2.978zM14.502 4h-2.354c-0.392-0.955-0.916-1.858-1.55-2.7 1.578 0.457 2.938 1.42 3.904 2.7zM9.074 1.028c0.824 0.897 1.484 1.9 1.972 2.972h-5.102c0.487-1.071 1.146-2.073 1.97-2.97 0.199-0.015 0.398-0.030 0.602-0.030 0.188 0 0.373 0.015 0.558 0.028zM6.383 1.313c-0.629 0.838-1.151 1.737-1.54 2.687h-2.314c0.955-1.267 2.297-2.224 3.854-2.687zM2.529 13h2.317c0.391 0.951 0.915 1.851 1.547 2.689-1.561-0.461-2.907-1.419-3.864-2.689zM7.926 15.97c-0.826-0.897-1.488-1.899-1.978-2.97h5.094c-0.49 1.072-1.152 2.075-1.979 2.972-0.181 0.013-0.363 0.028-0.547 0.028-0.2 0-0.395-0.015-0.59-0.030zM10.587 15.703c0.636-0.842 1.164-1.747 1.557-2.703h2.358c-0.968 1.283-2.332 2.247-3.915 2.703z"
                                                        fill="#000000"
                                                    />{" "}
                                                </g>
                                            </svg>

                                        </span>
                                        <h6>Thorough</h6>
                                        <p>
                                            We invest time to ensure our advice is comprehensive.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <style
                        dangerouslySetInnerHTML={{
                            __html:
                                "\n        h1,\n        h2,\n        h3,\n        h4,\n        h5,\n        h6 {}\n        a,\n        a:hover,\n        a:focus,\n        a:active {\n            text-decoration: none;\n            outline: none;\n        }\n        \n        a,\n        a:active,\n        a:focus {\n            color: #333;\n            text-decoration: none;\n            transition-timing-function: ease-in-out;\n            -ms-transition-timing-function: ease-in-out;\n            -moz-transition-timing-function: ease-in-out;\n            -webkit-transition-timing-function: ease-in-out;\n            -o-transition-timing-function: ease-in-out;\n            transition-duration: .2s;\n            -ms-transition-duration: .2s;\n            -moz-transition-duration: .2s;\n            -webkit-transition-duration: .2s;\n            -o-transition-duration: .2s;\n        }\n        \n        ul {\n            margin: 0;\n            padding: 0;\n            list-style: none;\n        }\n        img {\n    max-width: 100%;\n    height: auto;\n}\nspan, a, a:hover {\n    display: inline-block;\n    text-decoration: none;\n    color: inherit;\n}\n.section-head {\n  margin-bottom: 60px;\n}\n.section-head h4 {\n  position: relative;\n  padding:0;\n  color:#6c3429;\n  line-height: 1;\n  letter-spacing:0.3px;\n  font-size: 34px;\n  font-weight: 700;  \n  text-align:center;\n  text-transform:none;\n  margin-bottom:30px;\n}\n.section-head h4:before {\n  content: '';\n  width: 60px;\n  height: 3px;\n  background: #6c3429;\n  position: absolute;\n  left: 0px;\n  bottom: -10px;\n  right:0;  \n  margin:0 auto;\n}\n.section-head h4 span {\n  font-weight: 700;\n  padding-bottom: 5px;\n  color:#2f2f2f\n}\np.service_text{\n  color:#cccccc !important;\n  font-size:16px;\n  line-height:28px;\n  text-align:center;    \n}\n.section-head p, p.awesome_line{\n  color:#818181;\n  font-size:16px;\n  line-height:28px;\n  text-align:center;  \n}\n\n.extra-text {\n    font-size:34px;\n    font-weight: 700;\n    color:#2f2f2f;\n    margin-bottom: 25px;\n    position:relative;\n    text-transform: none;\n}\n.extra-text::before {\n    content: '';\n    width: 60px;\n    height: 3px;\n    background: #6c3429;\n    position: absolute;\n    left: 0px;\n    bottom: -10px;\n    right: 0;\n    margin: 0 auto;\n}\n.extra-text span {\n    font-weight: 700;\n    color:#6c3429;\n}\n.item {\n    background: #fff;\n    text-align: center;\n    padding: 30px 25px;\n    -webkit-box-shadow:0 0px 25px rgba(0, 0, 0, 0.07);\n    box-shadow:0 0px 25px rgba(0, 0, 0, 0.07);\n    border-radius: 20px;\n    border:5px solid rgba(0, 0, 0, 0.07);\n    margin-bottom: 30px;\n    -webkit-transition: all .5s ease 0;\n    transition: all .5s ease 0;\n    transition: all 0.5s ease 0s;\n}\n.item:hover{\n    background:#6c3429;\n    box-shadow:0 8px 20px 0px rgba(0, 0, 0, 0.2);\n    -webkit-transition: all .5s ease 0;\n    transition: all .5s ease 0;\n    transition: all 0.5s ease 0s;\n}\n.item:hover .item, .item:hover span.icon{\n    background:#fff;\n    border-radius:10px;\n    -webkit-transition: all .5s ease 0;\n    transition: all .5s ease 0;\n    transition: all 0.5s ease 0s;\n}\n.item:hover h6, .item:hover p{\n    color:#fff;\n    -webkit-transition: all .5s ease 0;\n    transition: all .5s ease 0;\n    transition: all 0.5s ease 0s;\n}\n.item .icon {\n    font-size: 40px;\n    margin-bottom:25px;\n    color: #6c3429;   \n    width: 90px;\n    height: 90px;\n    line-height: 96px;\n    border-radius: 50px;\n}\n.item .feature_box_col_one{\n    background:rgba(247, 198, 5, 0.20);\n    color:#6c3429\n}\n.item .feature_box_col_two{\n    background:rgba(255, 77, 28, 0.15);\n    color:#6c3429\n}\n.item .feature_box_col_three{\n    background:rgba(0, 147, 38, 0.15);\n    color:#6c3429\n}\n.item .feature_box_col_four{\n    background:rgba(0, 108, 255, 0.15);\n    color:#6c3429\n}\n.item .feature_box_col_five{\n    background:rgba(146, 39, 255, 0.15);\n    color:#6c3429\n}\n.item .feature_box_col_six{\n    background:rgba(23, 39, 246, 0.15);\n    color:#6c3429\n}\n.item p{\n    font-size:15px;\n    line-height:26px;\n}\n.item h6 {\n    margin-bottom:20px;\n    color:#2f2f2f;\n}\n.mission p {\n    margin-bottom: 10px;\n    font-size: 15px;\n    line-height: 28px;\n    font-weight: 500;\n}\n.mission i {\n    display: inline-block;\n    width: 50px;\n    height: 50px;\n    line-height: 50px;\n    text-align: center;\n    background: #6c3429;\n    border-radius: 50%;\n    color: #fff;\n    font-size: 25px;\n}\n.mission .small-text {\n    margin-left: 10px;\n    font-size: 13px;\n    color: #666;\n}\n.skills {\n    padding-top:0px;\n}\n.skills .prog-item {\n    margin-bottom: 25px;\n}\n.skills .prog-item:last-child {\n    margin-bottom: 0;\n}\n.skills .prog-item p {\n    font-weight: 500;\n    font-size: 15px;\n    margin-bottom: 10px;\n}\n.skills .prog-item .skills-progress {\n    width: 100%;\n    height: 10px;\n    background: #e0e0e0;\n    border-radius:20px;\n    position: relative;\n}\n.skills .prog-item .skills-progress span {\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 100%;\n    background: #6c3429;\n    width: 10%;\n    border-radius: 10px;\n    -webkit-transition: all 1s;\n    transition: all 1s;\n}\n.skills .prog-item .skills-progress span:after {\n    content: attr(data-value);\n    position: absolute;\n    top: -5px;\n    right: 0;\n    font-size: 10px;\n    font-weight:600;    \n    color: #fff;\n    background:rgba(0, 0, 0, 0.9);\n    padding: 3px 7px;\n    border-radius: 30px;\n}\n\n"
                        }}
                    />
                </>





























            </div>
        </>

    )
}
