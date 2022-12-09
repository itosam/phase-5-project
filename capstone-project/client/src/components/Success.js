import success from "./Images/success.png";

const Success = () => {
  return (
    <div>
      <img className="home_img" alt="payment_success" src={success} />
      <div style={{marginTop:"20px", textAlign: "center" }}>
        <h5>Payment Confirmed</h5>
        <br />
        <p>
          Thank you for your purchase! Your order is in the works. Please check your email for tracking.
        </p>
        <br />
      </div>
    </div>
  );
};

export default Success;
