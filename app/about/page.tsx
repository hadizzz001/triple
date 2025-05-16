"use client"

import { useEffect, useState } from "react";
interface Service {
    title: string;
    description: string;
}

interface Item {
    title: string;
    description: string;
}

interface AboutData {
    id: string;
    title: string;
    description: string;
    service: Service[];
    item: Item[];
}


export default function Home() {

    const [data, setData] = useState<AboutData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch("/api/about/678f8f0d2e57df52f73eb987")
            .then((response) => response.json())
            .then((result: AboutData) => {
                setData(result);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!data) {
        return <p>Error loading data.</p>;
    }

    return (
        <>


            <div className="custom-header-1">
                <div className="container-xl">
                    <br />
                    <h4 className="text-center text-white pt-3 mb-4 font-sinkinsans-700bold" style={{color:"#adadad"}}>
                        {data.title}
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
                            <span style={{ fontSize: "12pt" }} dangerouslySetInnerHTML={{ __html: data.description }}>

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
                        {data.service.map((item, index) => (
                            <div
                                key={index}
                                className="col-lg-4 mb-2 pl-0 pr-0 pb-3 pl-sm-4 pr-sm-4"
                                style={{ display: "flex", flexDirection: "column" }}
                            >
                                <div className="background-gray h-100">
                                    <div className="header background-light-blue list-inline p-1">
                                        <h5 className="list-inline-item text-white m-0">
                                            {item.title}
                                        </h5>
                                    </div>
                                    <div className="body p-3">
                                        <p className="m-0 font-size-13px">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            "\n        h1,\n        h2,\n        h3,\n        h4,\n        h5,\n        h6 {}\n        a,\n        a:hover,\n        a:focus,\n        a:active {\n            text-decoration: none;\n            outline: none;\n        }\n        \n        a,\n        a:active,\n        a:focus {\n            color: #333;\n            text-decoration: none;\n            transition-timing-function: ease-in-out;\n            -ms-transition-timing-function: ease-in-out;\n            -moz-transition-timing-function: ease-in-out;\n            -webkit-transition-timing-function: ease-in-out;\n            -o-transition-timing-function: ease-in-out;\n            transition-duration: .2s;\n            -ms-transition-duration: .2s;\n            -moz-transition-duration: .2s;\n            -webkit-transition-duration: .2s;\n            -o-transition-duration: .2s;\n        }\n        \n        ul {\n            margin: 0;\n            padding: 0;\n            list-style: none;\n        }\n        img {\n    max-width: 100%;\n    height: auto;\n}\nspan, a, a:hover {\n    display: inline-block;\n    text-decoration: none;\n    color: inherit;\n}\n.section-head {\n  margin-bottom: 60px;\n}\n.section-head h4 {\n  position: relative;\n  padding:0;\n  color:#606a9f;\n  line-height: 1;\n  letter-spacing:0.3px;\n  font-size: 34px;\n  font-weight: 700;  \n  text-align:center;\n  text-transform:none;\n  margin-bottom:30px;\n}\n.section-head h4:before {\n  content: '';\n  width: 60px;\n  height: 3px;\n  background: #606a9f;\n  position: absolute;\n  left: 0px;\n  bottom: -10px;\n  right:0;  \n  margin:0 auto;\n}\n.section-head h4 span {\n  font-weight: 700;\n  padding-bottom: 5px;\n  color:#2f2f2f\n}\np.service_text{\n  color:#cccccc !important;\n  font-size:16px;\n  line-height:28px;\n  text-align:center;    \n}\n.section-head p, p.awesome_line{\n  color:#818181;\n  font-size:16px;\n  line-height:28px;\n  text-align:center;  \n}\n\n.extra-text {\n    font-size:34px;\n    font-weight: 700;\n    color:#2f2f2f;\n    margin-bottom: 25px;\n    position:relative;\n    text-transform: none;\n}\n.extra-text::before {\n    content: '';\n    width: 60px;\n    height: 3px;\n    background: #606a9f;\n    position: absolute;\n    left: 0px;\n    bottom: -10px;\n    right: 0;\n    margin: 0 auto;\n}\n.extra-text span {\n    font-weight: 700;\n    color:#606a9f;\n}\n.item {\n    background: #fff;\n    text-align: center;\n    padding: 30px 25px;\n    -webkit-box-shadow:0 0px 25px rgba(0, 0, 0, 0.07);\n    box-shadow:0 0px 25px rgba(0, 0, 0, 0.07);\n    border-radius: 20px;\n    border:5px solid rgba(0, 0, 0, 0.07);\n    margin-bottom: 30px;\n    -webkit-transition: all .5s ease 0;\n    transition: all .5s ease 0;\n    transition: all 0.5s ease 0s;\n}\n.item:hover{\n    background:#606a9f;\n    box-shadow:0 8px 20px 0px rgba(0, 0, 0, 0.2);\n    -webkit-transition: all .5s ease 0;\n    transition: all .5s ease 0;\n    transition: all 0.5s ease 0s;\n}\n.item:hover .item, .item:hover span.icon{\n    background:#fff;\n    border-radius:10px;\n    -webkit-transition: all .5s ease 0;\n    transition: all .5s ease 0;\n    transition: all 0.5s ease 0s;\n}\n.item:hover h6, .item:hover p{\n    color:#fff;\n    -webkit-transition: all .5s ease 0;\n    transition: all .5s ease 0;\n    transition: all 0.5s ease 0s;\n}\n.item .icon {\n    font-size: 40px;\n    margin-bottom:25px;\n    color: #606a9f;   \n    width: 90px;\n    height: 90px;\n    line-height: 96px;\n    border-radius: 50px;\n}\n.item .feature_box_col_one{\n    background:rgba(247, 198, 5, 0.20);\n    color:#606a9f\n}\n.item .feature_box_col_two{\n    background:rgba(255, 77, 28, 0.15);\n    color:#606a9f\n}\n.item .feature_box_col_three{\n    background:rgba(0, 147, 38, 0.15);\n    color:#606a9f\n}\n.item .feature_box_col_four{\n    background:rgba(0, 108, 255, 0.15);\n    color:#606a9f\n}\n.item .feature_box_col_five{\n    background:rgba(146, 39, 255, 0.15);\n    color:#606a9f\n}\n.item .feature_box_col_six{\n    background:rgba(23, 39, 246, 0.15);\n    color:#606a9f\n}\n.item p{\n    font-size:15px;\n    line-height:26px;\n}\n.item h6 {\n    margin-bottom:20px;\n    color:#2f2f2f;\n}\n.mission p {\n    margin-bottom: 10px;\n    font-size: 15px;\n    line-height: 28px;\n    font-weight: 500;\n}\n.mission i {\n    display: inline-block;\n    width: 50px;\n    height: 50px;\n    line-height: 50px;\n    text-align: center;\n    background: #606a9f;\n    border-radius: 50%;\n    color: #fff;\n    font-size: 25px;\n}\n.mission .small-text {\n    margin-left: 10px;\n    font-size: 13px;\n    color: #666;\n}\n.skills {\n    padding-top:0px;\n}\n.skills .prog-item {\n    margin-bottom: 25px;\n}\n.skills .prog-item:last-child {\n    margin-bottom: 0;\n}\n.skills .prog-item p {\n    font-weight: 500;\n    font-size: 15px;\n    margin-bottom: 10px;\n}\n.skills .prog-item .skills-progress {\n    width: 100%;\n    height: 10px;\n    background: #e0e0e0;\n    border-radius:20px;\n    position: relative;\n}\n.skills .prog-item .skills-progress span {\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 100%;\n    background: #606a9f;\n    width: 10%;\n    border-radius: 10px;\n    -webkit-transition: all 1s;\n    transition: all 1s;\n}\n.skills .prog-item .skills-progress span:after {\n    content: attr(data-value);\n    position: absolute;\n    top: -5px;\n    right: 0;\n    font-size: 10px;\n    font-weight:600;    \n    color: #fff;\n    background:rgba(0, 0, 0, 0.9);\n    padding: 3px 7px;\n    border-radius: 30px;\n}\n\n"
                    }}
                />

                <br />







                <div className="feat bg-gray pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            {data.item.map((item, index) => (
                                <div key={index} className="section-head col-sm-12">
                                    <h4>
                                        <span style={{color:"#adadad"}}>{item.title}</span>
                                    </h4>
                                    <p>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>




            </div>
        </>

    )
}
