import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, phone, service, message } = body;

        // Basic validation
        if (!name || !email || !phone || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        if (phone.length !== 10) {
            return NextResponse.json(
                { error: "Invalid phone number" },
                { status: 400 }
            );
        }

        // Save to Firestore
        const docRef = await addDoc(collection(db, "contacts"), {
            name,
            email,
            phone,
            service: service || "Not specified",
            message,
            createdAt: serverTimestamp(),
        });

        return NextResponse.json(
            { message: "Success", id: docRef.id },
            { status: 200 }
        );
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
