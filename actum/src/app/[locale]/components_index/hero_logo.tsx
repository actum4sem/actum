// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";

// export default function HeroLogo() {
//   const { scrollY } = useScroll();
//   //   const opacity = useTransform(scrollY, [0, 300], [1, 0]);
//   const opacity = useTransform(scrollY, [100, 250], [1, 0]);
//   const y = useTransform(scrollY, [0, 300], [0, -120]);

//   return (
//     <motion.div style={{ opacity, y }} className="content row-[2/4] self-center z-10 pt-12">
//       <p className="font-ocr text-[22vw] leading-none tracking-[0.04em]">actum</p>
//     </motion.div>
//   );
// }

// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useEffect } from "react";

// export default function HeroLogo() {
//   const { scrollY } = useScroll();
//   const opacity = useTransform(scrollY, [100, 250], [1, 0]);
//   const y = useTransform(scrollY, [0, 300], [0, -120]);

//   useEffect(() => {
//     const unsubscribe = scrollY.on("change", (v) => console.log("scrollY:", v));
//     return () => unsubscribe();
//   }, [scrollY]);

//   return (
//     <motion.div
//       style={{ opacity, y }}
//       className="content row-[2/4] self-center z-10"
//     >
//       <p className="font-ocr text-[22vw] leading-none tracking-[0.04em]">
//         actum
//       </p>
//     </motion.div>
//   );
// }

"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroLogo() {
  const { scrollY } = useScroll();
  //   const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const opacity = useTransform(scrollY, [100, 250], [1, 0]);
  const y = useTransform(scrollY, [0, 300], [0, -120]);

  return (
    <motion.div style={{ opacity, y }} className="col-[content-start/content-end] row-[2/4] self-center z-10">
      <p className="font-ocr text-[16vw] leading-none tracking-[0.04em]">actum</p>
    </motion.div>
  );
}
