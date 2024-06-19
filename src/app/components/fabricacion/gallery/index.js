import { Gallery } from "next-gallery";
import { images } from "@/app/data/data";

export default function Page() {
  return (
    <div className="flex flex-col gap-10">
      <Gallery
        widths={[500, 1000, 1600]}
        ratios={[2.2, 4, 6, 8]}
        images={images}
        lastRowBehavior="match-previous"
        // overlay={(i) => <div style={overlayStyle}>{overlays[i]}</div>}
      />
    </div>
  );
}
