import localFont from "next/font/local";

export const bosch_sans_global = localFont({
  src: [
    {
      path: "./bosch-sans-global/BoschSansGlobal-Regular-v2_300.ttf",
      weight: "400",
    },
    {
      path: "./bosch-sans-global/BoschSansGlobal-Bold-v2_300.ttf",
      weight: "700",
    },
  ],
});
