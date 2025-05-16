"use client"

import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
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

  
 
      const router = useRouter(); 
      const [inputs, setInputs] = useState({});
      const [active, setActive] = useState(false) 
      const [value, setValue] = useState(''); 
      const [data, setData] = useState<AboutData | null>(null);
      const [loading, setLoading] = useState<boolean>(true);
  
    const handleSubmit = (e: any) => {
  e.preventDefault();
  setActive(true);

  axios
    .post("/api/order", inputs)
    .then((res) => {
      console.log(res);

      const whatsappUrl = createWhatsAppURL(inputs);
      window.open(whatsappUrl, "_blank"); // Open WhatsApp message
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      setInputs({});
      setActive(false);
      router.push('/thank');
    });
};




const createWhatsAppURL = (inputs) => {
  const { firstname, lastname, email, phone, type, message } = inputs;

  const whatsappMessage = `
*Customer Inquiry:*
Name: ${firstname} ${lastname}
Email: ${email}
Phone: ${phone} 
Message: ${message}
  `;

  const encodedMessage = encodeURIComponent(whatsappMessage);
  const phoneNumber = '96170171507'; // Change if needed
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};
  
      const handleChange = (e: any) => { 
          if(e.target.name == "phone"){ 
              const numericValue = e.target.value.replace(/[^0-9]/g, ''); 
              setValue(numericValue);
          }
  
          const name = e.target.name;
          const value = e.target.value;
          setInputs((prevState) => ({ ...prevState, [name]: value}));
      };
   

  
      useEffect(() => {
          fetch("/api/contact/678f9473287cecbe04342a81")
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
          <h4 className="text-center text-white pt-3">GET IN TOUCH</h4>

        </div>
      </div>
      <div className="container-xl bg-white custom-page-1 mt-5">
        <div>
          <div className="pl-5 pt-4 pr-5">
            <p className="font-sinkinsans-700bold color-blue get-in-touch-title">
              Send us a message
            </p>
            <form onSubmit={handleSubmit}>
 
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group row">
                    <div className="col-sm-12">
                      <input
                        className="form-control"
                        name="firstname"
                        type="text"
                        placeholder="First Name"
                        onChange={handleChange}
                        required
                      />
                    </div> 
                  </div>

                  <div className="form-group row pt-2">
                    <div className="col-sm-12">
                      <input
                        className="form-control"
                        name="lastname"
                        type="text"
                        placeholder="Last Name"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group row pt-2">
                    <div className="col-sm-12">
                      <input
                        className="form-control"
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group row pt-2">
                    <div className="col-sm-12">
                      <input
                        className="form-control"
                        name="phone"
                        type="text"
                        placeholder="Phone Number"
                        value={value} 
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group row">
                    <div className="col-sm-12">
                      <textarea
                        className="form-control form-control-text-area"
                        name="message"
                        placeholder="Message"
                        rows={9}
                        required
                        onChange={handleChange}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                 
              </div>
              <div className="form-group row pt-2">
                <div className="col-sm-12">
                  <button type="submit" className="btn btn-2 pr-5 pl-5 float-right">
                    Send
                  </button>
                </div>
              </div>
              <br />
            </form>
          </div>
        </div>
        <div className="background-gray color-primary">
          <div className="pl-5 pr-5" style={{ paddingTop: "0.1px" }}>
            <div className="row contact-details">
              <div className="col-lg-6">
                 
                <div className="clearfix">
                  <img
                    src="https://www.securiteassurance.com/images/icon-location.svg"
                    alt="sa location"
                    className="float-left mr-3"
                  />
                  <div className="float-left" dangerouslySetInnerHTML={{ __html: data.description }}> 
                  </div>
                </div>
              </div>
              <div className="col-lg-1"> 
              </div>
 
            </div>



 
          </div>
          <br />
        </div>
      </div>
      <div className="clearfix" />
      
    </>

  )
}
