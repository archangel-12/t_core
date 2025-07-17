import "./ChatBubble.css";

const ChatBubble = ({ messages = [] }) => {
  return (
    <div className="chatpage">
      <div className="wrapper">
        <div className="chat">
          {messages.map((msg, i) => (
            <div key={i} className={`message ${msg.role === 'user' ? 'user' : ''}`}>
              {msg.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;