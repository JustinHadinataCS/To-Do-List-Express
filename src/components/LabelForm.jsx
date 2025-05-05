function LabelForm({ value, onState, type, children, placeholder }) {
  return (
    <div>
      <Label htmlFor={type}>{children}</Label>
      <Input
        id={type}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onState(e.target.value)}
        required
      />
    </div>
  );
}

export default LabelForm;
