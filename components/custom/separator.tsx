import Image from "next/image";

type ImageSeparatorProps = {
  src: string;
  alt?: string;
  height?: number;
};

export default function ImageSeparator({
  src,
  alt = "separator",
  height = 60,
}: ImageSeparatorProps) {
  return (
    <div className="w-full flex justify-center">
      <Image
        src={src}
        alt={alt}
        width={1000}
        height={height}
        className="w-full  object-contain"
      />
    </div>
  );
}
