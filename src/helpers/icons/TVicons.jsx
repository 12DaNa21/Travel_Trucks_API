const TVicons = ({ width = "32px", height = "32px", ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 8C0 8 0 4 4 4H28C28 4 32 4 32 8V20C32 20 32 24 28 24H20C20 25.3333 20.1667 26.3333 20.5 27H22C22.2652 27 22.5196 27.1054 22.7071 27.2929C22.8946 27.4804 23 27.7348 23 28C23 28.2652 22.8946 28.5196 22.7071 28.7071C22.5196 28.8946 22.2652 29 22 29H10C9.73478 29 9.48043 28.8946 9.29289 28.7071C9.10536 28.5196 9 28.2652 9 28C9 27.7348 9.10536 27.4804 9.29289 27.2929C9.48043 27.1054 9.73478 27 10 27H11.5C11.8333 26.3333 12 25.3333 12 24H4C4 24 0 24 0 20V8ZM2.796 6.29C2.57644 6.44309 2.4012 6.65145 2.288 6.894C2.11952 7.24697 2.02168 7.62948 2 8.02V20C2 20.65 2.156 21.004 2.29 21.204C2.43 21.412 2.63133 21.5813 2.894 21.712C3.23168 21.8736 3.59663 21.9706 3.97 21.998L4.02 22H28C28.65 22 29.004 21.844 29.204 21.71C29.4236 21.5569 29.5988 21.3486 29.712 21.106C29.8736 20.7683 29.9706 20.4034 29.998 20.03L30 19.98V8C30 7.35 29.844 6.996 29.71 6.796C29.5569 6.57644 29.3486 6.4012 29.106 6.288C28.753 6.11952 28.3705 6.02168 27.98 6H4C3.35 6 2.996 6.156 2.796 6.29Z"
      fill="#101828"
    />
  </svg>
);

export default TVicons;
