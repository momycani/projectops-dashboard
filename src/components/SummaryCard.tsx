interface SummaryCardProps {
  title: string;
  value: string | number;
}

export default function SummaryCard({ title, value }: SummaryCardProps) {
  return (
    <div className="card summary-card">
      <p>{title}</p>
      <h2>{value}</h2>
    </div>
  );
}