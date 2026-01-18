export default function TrustLogos() {
  const logos = [
    { name: "Porsche", text: "PORSCHE" },
    { name: "Nissan", text: "NISSAN" },
    { name: "Allied", text: "ALLIED" },
    { name: "North American", text: "northAmerican" },
    { name: "VW", text: "VW" },
    { name: "Chrysler", text: "CHRYSLER" },
    { name: "Mayflower", text: "Mayflower" },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
          Trusted by the world&apos;s best
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="text-gray-400 font-semibold text-lg md:text-xl hover:text-gray-600 transition-colors"
            >
              {logo.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
