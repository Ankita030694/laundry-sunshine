import { NextResponse } from "next/server";

export async function verifyAdminToken(authHeader: string | null) {
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return { error: "Unauthorized: Missing token", status: 401 };
  }
  const token = authHeader.split(" ")[1];

  try {
    const firebaseApiKey = "AIzaSyAfPG-YhwqFWxNkqs0JgpIJ8rZO0jVRmfI";
    const lookupResponse = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${firebaseApiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idToken: token }),
      }
    );

    if (!lookupResponse.ok) {
      return { error: "Unauthorized: Invalid token", status: 401 };
    }

    const lookupData = await lookupResponse.json();
    const user = lookupData.users?.[0];
    if (!user || !user.email) {
      return { error: "Unauthorized: User not found", status: 401 };
    }

    // Only enforce email check if ADMIN_EMAIL is set in environment variables
    const adminEmail = process.env.ADMIN_EMAIL;
    if (adminEmail && user.email !== adminEmail) {
      return { error: "Unauthorized: Admin privileges required", status: 401 };
    }

    return { user };
  } catch (error) {
    console.error("Token verification failed:", error);
    return { error: "Unauthorized: Token verification failed", status: 401 };
  }
}
