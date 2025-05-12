import { loadStripe, Stripe } from "@stripe/stripe-js";

let stripePromise: Stripe | null = null;

export const getStripe = async () => {
  if (!stripePromise) {
    stripePromise = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!
    );
  }
  return stripePromise;
};
