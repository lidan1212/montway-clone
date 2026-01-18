const logos = [
  "HYPER",
  "TRIUMPH",
  "Corsidia",
  "GTRUST",
  "sebamed",
  "AXELMARK",
  "myQuest",
  "ARTDECO",
  "Claire Austin",
  "ALEX",
];

export default function MembershipBenefits() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
          Trusted by Top Companies
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((logo) => (
            <div
              key={logo}
              className="text-gray-400 font-semibold text-lg md:text-xl hover:text-gray-600 transition-colors"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
