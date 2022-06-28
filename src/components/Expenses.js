export default function Expenses(props) {
  let size = props.amount <= 100 ? props.amount * 1.8 : 100 * 1.8;

  const styles = {
    backgroundColor: props.color ? props.color : "",
    height: `${size}px`,
    marginTop: `-${size}px`
  };
  const styler = {
    marginTop: `${size}px`
  };
  return (
    <div>
      <div className="days">
        <div id="bar" style={styles} className="bar">
          <h3 style={styler} className="day">
            {props.days}
          </h3>
          <div className="hide">${props.amount}</div>
        </div>
      </div>
      <hr />
    </div>
  );
}
