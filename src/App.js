import './App.css';

const english_txt = 'English texts for beginners to practice reading and comprehension online and for free. Practicing your comprehension of written English will both improve your vocabulary and understanding of grammar and word order. The texts below are designed to help you develop while giving you an instant evaluation of your progress.'

function App() {
  return (
    <main>
      <section translate="no">
        <h2>Tag com <code>translate="no"</code></h2>
        {english_txt}
      </section>
      <section>
        <h2>Tag sem <code>translate="no"</code></h2>
        {english_txt}
      </section>
    </main>
  );
}

export default App;
