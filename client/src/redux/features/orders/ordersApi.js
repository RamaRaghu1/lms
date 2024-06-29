import { apiSlice } from "../api/apiSlice";

export const ordersApi= apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getAllOrders:builder.query({
            query:(type)=>({
                url:`get-orders`,
                method:"GET",
                credentials:"include",
            })
        }),
        createOrder: builder.mutation({
            query: (amount) => ({
                url: '/payment/order',
                method: 'POST',
               credentials:"include",
                body: { amount },
            }),
        }),
        // verifyPayment: builder.mutation({
        //     query: (paymentData) => ({
        //         url: '/payment/verify',
        //         method: 'POST',
        //         credentials:"include",
        //         body: paymentData,
        //     }),
        // }),
        getRazorpayPublishablekey:builder.query({
            query:()=>({
                url:`payment/razorpaypublishablekey`,
                method:"GET",
                credentials:"include"
            })
        }),
        createPaymentOrder:builder.mutation({
            query:(amount)=>({
                url:"payment",
                method:"POST",
                body:{
                    amount
                },
                credentials:"include"
            })
        }),
        createOrder:builder.mutation({
            query:({courseId, payment_info})=>({
                url:"create-order",
                body:{
                    courseId,
                    payment_info,
                },
                method:"POST",
                credentials:"include",
            })
        })
    })
})

export const {useGetAllOrdersQuery,useCreatePaymentOrderMutation,useGetRazorpayPublishablekeyQuery,useCreateOrderMutation}=ordersApi