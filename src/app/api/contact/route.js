import { NextResponse } from "next/server"; 
import dbConnect from "@/lib/dbConnect";
import Contact from "@/models/Contact"; 
// CREATE 
export async function POST(request) { 
try { 
await connectDB(); 
const { name, email, phone, message } = await request.json(); 
const newContact = await Contact.create({ name, email, phone, message }); 
return NextResponse.json({ success: true, message: "Message sent successfully", newContact }); 
} catch (error) { 
console.error("Error in POST /api/contact:", error); 
return NextResponse.json({ success: false, message: error.message }, { 
status: 500 }); 
} 
} 
// READ ALL 
export async function GET() { 
try { 
await connectDB(); 
const contacts = await Contact.find().sort({ createdAt: -1 }); 
return NextResponse.json({ success: true, contacts }); 
} catch (error) { 
return NextResponse.json({ success: false, message: error.message }, { 
status: 500 }); 
} 
} 