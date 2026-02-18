import frame1 from "./frame-1.png";

export const AqiPage = () => {
  const aqiData = {
    status: "EXCELLENT",
    statusColor: "#44a531",
    liveLabel: "LIVE AQI",
  };

  return (
    <main className="flex h-[1080px] items-center justify-center gap-[405px] px-[81px] py-[90px] relative w-full min-w-[1920px]">
      <section
        className="relative w-[855px] h-[149px]"
        aria-labelledby="aqi-status"
      >
        <h1
          id="aqi-status"
          className="absolute top-[calc(50.00%_-_8px)] left-[calc(50.00%_-_428px)] [font-family:'Inter-Medium',Helvetica] font-normal text-transparent text-[52px] tracking-[2.08px] leading-[83.2px] whitespace-nowrap"
        >
          <span className="font-medium text-[#646464] tracking-[1.08px]">
            Indoor air quality is{" "}
          </span>

          <span
            className="[font-family:'Inter-Bold',Helvetica] font-bold text-[#44a531] tracking-[1.08px]"
            style={{ color: aqiData.statusColor }}
          >
            {aqiData.status}
          </span>
        </h1>

        <div
          className="absolute top-0 left-[calc(50.00%_-_428px)] [font-family:'Inter-Medium',Helvetica] font-medium text-[#646464] text-2xl tracking-[2.88px] leading-6 whitespace-nowrap"
          role="status"
          aria-live="polite"
        >
          {aqiData.liveLabel}
        </div>
      </section>

      <figure className="relative w-[440px]">
        <img
          className="w-full"
          alt="Air quality index visualization showing current indoor air quality metrics"
          src={frame1}
        />
      </figure>
    </main>
  );
};
