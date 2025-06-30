<script>
  // Simulación de datos
  let empresa = {
    nombre: 'Tech Solutions',
    ofertas: 4,
    candidatos: 27,
    entrevistas: 2
  };
  let proximasEntrevistas = [
    { nombre: 'Ana López', puesto: 'Frontend', hora: '10:00', fecha: 'Hoy' },
    { nombre: 'Carlos Ruiz', puesto: 'Backend', hora: '12:30', fecha: 'Hoy' }
  ];
</script>

<div class="dashboard-bg">
  <div class="dashboard-header open">
    <h2>¡Bienvenido, <span class="highlight">{empresa.nombre}</span>!</h2>
    <p class="dashboard-sub">Gestiona tu proceso de selección de forma inteligente y eficiente.</p>
  </div>
  <div class="dashboard-stats open">
    <div class="stat-card">
      <div class="stat-icon stat-ofertas">📄</div>
      <div>
        <div class="stat-number">{empresa.ofertas}</div>
        <div class="stat-label">Ofertas activas</div>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon stat-candidatos">👥</div>
      <div>
        <div class="stat-number">{empresa.candidatos}</div>
        <div class="stat-label">Candidatos</div>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon stat-entrevistas">🎤</div>
      <div>
        <div class="stat-number">{empresa.entrevistas}</div>
        <div class="stat-label">Entrevistas hoy</div>
      </div>
    </div>
  </div>
  <div class="dashboard-actions open">
    <a class="action-card" href="/empresa/ofertas">
      <div class="action-icon">➕</div>
      <div>
        <div class="action-title">Nueva oferta</div>
        <div class="action-desc">Publica una vacante</div>
      </div>
    </a>
    <a class="action-card" href="/empresa/candidatos">
      <div class="action-icon">🔎</div>
      <div>
        <div class="action-title">Buscar candidatos</div>
        <div class="action-desc">Explora y filtra perfiles</div>
      </div>
    </a>
    <a class="action-card" href="/empresa/entrevista">
      <div class="action-icon">🎥</div>
      <div>
        <div class="action-title">Entrevistas en tiempo real</div>
        <div class="action-desc">Accede a la sala</div>
      </div>
    </a>
  </div>
  <div class="dashboard-next open">
    <h3>Próximas entrevistas</h3>
    {#if proximasEntrevistas.length === 0}
      <p class="empty">No hay entrevistas programadas para hoy.</p>
    {:else}
      <ul class="next-list">
        {#each proximasEntrevistas as ent}
          <li>
            <span class="next-nombre">{ent.nombre}</span>
            <span class="next-puesto">({ent.puesto})</span>
            <span class="next-hora">{ent.fecha}, {ent.hora}h</span>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</div>

<style>
.dashboard-bg {
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(120deg, #667eea 0%, #fbbf24 100%);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  padding: 2.5rem 0 2rem 0;
  gap: 2.2rem;
}
.dashboard-header.open {
  max-width: 1200px;
  margin: 0 auto 0.5rem auto;
  background: none;
  box-shadow: none;
  border: none;
  padding: 0 2rem;
}
.dashboard-header h2 {
  font-size: 2.2rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 0.2rem;
  text-shadow: 0 2px 12px rgba(102,126,234,0.18);
}
.dashboard-header .highlight {
  color: #667eea;
  background: #fbbf24;
  border-radius: 8px;
  padding: 0.1em 0.5em;
}
.dashboard-sub {
  color: #f3f4f6;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  text-shadow: 0 1px 8px rgba(102,126,234,0.10);
}
.dashboard-stats.open {
  max-width: 1200px;
  margin: 0 auto;
  background: none;
  box-shadow: none;
  border: none;
  padding: 0 2rem;
}
.dashboard-actions.open {
  max-width: 1200px;
  margin: 0 auto;
  background: none;
  box-shadow: none;
  border: none;
  padding: 0 2rem;
}
.dashboard-next.open {
  max-width: 1200px;
  margin: 0 auto;
  background: none;
  box-shadow: none;
  border: none;
  padding: 0 2rem;
}
.dashboard-main {
  max-width: 900px;
  width: 100%;
  background: rgba(255,255,255,0.90);
  border-radius: 28px;
  box-shadow: 0 8px 40px 0 rgba(102,126,234,0.13), 0 1.5px 8px 0 rgba(251,191,36,0.08);
  padding: 2.5rem 2.5rem 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  backdrop-filter: blur(8px);
  border: 1.5px solid #e0e7ef;
  animation: fadein 1s cubic-bezier(.39,.575,.56,1.000);
}
.animated-fadein {
  animation: fadein 1s cubic-bezier(.39,.575,.56,1.000);
}
@keyframes fadein {
  from { opacity: 0; transform: translateY(40px) scale(0.98); }
  to { opacity: 1; transform: none; }
}
.dashboard-stats {
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}
.stat-card {
  background: #f3f4f6;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(102,126,234,0.07);
  padding: 1.2rem 2rem;
  display: flex;
  align-items: center;
  gap: 1.1rem;
  min-width: 170px;
  flex: 1 1 0;
  transition: box-shadow 0.2s, transform 0.2s;
  border: 1.5px solid #e5e7eb;
}
.stat-card:hover {
  box-shadow: 0 6px 24px rgba(102,126,234,0.13);
  transform: translateY(-3px) scale(1.03);
}
.stat-icon {
  font-size: 2.2rem;
  background: linear-gradient(135deg, #667eea 0%, #fbbf24 100%);
  color: #fff;
  border-radius: 12px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(102,126,234,0.10);
}
.stat-ofertas { background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%); color: #fff; }
.stat-candidatos { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #fff; }
.stat-entrevistas { background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); color: #fff; }
.stat-number {
  font-size: 2rem;
  font-weight: 800;
  color: #1f2937;
}
.stat-label {
  color: #6b7280;
  font-size: 1.05rem;
}
.dashboard-actions {
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}
.action-card {
  background: #fff7ed;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(251,191,36,0.07);
  padding: 1.3rem 2rem;
  display: flex;
  align-items: center;
  gap: 1.1rem;
  min-width: 180px;
  flex: 1 1 0;
  border: 1.5px solid #fbbf24;
  text-decoration: none;
  color: #1f2937;
  font-weight: 600;
  transition: box-shadow 0.2s, transform 0.2s, border 0.2s;
  position: relative;
  overflow: hidden;
}
.action-card:hover {
  box-shadow: 0 6px 24px rgba(251,191,36,0.13);
  border: 1.5px solid #667eea;
  transform: translateY(-3px) scale(1.03);
}
.action-icon {
  font-size: 2rem;
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  color: #fff;
  border-radius: 10px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(251,191,36,0.10);
}
.action-title {
  font-size: 1.15rem;
  font-weight: 700;
}
.action-desc {
  color: #6b7280;
  font-size: 0.98rem;
  font-weight: 500;
}
.dashboard-next {
  background: #f3f4f6;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(102,126,234,0.07);
  padding: 1.2rem 2rem;
  border: 1.5px solid #e5e7eb;
  margin-top: 0.5rem;
}
.dashboard-next h3 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
  color: #1f2937;
}
.next-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}
.next-list li {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-size: 1.08rem;
  background: #fff;
  border-radius: 8px;
  padding: 0.6rem 1.2rem;
  box-shadow: 0 1px 4px rgba(102,126,234,0.04);
}
.next-nombre {
  font-weight: 700;
  color: #667eea;
}
.next-puesto {
  color: #4b5563;
  font-size: 0.98rem;
}
.next-hora {
  margin-left: auto;
  color: #f59e0b;
  font-weight: 600;
  font-size: 0.98rem;
}
.empty {
  color: #6b7280;
  font-size: 1.05rem;
  text-align: center;
  margin: 1.2rem 0 0.5rem 0;
}
@media (max-width: 1100px) {
  .dashboard-main {
    max-width: 99vw;
    padding: 1.2rem 0.5rem;
  }
}
@media (max-width: 900px) {
  .dashboard-stats, .dashboard-actions {
    flex-direction: column;
    gap: 1.2rem;
  }
}
@media (max-width: 600px) {
  .dashboard-main {
    padding: 0.5rem 0.2rem;
  }
  .dashboard-stats, .dashboard-actions {
    gap: 0.7rem;
  }
  .dashboard-next {
    padding: 0.7rem 0.5rem;
  }
}
</style> 