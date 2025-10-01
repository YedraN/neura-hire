<script>
  import { usuario, token } from '$lib/stores.js';
  import { onMount } from 'svelte';
  let user = null;

  onMount(() => {
    const stored = localStorage.getItem('usuario');
    if (stored) {
      user = JSON.parse(stored);
    }
  });

  function logout() {
    usuario.set(null);
    token.set(null);
    localStorage.removeItem('usuario');
    localStorage.removeItem('token');
    window.location.href = '/auth/login';
  }
</script>

<div class="perfil-bg">
  <div class="perfil-container">
    <h2>Mi Perfil</h2>
    {#if user}
      <div class="perfil-datos">
        <p><strong>Nombre:</strong> {user.nombre || user.email}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Tipo de usuario:</strong> {user.tipo || 'N/A'}</p>
      </div>
    {:else}
      <p>No hay datos de usuario. Inicia sesión.</p>
    {/if}
    <button class="btn-logout" on:click={logout}>Cerrar sesión</button>
  </div>
</div>

<style>
.perfil-bg {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(120deg, #667eea 0%, #fbbf24 100%);
}
.perfil-container {
  background: #fff;
  padding: 2.5rem 2rem;
  border-radius: 18px;
  box-shadow: 0 8px 40px 0 rgba(102,126,234,0.13), 0 1.5px 8px 0 rgba(251,191,36,0.08);
  min-width: 320px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
}
.perfil-datos p {
  margin: 0.5rem 0;
  font-size: 1.1rem;
}
.btn-logout {
  margin-top: 1.5rem;
  padding: 0.7rem 1.5rem;
  background: #fbbf24;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-logout:hover {
  background: #667eea;
}
</style>
