const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
  const [otp, setOtp] = useState(null);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (secondsLeft <= 0) {
      return;
    }

    timerRef.current = setInterval(() => {
      setSecondsLeft((previousSeconds) => previousSeconds - 1);
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [secondsLeft]);

  const generateOtp = () => {
    const newOtp = Array.from({ length: 6 }, () =>
      Math.floor(Math.random() * 10)
    ).join("");

    setOtp(newOtp);
    setSecondsLeft(5);
  };

  let timerMessage = "";
  if (secondsLeft > 0) {
    timerMessage = `Expires in: ${secondsLeft} seconds`;
  } else if (otp !== null) {
    timerMessage = "OTP expired. Click the button to generate a new OTP.";
  }

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">
        {otp !== null ? otp : "Click 'Generate OTP' to get a code"}
      </h2>
      <p id="otp-timer" aria-live="polite">
        {timerMessage}
      </p>
      <button
        id="generate-otp-button"
        onClick={generateOtp}
        disabled={secondsLeft > 0}
      >
        Generate OTP
      </button>
    </div>
  );
};
