import React from 'react';

function Logo({ color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 877.65 437.95">
      <path
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="17"
        d="M144.5 -181.2L144.5 -181.2 144.5 -181.2 144.5 -181.2 144.5 -181.2z"
      />
      <rect
        width="11.46"
        height="311.48"
        y="50.82"
        rx="5.73"
        ry="5.73"
        fill={color}
      />
      <rect
        width="11.46"
        height="311.48"
        x="237.01"
        y="467.53"
        rx="5.73"
        ry="5.73"
        transform="rotate(-90 65.89 533.42)"
        fill={color}
      />
      <rect
        width="11.46"
        height="436.75"
        x="282.63"
        y="219.05"
        rx="5.73"
        ry="5.73"
        transform="rotate(-45 -77.077 409.096)"
        fill={color}
      />
      <rect
        width="11.46"
        height="311.48"
        x="432.87"
        y="281.79"
        rx="5.73"
        ry="5.73"
        transform="rotate(180 395.095 304.175)"
        fill={color}
      />
      <rect
        width="11.46"
        height="311.48"
        x="282.86"
        y="131.78"
        rx="5.73"
        ry="5.73"
        transform="rotate(90 378.435 110.665)"
        fill={color}
      />
      <rect
        width="11.46"
        height="168.55"
        x="348.25"
        y="336.06"
        rx="5.73"
        ry="5.73"
        transform="rotate(90 443.835 243.485)"
        fill={color}
      />
      <circle
        cx="183.72"
        cy="188.69"
        r="121.02"
        fill="none"
        stroke={color || 'black'}
        strokeMiterlimit="10"
        strokeWidth="17"
      />
      <text
        fontFamily="Pristina-Regular, Pristina"
        fontSize="176"
        transform="translate(377.84 148.11)"
        fill={color}
      >
        Lilyanne
        <tspan x="0" y="211.2">
          Hany
        </tspan>
      </text>
    </svg>
  );
}

export default Logo;
