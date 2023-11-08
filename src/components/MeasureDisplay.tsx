import { Measure } from "@prisma/client";

export default function MeasureDisplay({ measure }: { measure: Measure }) {
  return (
    <li>
      <div>
        Measure:{measure.type} {measure.sample}
      </div>
    </li>
  );
} // <li key={user.id}>{user.name}</li>
