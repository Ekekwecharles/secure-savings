import emailjs from "@emailjs/browser";

export function formatUSD(value: number) {
  const formattedValue = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    // minimumFractionDigits: 0,
  }).format(value);

  return formattedValue;
}

export function sendTokenByEmail(
  token: number,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setStep: React.Dispatch<React.SetStateAction<number>>
) {
  setLoading(true);
  const templateParams = {
    to_email: "mr.thankyouuu@gmail.com",
    message: `Your verification token is: ${token}`,
  };

  emailjs
    .send(
      "service_af66t5l",
      "template_bn7c19d",
      templateParams,
      "QlFwB8q3Jojd5ujop"
    )
    .then(
      () => {
        alert(
          "A verification token has been sent to your registered mobile number ending in ***375. Please use this token to complete your transaction."
        );
        setLoading(false);
        setStep(2);
      },
      (error) => {
        alert("An error occurred while sending the token.");
        console.error("Error sending token:", error);
      }
    );

  setLoading(false);
  setStep(2);
}
