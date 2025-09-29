<script>
  let name = '';
  let email = '';
  let password = '';
  let confirm = '';
  let role = 'empresa';
  let error = '';

  function handleRegister() {
    if (!name || !email || !password || !confirm) {
      error = 'Por favor, completa todos los campos.';
      return;
    }
    if (password !== confirm) {
      error = 'Las contraseñas no coinciden.';
      return;
    }
    error = '';
    alert(`Registro como ${role}: ${name} (${email})`);
  }
</script>

<div class="login-bg">
  <div class="auth-container animated-fadein">
    <h2>Registro</h2>
    <form class="auth-form" on:submit|preventDefault={handleRegister}>
      <label>Nombre</label>
      <div class="input-group">
        <span class="input-icon">🧑‍💼</span>
        <input type="text" bind:value={name} required placeholder="Tu nombre" />
      </div>
      <label>Email</label>
      <div class="input-group">
        <span class="input-icon">📧</span>
        <input type="email" bind:value={email} required placeholder="Tu email" />
      </div>
      <label>Contraseña</label>
      <div class="input-group">
        <span class="input-icon">🔒</span>
        <input type="password" bind:value={password} required placeholder="Contraseña" />
      </div>
      <label>Confirmar contraseña</label>
      <div class="input-group">
        <span class="input-icon">🔒</span>
        <input type="password" bind:value={confirm} required placeholder="Repite la contraseña" />
      </div>
      <label>Tipo de usuario</label>
      <div class="input-group">
        <span class="input-icon">👤</span>
        <select bind:value={role}>
          <option value="empresa">Empresa</option>
          <option value="candidato">Candidato</option>
        </select>
      </div>
      <button type="submit" class="btn-gradient">Registrarse</button>
      {#if error}
        <p class="auth-error">{error}</p>
      {/if}
    </form>
    <p class="auth-link">¿Ya tienes cuenta? <a href="/auth/login">Inicia sesión</a></p>
  </div>
</div>

<style>
.login-bg {
  min-height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0; left: 0;
  z-index: -1;
  background: linear-gradient(120deg, #667eea 0%, #fbbf24 100%);
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-bg::before {
  content: '';
  position: absolute;
  top: -120px; left: -120px;
  width: 400px; height: 400px;
  background: radial-gradient(circle, #fbbf24 0%, #667eea 80%);
  opacity: 0.18;
  border-radius: 50%;
  z-index: 0;
}
.login-bg::after {
  content: '';
  position: absolute;
  bottom: -100px; right: -100px;
  width: 300px; height: 300px;
  background: radial-gradient(circle, #667eea 0%, #fbbf24 80%);
  opacity: 0.13;
  border-radius: 50%;
  z-index: 0;
}
.auth-container {
  max-width: 820px;
  min-width: 0;
  margin: 2.5rem 0;
  background: rgba(255,255,255,0.85);
  border-radius: 22px;
  box-shadow: 0 8px 40px 0 rgba(102,126,234,0.13), 0 1.5px 8px 0 rgba(251,191,36,0.08);
  padding: 2.8rem 2.2rem 2.2rem 2.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  backdrop-filter: blur(8px);
  border: 1.5px solid #e0e7ef;
  position: relative;
  z-index: 2;
  animation: fadein 1s cubic-bezier(.39,.575,.56,1.000);
}
.animated-fadein {
  animation: fadein 1s cubic-bezier(.39,.575,.56,1.000);
}
@keyframes fadein {
  from { opacity: 0; transform: translateY(40px) scale(0.98); }
  to { opacity: 1; transform: none; }
}
.auth-container h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 2.1rem;
  font-weight: 800;
  color: #1f2937;
  letter-spacing: 0.5px;
}
.auth-container label {
  font-weight: 600;
  margin-top: 0.5rem;
  color: #4b5563;
  margin-bottom: 0.2rem;
}
.input-group {
  display: flex;
  align-items: center;
  background: #f3f4f6;
  border-radius: 10px;
  border: 1.5px solid #e5e7eb;
  margin-bottom: 0.7rem;
  transition: border 0.2s;
  padding: 0.1rem 0.7rem;
}
.input-group:focus-within {
  border: 1.5px solid #667eea;
  background: #fff;
}
.input-icon {
  font-size: 1.2rem;
  margin-right: 0.7rem;
  color: #a5b4fc;
}
.auth-container input, .auth-container select {
  width: 100%;
  padding: 0.7rem 0.5rem;
  border: none;
  background: transparent;
  outline: none;
  font-size: 1.08rem;
  color: #1f2937;
  font-family: inherit;
}
.auth-container select {
  cursor: pointer;
}
.btn-gradient {
  width: 100%;
  background: linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%);
  color: #1f2937;
  border: none;
  border-radius: 10px;
  padding: 0.95rem;
  font-weight: 800;
  font-size: 1.1rem;
  margin-top: 0.7rem;
  cursor: pointer;
  box-shadow: 0 2px 12px rgba(251,191,36,0.10);
  position: relative;
  overflow: hidden;
  transition: background 0.3s, color 0.2s, box-shadow 0.2s;
}
.btn-gradient::before {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 100%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent);
  transition: left 0.6s;
}
.btn-gradient:hover::before {
  left: 100%;
}
.btn-gradient:hover {
  background: linear-gradient(90deg, #f59e0b 0%, #fbbf24 100%);
  color: #1f2937;
  box-shadow: 0 4px 24px rgba(251,191,36,0.18);
}
.auth-error {
  color: #dc2626;
  font-size: 0.98rem;
  margin-bottom: 0.5rem;
  text-align: center;
  font-weight: 600;
}
.auth-link {
  text-align: center;
  margin-top: 1.2rem;
  color: #4b5563;
}
.auth-link a {
  color: #667eea;
  text-decoration: underline;
  font-weight: 600;
  transition: color 0.2s;
}
.auth-link a:hover {
  color: #fbbf24;
}
.auth-form {
  max-width: 760px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.1rem 2.2rem;
  align-items: end;
}
.auth-form-left, .auth-form-right {
  display: contents;
}
.auth-form label {
  margin-bottom: 0.2rem;
  font-size: 1rem;
}
.input-group {
  margin-bottom: 0.2rem;
  padding: 0.05rem 0.5rem;
}
.btn-gradient {
  margin-top: 0.2rem;
  min-width: 140px;
}
.auth-form .btn-gradient {
  grid-column: 2;
  justify-self: end;
}
.auth-error {
  grid-column: 1 / span 2;
}
@media (max-width: 900px) {
  .auth-form {
    grid-template-columns: 1fr;
    gap: 0.7rem;
  }
  .auth-form .btn-gradient {
    grid-column: 1;
    justify-self: stretch;
  }
  .auth-error {
    grid-column: 1;
  }
}
</style> 