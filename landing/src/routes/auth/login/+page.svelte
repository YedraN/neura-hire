<script>
  let email = '';
  let password = '';
  let role = 'empresa';
  let error = '';

  import { goto } from '$app/navigation';
  import { usuario, token } from '$lib/stores.js';

  async function handleLogin() {
    if (!email || !password) {
      error = 'Por favor, completa todos los campos.';
      return;
    }
    error = '';
    try {
      const res = await fetch('http://127.0.0.1:8000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      if (!res.ok) {
        const data = await res.json();
        error = data.detail || 'Error de autenticación';
        return;
      }
      const data = await res.json();
      token.set(data.access_token);
      localStorage.setItem('token', data.access_token);

      // Obtener datos del usuario
      const userRes = await fetch('http://127.0.0.1:8000/auth/me', {
        headers: { 'Authorization': `Bearer ${data.access_token}` }
      });
      if (userRes.ok) {
        const userData = await userRes.json();
        usuario.set(userData);
        localStorage.setItem('usuario', JSON.stringify(userData));
      }
      goto('/');
    } catch (e) {
      error = 'Error de conexión con el servidor';
    }
  }
</script>

<div class="login-bg">
  <div class="auth-container animated-fadein">
    <h2>Iniciar sesión</h2>
    <form class="auth-form" on:submit|preventDefault={handleLogin}>
      <div class="auth-form-left">
        <label>Email</label>
        <div class="input-group">
          <span class="input-icon">📧</span>
          <input type="email" bind:value={email} required placeholder="Tu email" />
        </div>
        <label>Contraseña</label>
        <div class="input-group">
          <span class="input-icon">🔒</span>
          <input type="password" bind:value={password} required placeholder="Tu contraseña" />
        </div>
      </div>
      <div class="auth-form-right">
        <label>Tipo de usuario</label>
        <div class="input-group">
          <span class="input-icon">👤</span>
          <select bind:value={role}>
            <option value="empresa">Empresa</option>
            <option value="candidato">Candidato</option>
          </select>
        </div>
        {#if error}
          <p class="auth-error">{error}</p>
        {/if}
        <button type="submit" class="btn-gradient">Entrar</button>
      </div>
    </form>
    <p class="auth-link">¿No tienes cuenta? <a href="/auth/register">Regístrate</a></p>
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
  max-width: 700px;
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
  margin-top: 1.2rem;
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
@media (max-width: 900px) {
  .auth-container {
    max-width: 98vw;
  }
  .auth-form {
    max-width: 98vw;
  }
}
.auth-form {
  max-width: 650px;
  margin: 0 auto;
  display: flex;
  flex-wrap: nowrap;
  gap: 3rem;
  justify-content: space-between;
  align-items: flex-end;
}
.auth-form-left {
  flex: 2 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  border-right: 2px solid #e5e7eb;
  padding-right: 2rem;
}
.auth-form-right {
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-left: 2rem;
  align-items: flex-end;
}
.auth-form-right button {
  align-self: flex-end;
  min-width: 140px;
}
@media (max-width: 1000px) {
  .auth-form {
    gap: 1.2rem;
  }
  .auth-form-left {
    padding-right: 1rem;
  }
  .auth-form-right {
    margin-left: 1rem;
  }
}
@media (max-width: 800px) {
  .auth-form {
    flex-direction: column;
    gap: 0.5rem;
    align-items: stretch;
  }
  .auth-form-left {
    border-right: none;
    padding-right: 0;
  }
  .auth-form-right {
    margin-left: 0;
    align-items: stretch;
  }
  .auth-form-right button {
    align-self: stretch;
  }
}
</style> 