import { NextResponse } from "next/server"
import prisma from "../../../libs/prismadb"
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const createWhatsAppURL = (inputs, items, total, delivery, subtotal) => {
    const { address, fname, lname, phone, email, note, deliveryType } = inputs;

    const message = `
*Customer Information:*
Email: ${email}
Name: ${fname} ${lname}
Phone: ${phone}
Address: ${address}
Note: ${note}

*Order Details:*
${items.map((item, index) => `
Item ${index + 1}:
- Name: ${item.title}
- Quantity: ${item.quantity} 
- Sizes:
${item.selectedSizes?.map(size => `   - Size: ${size.size}, Qty: ${size.qty}, Price: $${size.price}`).join('\n') || '   - N/A'}
- Options:
${item.selectedNames?.map(name => `   - Name: ${name.name}, Qty: ${name.qty}`).join('\n') || '   - N/A'}
- Image: ${item.img?.[0] || 'N/A'}
`).join('\n')}

Subtotal: $${subtotal}
Delivery Type: ${deliveryType}
Delivery fee: $${delivery}
*Total Amount:* $${total}
`;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '96178850249';
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

export const POST = async (request) => {
    try {
        const body = await request.json();
        const {
            firstname, lastname, email, phone, type, message,
            items, total, delivery, subtotal, address, note, deliveryType, fname, lname
        } = body;

        const newOrder = await prisma.order.create({
            data: {
                firstname,
                lastname,
                email,
                phone,
                type,
                message
            }
        });

        const emailText = message
            ? `Name: ${firstname} ${lastname}\nEmail: ${email}\nPhone: ${phone}\n${message}`
            : `Name: ${firstname} ${lastname}\nEmail: ${email}\nPhone: ${phone}\nType: ${type}`;

        await resend.emails.send({
            from: "info@anazon.hadizproductions.com",
            to: "info@triplewin.solutions",
            subject: "New message from your website customer",
            text: emailText,
        });

        // Create WhatsApp message URL
        const whatsAppURL = createWhatsAppURL(
            { address, fname, lname, phone, email, note, deliveryType },
            items,
            total,
            delivery,
            subtotal
        );

        return NextResponse.json({
            order: newOrder,
            whatsAppURL
        });

    } catch (err) {
        return NextResponse.json({ message: "POST Error", err }, { status: 500 });
    }
};
