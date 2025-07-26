
"use client";  // ✅ Ensure it's at the top

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Resume() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to Google Drive resume link
    window.location.href = "https://drive.google.com/drive/folders/1vNzdpZThnSMBqjWKHqgNwHzDMDNy8ZHl?usp=sharing";
  }, []);

  return null; // ✅ No UI needed since it's just a redirect
}
