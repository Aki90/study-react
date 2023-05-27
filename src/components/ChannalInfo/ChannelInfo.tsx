export default function ChannalInfo({
  id,
  name,
}: {
  id: string;
  name: string;
}) {
  return <div style={{ border: '1px solid red' }}>{name}</div>;
}
