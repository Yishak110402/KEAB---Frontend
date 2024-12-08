export default function Value({coreValue}) {
  return (
    <div className="value">
      <h3>{coreValue.title}</h3>
      <p>{coreValue.description}</p>
    </div>
  );
}
