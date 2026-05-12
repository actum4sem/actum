import Image from "next/image";

export default function VideoSection() {
  return (

// {/* <section className="full-bleed grid grid-cols-subgrid grid-rows-[1fr_auto] overflow-hidden">
//   <video
//     src="/assets/index/dummy-video.mp4"
//     autoPlay
//     loop
//     muted
//     playsInline
//     className="col-[full-start/full-end] row-[1/3] w-full max-h-[50vh] object-cover"
//   />

//  <div className="col-[full-start/3] row-[1/3] self-end justify-self-start overflow-hidden">
//     <Image
//       src="/assets/global/dots_big_group.svg"
//       alt=""
//       width={520}
//       height={720}
//       className="w-[32vw] max-w-[520px]"
//     />
//   </div>
// </section> */}

<section className="full-bleed grid grid-cols-subgrid grid-rows-[1fr_auto] overflow-hidden max-h-[50vh]">
  <video
    src="/assets/index/dummy-video.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="col-[full-start/full-end] row-[1/3] w-full h-full object-cover"
  />

  <div className="col-[full-start/3] row-[1/3] self-end justify-self-start translate-y-1/2">
    <Image
      src="/assets/global/dots_big_group_white.svg"
      alt=""
      width={520}
      height={720}
      className="w-[32vw] max-w-130"
    />
  </div>
</section>
  );
}
