import * as React from 'react'

const ProductIcon = (props) => (
  <svg
    width={32}
    height={31}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.61 30c8.068 0 14.608-6.418 14.608-14.336S23.678 1.328 15.61 1.328C7.541 1.328 1 7.746 1 15.664S7.54 30 15.61 30Z"
      stroke="#303030"
      strokeWidth={2}
      strokeMiterlimit={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g clipPath="url(#a)" fillRule="evenodd" clipRule="evenodd" fill="#303030">
      <path d="m12.546 22.428 3.914-.952s2.65 1.97 4.622 2.57c0 0-.871-3.304-.658-5.693 0 0-1.527.212-2.314-.791 0 0 .399-.718 1.354-.657.955.06 1.79.708 1.719 2.617 0 0 .933.291 1.727.34 0 0-.936-1.051-1.545-2.525-.608-1.474-.27-.69-.48-1.164-.21-.474-.526-1.431-1.692-2.25 0 0-1.932-1.493-4.442-.595 0 0-2.041.738-2.612 3.047 0 0-.245.924.2 2.347 0 0 .505 1.392.476 2.276-.03.885-.18.93-.27 1.43Z" />
      <path d="m20.382 10.385 1.339-3.03s-2.53-1.715-6.44-.97c-3.908.746-6.216 3.47-6.722 4.408-.507.937-1.257 2.511-1.021 4.976.235 2.464.608 1.971.752 2.86.145.889.688 1.887 0 3.612 0 0-.302.574-.752.926 0 0 1.107-.076 1.814-1.438 0 0 .829-1.116.36-3.856 0 0-.742-2.666.378-4.453 0 0 .534-1.231 2.231-2.484 1.698-1.253 4.816-1.904 8.061-.55Z" />
      <path d="m14.21 12.793.44-.213-.636-1.992-.774.386s.495 1.298.97 1.819ZM15.88 12.33s-.13-1.087.033-2.11c0 0 1.252-.33 2.596.232 0 0-2.083.072-2.39 1.879h-.239ZM14.435 10.46s.186 1.152.502 2.019l.5-.093s-.005-1.69 0-2.097c0 0-.718.022-1.002.172ZM12.143 11.688l1.332 1.596.401-.314-1.04-1.755s-.418.009-.693.473ZM11.278 12.592s.233-.457.589-.642l1.327 1.478s-.136.205-.279.308c0 0-1.407-.956-1.637-1.144ZM10.605 13.576s.083-.393.395-.665c0 0 1.22.846 1.512 1.04 0 0-.158.273-.217.4 0 0-1.405-.604-1.69-.775ZM10.13 14.678s.072-.4.281-.68c0 0 1.228.406 1.657.625 0 0-.05.265-.141.368 0 0-1.618-.267-1.797-.313ZM10.057 17.51s-.258-1.828.06-2.366c0 0 1.166.098 1.572.218l-.078.35s-.53-.041-1.006.518c-.359.421-.554 1.075-.548 1.28Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path
          fill="#fff"
          transform="translate(7.493 6.197)"
          d="M0 0h15.421v17.856H0z"
        />
      </clipPath>
    </defs>
  </svg>
)

export default ProductIcon
