import React from "react"

export default function AbstractSpot() {
  return (
    <div className="absolute -top-10 -right-10 h-full">
      {/* CLIPPED AREA (your current mask) */}
      <svg
        width="674"
        height="473"
        viewBox="0 0 674 473"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M335.877 166.422C272.091 153.639 303.377 62.4225 103.377 35.4138L646.065 35.4138V309.063C516.132 334.53 499.91 288.836 476.877 221.422C453.843 154.009 415.608 182.402 335.877 166.422Z"
          fill="#00BFA5"
          stroke="#00BFA5"
          strokeWidth="10"
        />
        <path
          d="M668.377 375.422C622.543 398.756 501.677 445.622 468.877 364.422C427.877 262.922 450.377 191.422 327.377 211.922C204.377 232.422 357.377 68.4225 0.876709 4.92249"
          stroke="#00BFA5"
          strokeWidth="10"
        />
        <path
          d="M670.877 425.422C625.043 448.755 467.677 506.622 434.877 425.422C393.877 323.922 416.377 252.422 293.377 272.922C170.377 293.422 358.877 72.9225 2.37671 9.42249"
          stroke="#00BFA5"
          strokeWidth="10"
        />
      </svg>
    </div>
  )
}
