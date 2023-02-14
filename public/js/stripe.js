import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51Mb4bSJpcxmAwZmErPfYwkftoyDrPBYeml3bnxueIAf62ooT09iITpp6FyjunFxaTK3SjoRerNzjNNvqvzIoKQjq00ZxLxPG1U'
);

export const bookTour = async (tourId) => {
  try {
    const session = await axios(`/api/v1/booking/checkout-session/${tourId}`);

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    showAlert('error', err);
  }
};
