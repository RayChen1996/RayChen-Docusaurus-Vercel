```tsx
<div className="relative aspect-[4/3] w-full" data-aos="fade-left">
  <Image
      key={`main-image-${index}`}
      src={item.src}
      alt="main-image"
      fill
      sizes="(min-width: 768px) 100vw, 50vw"
      className={clsx(
        "rounded-sm object-cover animate__faster animate__animated",
        index === currentIndex
          ? "z-[1] animate__fadeInRight"
          : "animate__fadeOutRight",
      )}
      placeholder="blur"
    />
</div>
```