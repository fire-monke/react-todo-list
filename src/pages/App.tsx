function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Bienvenue dans mon application React Todo List 📝
      </h1>
      <a
        href="/todo"
        className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
      >
        ✍️ Voir la Todo List
      </a>
    </div>
  );
}

export default App;
