import { NextResponse } from "next/server"
import prisma from "../../../libs/prismadb"
import { Resend } from "resend";
import { redirect } from 'next/navigation';

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (request) => {
    try {
        const body = await request.json();
        const {firstname, lastname, email, phone, type, message} = body;

        const newOrder = await prisma.order.create({
            data: {
                firstname,
                lastname,
                email,
                phone,
                type,
                message
            }
        })

        if(message != null ){
            resend.emails.send({
                from: "info@anazon.hadizproductions.com",
                to: "info@triplewin.solutions",
                subject: "New message from your website customer",
                text: "Name: " + firstname + " " + lastname + "\nEmail:" + email + "\nPhone:" + phone + "\n" + message,
            })
        }
        else{
            resend.emails.send({
                from: "info@anazon.hadizproductions.com",
                to: "info@triplewin.solutions",
                subject: "New message from your website customer",
                text: "Name: " + firstname + " " + lastname + "\nEmail:" + email + "\nPhone:" + phone + "\nType:" + type ,
            })
        }


        return NextResponse.json(newOrder);

    } catch(err) {
        return NextResponse.json({message: "POST Error", err}, {status: 500})
    }
}

 