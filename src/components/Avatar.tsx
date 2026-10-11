export default function Avatar({ alt }: { alt: string }) {
  return (
    <picture>
      <source srcSet="/images/hans.webp" type="image/webp" />
      <img
        src="/images/hans.jpg"
        alt={alt}
        className="avatar"
        width={96}
        height={96}
        decoding="async"
      />
    </picture>
  );
}
