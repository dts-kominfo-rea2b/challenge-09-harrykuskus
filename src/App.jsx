import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";
// Uncomment untuk memuat daftar kontak
import contacts from "./data/contacts.json";

const App = () => {
  return (
    // Masukkan Header dan Contact ke dalam div App
    <div className="App">
      <Header />
      {contacts.map((item, index) => (
        <Contact key={index} data={item} />
      ))}
    </div>
  );
};

export default App;
