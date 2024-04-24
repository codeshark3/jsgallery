import Link from "next/link";

export default function HomePage() {
  const mockUrls = [
    "https://utfs.io/f/34bb373e-0366-4375-b00e-1ad102725cec-kkfr6e.jpg",
    "https://utfs.io/f/e90c760b-1734-42a1-9388-bc72aba78da5-97jl5t.jpg",
    "https://utfs.io/f/512069c3-cf8b-4ed1-920c-0e238783a2a2-36pxyp.jpg",
    "https://utfs.io/f/caa72949-0b2e-4a63-a503-8dd2ef7830ed-bce3y2.jpg",
  ];

  const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url,
  }));
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map(
          (image) => (
            <div key={image.id} className="w-48 ">
              <img src={image.url} />
            </div>
          ),
        )}
      </div>
    </main>
  );
}
