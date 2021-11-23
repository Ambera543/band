function ActionMsg({ msg, showMsg }) {
  return (
    <div
      className="msg"
      style={{
        height: showMsg ? "60px" : "0",

        top: showMsg ? window.scrollY : -2,
      }}
    >
      <span>{msg}</span>
    </div>
  );
}

export default ActionMsg;

// className="text-success"
