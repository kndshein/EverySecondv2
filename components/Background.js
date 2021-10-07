import Image from "next/image";

export default function Background({ link, alt }) {
  return (
    <div className="background-image">
      <Image
        className="image"
        src={link}
        alt={alt}
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}
