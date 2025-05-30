// "use client";  // ✅ Add this at the top

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

// export default function Resume() {
//   const router = useRouter();

//   useEffect(() => {
//     console.log("Component mounted");
//   }, []);

//   return <div>Resume Page</div>;
// }


// export default function Resume() {
//   const router = useRouter();

//   useEffect(() => {
//     // Redirecting to Google Drive resume link
//     window.location.href = 
//   }, []);

//   return null; // Empty component since it's just a redirect
// }

"use client";  // ✅ Ensure it's at the top

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Resume() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to Google Drive resume link
    window.location.href = "https://drive.google.com/file/d/1lCLBemz9WE081qrft5pxC7OgfAuwV65D/view?usp=sharing";
  }, []);

  return null; // ✅ No UI needed since it's just a redirect
}
