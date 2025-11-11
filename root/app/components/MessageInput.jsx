export default function MessageInput({ input, setInput, handleSubmit }) {
  return (
    <div className="mt-auto mb-6 px-4">
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-3 bg-white/30 backdrop-blur-md rounded-xl shadow-md p-3"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Apa yang terlintas di pikiranmu?"
          className="flex-1 px-4 py-2 text-sm text-black bg-transparent outline-none placeholder:text-gray-600"
        />
        <button
          type="submit"
          className="p-2 hover:bg-cyan-300 rounded-md transition-transform hover:scale-110"
        >
          <img src="/arrow.png" alt="Kirim" className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}