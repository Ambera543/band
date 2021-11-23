function ActionMsg({ msg, showMsg }) {
  return (
    <div
      className="action-msg"
      style={{
        height: showMsg ? "60px" : "0",

        top: showMsg ? window.scrollY : -2,
      }}
    >
      <span className="text-success">{msg}</span>
    </div>
  );
}

export default ActionMsg;
