"use client"
import Link from "next/link";
import React, { useState } from "react"; 
import axios from "axios";
import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation' 






const page = () => {
    const { push } = useRouter();
    const router = useRouter(); 
    const [inputs, setInputs] = useState({});
    const [active, setActive] = useState(false)
    const searchParams = useSearchParams()
    const [value, setValue] = useState(''); 
 
    const type = searchParams.get('type')?.toLowerCase() 
    const desc = searchParams.get('desc')?.toLowerCase() 
    const title = searchParams.get('title')?.toLowerCase() 
    const pdf = searchParams.get('pdf')?.toLowerCase()  
     

    // async function getData1() {
    //     const res = await fetch(`http://localhost:3000/api/post/${id}`, { cache: 'no-store' });
    //     if (!res.ok) {
    //         throw new Error("Failed to fetch data")
    //     }
    //     return res.json();
    // } 

    // const posts = await getData1(); 

   

    const handleChange = (e: any) => { 
        if(e.target.name == "phone"){ 
            const numericValue = e.target.value.replace(/[^0-9]/g, ''); 
            setValue(numericValue);
        }

        const name = e.target.name;
        const value = e.target.value;
        setInputs((prevState) => ({ ...prevState, [name]: value, type: type + "" }));
    }; 

    


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
Type: ${type} 
  `;

  const encodedMessage = encodeURIComponent(whatsappMessage);
  const phoneNumber = '96170171507'; // Change if needed
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};







    return (
        <div className="container-xl"> 
            <div className="aside-page"> 
                 
                <div className="body">
                    <div className="content pl-5 pt-5 pr-5 pb-3 background-gray">
                    <h2 className="color-primary font-weight-normal mb-30px">
    {title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()}
</h2>
 
                        <div
              className="prose lg:prose-xl max-w-[500px] custom-list"
              style={{ maxWidth: '500px' }}
              dangerouslySetInnerHTML={{ __html: desc }}
            />
                        {/* <p>Download the PDF below to view the detailed plans and benefits.</p> */}
                    </div>
                    {pdf?.length > 0 ? (
                    <div className="content pl-5 pt-3 pb-3 background-gray">
                        <a
                            href={pdf}
                            target="_blank"
                            className="btn btn-2"
                        >
                            Show PDF
                        </a>
                    </div>
                    ):(
                        <div></div>
                    )}
                </div>
            </div>
            <div className="clearfix" />
            <div className="call-me-back">
            <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="col-md-6 form-group">
                                <label htmlFor="first_name">
                                    First Name <span className="text-danger">*</span>
                                </label>
                                <input
                                    autoComplete="off"
                                    type="text"
                                    placeholder="First Name"
                                    className="form-control"
                                    name="firstname"
                                    defaultValue=""
                                    id="first_name"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col-md-6 form-group">
                                <label htmlFor="last_name">
                                    Last Name <span className="text-danger">*</span>
                                </label>
                                <input
                                    autoComplete="off"
                                    type="text"
                                    placeholder="Last Name"
                                    className="form-control"
                                    name="lastname"
                                    id="last_name"
                                    defaultValue=""
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-6 form-group">
                                <label htmlFor="email">
                                    Email <span className="text-danger">*</span>
                                </label>
                                <input
                                    autoComplete="off"
                                    type="email"
                                    placeholder="Email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    defaultValue=""
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col-md-6 form-group">
                                <label htmlFor="phone_number">
                                    Mobile Number <span className="text-danger">*</span>
                                </label>
                                <input
                                    autoComplete="off"
                                    type="tel"
                                    placeholder="Mobile Number"
                                    className="form-control"
                                    name="phone"
                                    id="phone_number"
                                    defaultValue=""
                                    value={value} 
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <br />
                        <div className="row">
                            <div className="col-md-12 text-right">
                                <button
                                    id="submit"
                                    type="submit"
                                    className="btn btn-3 btn-blue ml-3"
                                    disabled={active}
                                    style={{background: "rgb(115, 27, 26)",color: "white"}}
                                >
                                    Submit
                                </button>
                            </div>
                        </div> 
                    </form>
            </div>
            <br />
            <br />
        </div>

    )
}

export default page