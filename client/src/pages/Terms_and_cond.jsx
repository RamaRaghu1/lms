import React from "react";
import { Link } from "react-router-dom";

function Terms_and_cond() {
  const privacy = [
    {
      id: 1,
      heading: "Online Payments",
      paragraph: [
        "Kairaa Blockchain Academy provides this online payment solution. ",
        "Kairaa Blockchain Academy may revise these terms from time to time, and any modifications will take effect immediately upon being posted online.",
        "Please make sure you are aware of the current terms. Kairaa Blockchain Academy s domicile is in India.",
      ],
    },
    {
      id: 2,
      heading: "Terms & Conditions",
      paragraph: [
        "Please read these terms carefully before using the online payment system. ",
        "Using the online payment function on our website shows that you agree to these conditions. If you do not agree to these terms, do not use this feature. ",
      ],
    },
    {
      id: 3,
      heading: "All payments are subject to the following conditions:- ",

      paragraph: [
        "When you log in with your unique password, the descriptions of matchmaking services are personalized to your specific needs.",

        " Payment is typically demanded in advance.All fees are quoted in Indian rupees. The Kairaa Blockchain Academy reserves the right to alter fees at any time. ",
        "Your payment will usually reach the kairaablockchain academy account to which you are making a payment within two working days. ",
        "1.We cannot assume responsibility for a payment not reaching the correct account of kairaablockchain academy because you provided a wrong account number or personal information. We cannot assume liability if payment is refused or declined by the credit/debit card supplier for any reason.  ",
        "2.If the card supplier denies payment, Kairaa Blockchain Academy is under no duty to notify you. You should confirm with your bank/credit/debit card provider that the payment has been debited from your account.  ",
        "3. Kairaa Blockchain Academy will not be liable for any damages arising from the use, inability to use, or results of use of this site, any websites linked to this site, or the materials or information contained at any or all such sites, whether based on warranty, contract, tort, or any other legal theory, and whether or not advised of the possibility of such damages.",
      ],
    },
    {
      id: 4,
      heading: "Refund Policy ",

      paragraph: [
        "* If the Customer leaves the Kairaa blockchain academy before they complete their service period, there shall be no entitlement to a refund of paid service fees. ",
        "* Refunds, if applicable, at the discretion of the Management, will only be made to the debit/credit card used for the original transaction. For the avoidance of doubt nothing in this Policy shall require the Kairaa blockchain academy to refund the Fees (or part thereof) unless such Fees (or part thereof) have previously been paid. ",
      ],
    },
    {
      id: 5,
      heading: "Privacy Policy ",
      paragraph: [
        "This Privacy Policy applies to all products, services, and websites provided by Kairaa blockchain academy. ",
        "We may occasionally upload product-specific privacy warnings or Help Centre materials to provide further information about our products. ",
        "If you have any questions regarding this Privacy Policy, please contact us through our website or email us at support@kairaaacademy.com. We collect information and use it to support our Kairaa blockchain academy. ",
      ],
    },
    {
      id: 6,
      heading: "Changes to Our Privacy Policy ",
      paragraph: [
        "Kairaa blockchain academy reserves the entire right to modify/amend/remove this privacy statement anytime and without any reason. ",
        "Nothing contained herein creates or is intended to create a contract/agreement between Kairaa blockchain academy and any user visiting the Kairaa blockchain academy website or providing identifying information of any kind. ",
      ],
    },
    {
      id: 7,
      heading: "DND Policy",
      paragraph: [
        "To unsubscribe from our email notifications, SMS alerts, or contacts, simply send an email to support@kairaaacademy.com with your mobile number. Your email will be removed from the alert list.",
      ],
    },
  ];

  return (
    <>
      <div className="bg-blue-200 p-20 ">
        <h2 className="ml-5 md:text-5xl lg:text-4xl text-3xl font-headingFont  sm:text-3xl font-bold text-black p-2 border-l-4 border-l-black">
          Payment Terms And Conditions
        </h2>
      </div>
      <div className="leading-7 mx-auto p-3 container py-10 ">
        {privacy.map((e) => {
          return (
            <>
              <h2 className="text-2xl font-headingFont font-bold py-3">
                {e.heading}
              </h2>
              <li className="text-lg mb-3">{e.paragraph}</li>
            </>
          );
        })}
        <Link to="mailto:support@kairaaacademy.com">
          <p className="font-bold py-3">
            Contact Details: Email: support@kairaaacademy.com
          </p>
        </Link>
      </div>
    </>
  );
}

export default Terms_and_cond;
