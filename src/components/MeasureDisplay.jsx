export default function MeasureDisplay(measure) {
  return (
    <li>
      <div>
        Measure:{measure.type} {measure.sample}
      </div>
    </li>
  );
}
