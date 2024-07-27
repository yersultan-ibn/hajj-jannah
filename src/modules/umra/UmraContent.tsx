const root = {
  background: "url('./bg-1.webp')",
  height: '100vh',
  width: "100%",
  overflow: "scroll"
}

const stepStyle = {
  display: "inline-block",
  border: "1px solid red",
  width: 200,
  padding: 15,
  margin: 50,
  background: "red",
  color: "white",
  fontSize: 20
}

const stepWrapperStyle = {
}

const steps = new Array(19).fill(0).map((_, i) => ({order: i+1}))

export const UmraContent = () => {
  console.log(steps)
  return <div style={root}>
    <div style={stepWrapperStyle}>
    {steps.map(s => {
      return <div style={stepStyle}>
        {s.order}
      </div>
    })}
    </div>
  </div>;
};
