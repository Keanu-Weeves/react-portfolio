import { useState } from "react";

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => { // 'url' will be the form's path (e.g., "/")
    setLoading(true);
    try {
      // Netlify Forms expects data in URL-encoded format, not JSON.
      // It also expects a 'form-name' field that matches the 'name' attribute
      // of your hidden HTML form.
      const formData = new URLSearchParams();
      // Add the crucial 'form-name' field
      formData.append("form-name", "contact"); // Must match the 'name' attribute in public/index.html form

      // Append all your form values
      for (const key in data) {
        formData.append(key, data[key]);
      }
      console.log("DEBUG: useSubmit attempting fetch POST to:", url, "with body:", formData.toString());

      const httpResponse = await fetch(url, { // Send to the form's path (e.g., "/")
        method: "POST",
        headers: {
          // IMPORTANT: Netlify needs this specific Content-Type for URL-encoded data
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(), // Convert URLSearchParams to a string
      });

      console.log("DEBUG: Fetch response recieved. Status:", httpResponse.status, "OK status:", httpResponse.ok);

      // Netlify typically returns a 200 OK status on successful submission
      // and redirects to a success page if you configure one, or just handles it.
      if (httpResponse.ok) {
        setResponse({ type: 'success', message: `Thanks for your submission, ${data.firstName}! We will get back to you shortly.` });
      } else {
        const errorText = await httpResponse.text();
        console.error("DEBUG: Server responded with non-OK status. Status:", httpResponse.status, "Response text:", errorText);
        // You might want to inspect httpResponse.status and text() for more specific errors
        setResponse({ type: 'error', message: 'Something went wrong with the submission. Please try again later.' });
      }
    } catch (error) {
      console.error("DEBUG: Submission caught an error:", error); // Log the actual error for debugging
      setResponse({ type: 'error', message: 'Network error or unhandled exception. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;