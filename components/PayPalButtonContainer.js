import { useEffect } from "react"
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js"
import swal from "sweetalert";

const style = { "layout": "vertical" };

const PayPalButtonContainer = ({ currency, showSpinner, price }) => {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency, showSpinner]);

    return (
        <>
            { (showSpinner && isPending) && <div className="spinner" /> }
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[price, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    currency_code: currency,
                                    value: price,
                                },
                            },
                        ],
                    })
                    .then((orderId) => {
                        return orderId;
                    });
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function () {
                        swal('Your payment was successful!')
                    });
                }}
            />
        </>
    );
}

export default PayPalButtonContainer;