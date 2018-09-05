import React, { Component } from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";
class Paypal extends Component {
  render() {
    const onSuccess = payment => {
      //console.log(JSON.stringify(payment));
      this.props.onSuccess(payment);

      //paid
      //cancelled
      //paymentToken
      //returnurl
      //adress
      //    recipient_name
      //    city
      //    state
      //    postal_code
      //    country_code
      // emial
    };

    const onCancel = data => {
      console.log(JSON.stringify(data));
    };

    const onError = er => {
      console.log(JSON.stringify(er));
    };

    let env = "sandbox";
    let currency = "USD";
    let total = this.props.toPay;

    const client = {
      sandbox:
        "AbdG3G77E-D14hqWLgAaQzYrHe9caTrd8Ay_j6GyZUApCilP1nZzJNm6XpYgKjvgfhXomK0QLCdyezyE",
      production: ""
    };

    return (
      <div>
        <PaypalExpressBtn
          env={env}
          client={client}
          currency={currency}
          total={total}
          onError={onError}
          onSuccess={onSuccess}
          onCancel={onCancel}
          style={{
            size: "large",
            color: "blue",
            shape: "rect",
            label: "checkout"
          }}
        />
      </div>
    );
  }
}

export default Paypal;
