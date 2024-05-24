const InputCode = () => {
    return (
      <div className="bg-zinc-200 flex justify-center items-center p-4">
        <input
          type="text"
          placeholder="Enter PIN"
          className="p-2 border border-gray-300 rounded-md"
        />
        <button className="ml-2 p-2 bg-zinc-500 text-white rounded-md">Join Game</button>
      </div>
    );
  };
  
  export default InputCode;