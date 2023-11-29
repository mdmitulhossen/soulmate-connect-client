import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Box, Button, Paper, Select, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import TextInput from "../shared/TextInput";
import toast from "react-hot-toast";
import ButtonLoader from "../Spinner/ButtonLoader";
import useAuth from "../../hooks/useAuth";

const CheckoutForm = ({data}) => {
    const axiosPublic = useAxiosPublic()
    const stripe = useStripe()
    const elements = useElements();
    const [paymentLoading, setPaymentLoading] = useState(false);
    const [clientSecret, setClientSecret] = useState("");

    const { user} = useAuth() || {};

    const { B_ID } = data || {};

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        try {
            axiosPublic
                .post("/payment/create-payment-intent", {
                    price: 4
                })
                .then((res) => setClientSecret(res.data.client_secret))
                .catch((error) => console.error("Error fetching data:", error));
        } catch (error) {
            console.log("useEffect error:", error);
        }
    }, [axiosPublic]);


    // console.log('sajknfsaf====>', clientSecret)


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }


        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment Error', error)
        }
        else {
            console.log('payment', paymentMethod)
        }

        // confirm payment
        console.log("from handle====>", clientSecret)
        setPaymentLoading(true)
        if (clientSecret) {
            const { paymentIntent, error: ConfirmError } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || '',
                    },
                }
            })
            if (ConfirmError) {
                setPaymentLoading(false)
                console.log('confirm Error', ConfirmError)
            } else {
                setPaymentLoading(true)
                console.log('Payment Intent', paymentIntent)
                const newContactRequestData = {
                    name: user?.displayName,
                    email: user?.email,
                    B_ID,
                    tx_ID: paymentIntent.id,
                }
                axiosPublic.post('/contactRequest/create', newContactRequestData)
                .then(res=>{
                    setPaymentLoading(false)
                    toast.success('Payment Successfull')
                }).catch(err=>{
                    setPaymentLoading(false)
                    toast.error('Payment Failed')
                })
                
            }
        }


    }


    return (
        <form
            onSubmit={handleSubmit}
            className="py-10">

            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    gap: '20px',
                    mb: 4
                }}
            >
                <TextInput label="BiodataID" type='text' value={B_ID} name="B_ID" readOnly={true} />
                <TextInput label="Email" type='text' value={user?.email} name="email" readOnly={true} />

            </Box>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    mt: 4
                }}
            >
                <Button disabled={!stripe} sx={{ maxWidth: '250px', mx: 'auto' }} variant="contained" color="warning" size="large" type="submit">{
                    paymentLoading ? <ButtonLoader size={12} color='#fff'></ButtonLoader> : 'Submit'
                }</Button>
            </Box>
        </form>
    );
};

export default CheckoutForm;