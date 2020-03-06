const stripe = require("stripe")(process.env.STRIPE_KEY);
const { v4: uuidv4 } = require("uuid");

const makePayment = async (req, res) => {
  let status;

  try {
    const { id, card, email, total, name } = req.body;

    const customer = await stripe.customers.create({
      email: email,
      source: id
    });

    const idempotencyKey = uuidv4();
    const charge = await stripe.charges.create(
      {
        amount: total,
        currency: "usd",
        customer: customer.id,
        receipt_email: email,
        description: name,
        shipping: {
          name: card.name,
          address: {
            line1: card.address_line1,
            line2: card.address_line2,
            city: card.address_city,
            country: card.address_country,
            postal_code: card.address_zip
          }
        }
      },
      {
        idempotencyKey
      }
    );

    console.log("Charge: ", { charge });
    status = "success";
  } catch (error) {
    console.log("Error:", error);
    status = "failure";
  }

  res.json({ status });
};

module.exports = { makePayment };
