import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Checkout`.
 */
export type CheckoutProps = SliceComponentProps<Content.CheckoutSlice>;

/**
 * Component for "Checkout" Slices.
 */
const Checkout = ({ slice }: CheckoutProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="checkout-page">
        <h1>Checkout</h1>
      </div>
    </section>
  );
};

export default Checkout;
