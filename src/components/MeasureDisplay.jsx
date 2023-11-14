export default function MeasureDisplay(measure) {
  return (
    <div className="px-5">
      Measure:{measure.type} {measure.sample}
    </div>
  );
}
