const CartIcon = ({
  color = '#000',
  width = 24,
  height = 24,
}: {
  color?: string;
  width?: number;
  height?: number;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>shopping cart</title>
    <path
      d="M21.1664 5.22222H7.00972L6.70674 3.67333C6.63021 3.28222 6.28743 3 5.88889 3H2.41667C2.18656 3 2 3.18656 2 3.41667V4.25C2 4.4801 2.18656 4.66667 2.41667 4.66667H5.20278L7.61924 17.0174C7.23597 17.4167 7 17.9584 7 18.5556C7 19.7828 7.99493 20.7778 9.22222 20.7778C10.4495 20.7778 11.4444 19.7828 11.4444 18.5556C11.4449 18.1654 11.3421 17.782 11.1464 17.4444H16.1869C15.9913 17.782 15.8885 18.1654 15.8889 18.5556C15.8889 19.7828 16.8839 20.7778 18.1111 20.7778C19.3384 20.7778 20.3334 19.7828 20.3334 18.5556C20.3334 17.9258 20.071 17.3578 19.6502 16.9534L19.6861 16.7882C19.7991 16.2688 19.4034 15.7778 18.8718 15.7778H9.075L8.74896 14.1111H19.5964C19.9884 14.1111 20.3274 13.8379 20.4107 13.4548L21.9807 6.23257C22.0936 5.71316 21.6979 5.22222 21.1664 5.22222ZM9.22222 19.3889C8.76271 19.3889 8.38889 19.0151 8.38889 18.5556C8.38889 18.096 8.76271 17.7222 9.22222 17.7222C9.68174 17.7222 10.0556 18.096 10.0556 18.5556C10.0556 19.0151 9.68174 19.3889 9.22222 19.3889ZM18.1111 19.3889C17.6516 19.3889 17.2778 19.0151 17.2778 18.5556C17.2778 18.096 17.6516 17.7222 18.1111 17.7222C18.5706 17.7222 18.9444 18.096 18.9444 18.5556C18.9444 19.0151 18.5706 19.3889 18.1111 19.3889ZM18.9249 12.4444H8.42292L7.33576 6.88889H20.1326L18.9249 12.4444Z"
      fill={color}
    />
  </svg>
);

export default CartIcon;