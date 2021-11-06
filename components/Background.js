import Image from "next/image";

export default function Background({ link, alt, artist }) {
  return (
    <div className="background-image">
      <Image
        className="image"
        src={link}
        alt={alt}
        layout="fill"
        objectFit="cover"
      />
      <a
        className="artist"
        href={`https://www.unsplash.com/${artist}`}
        target="_blank"
        rel="noreferrer"
      >
        {artist}
      </a>
    </div>
  );
}
