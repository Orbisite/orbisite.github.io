function App() {
  return (
    <main style={styles.main}>
      <img src="/logo_full_no_background.png" alt="Orbisite" style={styles.logo} />
      <p style={styles.slogan}>
        Des sites qui gravitent autour de votre projet.
      </p>
      <img src="/work_in_progress.png" alt="Site en construction" style={styles.image} />
      <p style={styles.text}>En cours de construction. Revenez bientôt.</p>
    </main>
  )
}

const styles = {
  main: {
    textAlign: 'center',
    padding: '2rem',
  },
  logo: {
    maxWidth: '100%',
    width: 280,
  },
  image: {
    maxWidth: '100%',
    width: 280,
    marginBottom: '1.5rem',
  },
  slogan: {
    color: '#aaa',
    fontSize: '1.125rem',
    marginBottom: '3.5rem',
  },
  text: {
    fontSize: '1rem',
    marginBottom: '1.5rem',
  },
}

export default App
