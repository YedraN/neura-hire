<script>
	import { feather } from "feather-icons";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import { onMount, afterUpdate } from "svelte";
    
    gsap.registerPlugin(ScrollTrigger);
    
    let heroSection, featuresSection, testimonialsSection, ctaSection;
    
    onMount(() => {
        // Animación del hero
        const heroTl = gsap.timeline();
        
        heroTl.from(".hero-title", {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })
        .from(".hero-subtitle", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.5")
        .from(".hero-cta", {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "back.out(1.7)"
        }, "-=0.3")
        .from(".hero-image", {
            x: 100,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        }, "-=0.8");
        
        // Animación de las características
        gsap.from(".feature-card", {
            scrollTrigger: {
                trigger: ".features-section",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            },
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out"
        });
        
        // Animación de testimonios
        gsap.from(".testimonial-card", {
            scrollTrigger: {
                trigger: ".testimonials-section",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            },
            scale: 0.8,
            opacity: 0,
            duration: 0.8,
            stagger: 0.3,
            ease: "back.out(1.7)"
        });
        
        // Animación del CTA
        gsap.from(".cta-content", {
            scrollTrigger: {
                trigger: ".cta-section",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
        
        // Animación del navbar
        gsap.from(".navbar", {
            y: -100,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        });

        // Animación de la nueva sección timeline
        gsap.from('.timeline-step', {
            scrollTrigger: {
                trigger: '.howitworks-section',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            y: 80,
            opacity: 0,
            duration: 1,
            stagger: 0.3,
            ease: 'power3.out'
        });

        // GSAP hover para cubrir la tarjeta de amarillo
        const steps = document.querySelectorAll('.timeline-step');
        steps.forEach(step => {
            const overlay = step.querySelector('.timeline-overlay');
            step.addEventListener('mouseenter', () => {
                gsap.to(overlay, { width: '100%', duration: 0.8, ease: 'power2.out' });
            });
            step.addEventListener('mouseleave', () => {
                gsap.to(overlay, { width: '6px', duration: 0.8, ease: 'power2.in' });
            });
        });
    });

    let email = "";
    let submitted = false;
    function handleSubmit() {
        submitted = true;
        // Aquí podrías agregar lógica para enviar el email a tu backend o servicio de newsletter
        email = "";
    }
</script>

<svelte:head>
    <title>NeuraHire - Revoluciona tu proceso de contratación</title>
    <meta name="description" content="Plataforma inteligente de contratación que conecta talento excepcional con empresas innovadoras usando IA avanzada">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <script src="https://kit.fontawesome.com/d70015ddda.js" crossorigin="anonymous"></script>
</svelte:head>

<!-- Navbar -->
<nav class="navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <span class="logo-text">NeuraHire</span>
        </div>
        <div class="nav-links">
            <a href="/auth/login" class="nav-link">Iniciar sesión</a>
            <a href="/auth/register" class="nav-link">Registrarse</a>
            <a href="/empresa/dashboard" class="nav-link">Panel Empresa</a>
            <a href="/candidato/dashboard" class="nav-link">Panel Candidato</a>
        </div>
        <div class="nav-cta">
            <button class="btn-secondary" id="btn-login">Iniciar Sesión</button>
            <button class="btn-primary">Registrarse</button>
        </div>
    </div>
</nav>

<!-- Hero Section -->
<section class="hero-section" bind:this={heroSection}>
    <div class="hero-container">
        <div class="hero-content">
            <h1 class="hero-title">
                Revoluciona tu proceso de 
                <span class="gradient-text">contratación</span>
            </h1>
            <p class="hero-subtitle">
                Conecta con el mejor talento usando IA avanzada. NeuraHire transforma la forma en que las empresas encuentran y contratan profesionales excepcionales.
            </p>
            <div class="hero-cta">
                <button class="btn-primary btn-large">Comenzar Ahora</button>
                <button class="btn-outline btn-large">Ver Demo</button>
            </div>
            <div class="hero-stats">
                <div class="stat">
                    <span class="stat-number">10K+</span>
                    <span class="stat-label"><strong>Empresas</strong></span>
                </div>
                <div class="stat">
                    <span class="stat-number">50K+</span>
                    <span class="stat-label"><strong>Candidatos</strong></span>
                </div>
                <div class="stat">
                    <span class="stat-number">95%</span>
                    <span class="stat-label"><strong>Satisfacción</strong></span>
                </div>
            </div>
        </div>
        <div class="hero-image">
            <div class="floating-card card-1" id="card1">
                <div class="card-icon">👨‍💼</div>
                <div class="card-content">
                    <h4>Perfil Completo</h4>
                    <p>Análisis detallado de habilidades</p>
                </div>
            </div>
            <div class="floating-card card-2" id="card2">
                <div class="card-icon">🎯</div>
                <div class="card-content">
                    <h4>Match Perfecto</h4>
                    <p>IA que encuentra el candidato ideal</p>
                </div>
            </div>
            <div class="floating-card card-3" id="card3">
                <div class="card-icon">⚡</div>
                <div class="card-content">
                    <h4>Proceso Rápido</h4>
                    <p>Contratación en tiempo récord</p>
                </div>
            </div>
        </div>
    </div>
    <div class="hero-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#f8fafc" fill-opacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
    </div>
</section>

<!-- Features Section -->
<!-- Se elimina la sección de características -->

<!-- Sección original y animada: Cómo funciona NeuraHire -->
<section class="howitworks-section" id="como-funciona">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">¿Cómo funciona NeuraHire?</h2>
            <p class="section-subtitle">Descubre el proceso inteligente y ágil para conectar talento y empresas</p>
        </div>
        <div class="timeline">
            <div class="timeline-step" id="step1">
                <div class="timeline-overlay"></div>
                <div class="timeline-icon">📝</div>
                <div class="timeline-content">
                    <h3>1. Regístrate</h3>
                    <p>Crea tu cuenta y dinos qué buscas: talento o nuevas oportunidades.</p>
                </div>
            </div>
            <div class="timeline-step" id="step2">
                <div class="timeline-overlay"></div>
                <div class="timeline-icon">🤖</div>
                <div class="timeline-content">
                    <h3>2. IA en acción</h3>
                    <p>Nuestro motor inteligente analiza perfiles y necesidades en segundos.</p>
                </div>
            </div>
            <div class="timeline-step" id="step3">
                <div class="timeline-overlay"></div>
                <div class="timeline-icon">💡</div>
                <div class="timeline-content">
                    <h3>3. Recomendaciones</h3>
                    <p>Recibe matches personalizados y sugerencias para mejorar tu perfil o búsqueda.</p>
                </div>
            </div>
            <div class="timeline-step" id="step4">
                <div class="timeline-overlay"></div>
                <div class="timeline-icon">🚀</div>
                <div class="timeline-content">
                    <h3>4. ¡Conecta y crece!</h3>
                    <p>Contacta, agenda entrevistas y da el siguiente paso en tu carrera o empresa.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Formulario de Inscripción para Noticias -->
<section class="newsletter-section" id="noticias">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">¡Entérate antes que nadie!</h2>
            <p class="section-subtitle">Inscríbete para recibir notificaciones y noticias sobre el lanzamiento de NeuraHire.</p>
        </div>
        <form class="newsletter-form" on:submit|preventDefault={handleSubmit}>
            <input type="email" placeholder="Tu correo electrónico" bind:value={email} required class="newsletter-input" />
            <button type="submit" class="btn-primary">Notificarme</button>
        </form>
        {#if submitted}
            <p class="newsletter-success">¡Gracias por inscribirte! Te mantendremos informado.</p>
        {/if}
    </div>
</section>

<!-- CTA Section -->
<section class="cta-section" bind:this={ctaSection} id="contacto">
    <div class="container">
        <div class="cta-content">
            <h2>¿Listo para transformar tu contratación?</h2>
            <p>Únete a miles de empresas que ya confían en NeuraHire para encontrar el mejor talento</p>
            <div class="cta-buttons">
                <button class="btn-primary btn-large">Comenzar Gratis</button>
                <button class="btn-outline btn-large">Agendar Demo</button>
            </div>
        </div>
    </div>
</section>

<!-- Footer -->
<footer class="footer-modern">
    <div class="footer-container">
        <div class="footer-brand">
            <span class="footer-logo">🧠</span>
            <span class="footer-title">NeuraHire</span>
        </div>
        <div class="footer-links">
            <a href="#como-funciona">Cómo funciona</a>
            <a href="#noticias">Noticias</a>
            <a href="#contacto">Contacto</a>
        </div>
        <div class="footer-social">
            <a href="/" aria-label="Twitter" class="footer-social-icon"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="/" aria-label="LinkedIn" class="footer-social-icon"><i class="fa-brands fa-tiktok"></i></a>
            <a href="/" aria-label="Instagram" class="footer-social-icon"><i class="fa-brands fa-facebook"></i></a>
        </div>
    </div>
    <div class="footer-bottom-modern">
        <p>&copy; 2024 NeuraHire. Todos los derechos reservados.</p>
    </div>
</footer>

<style>
    /* Reset y base */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    }

    /* Navbar */
    .navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        border-bottom: 1px solid #e5e7eb;
        z-index: 1000;
        padding: 1rem 0;
    }

    .nav-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo-text {
        font-size: 1.5rem;
        font-weight: 700;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .nav-links {
        display: flex;
        gap: 2rem;
    }

    .nav-link {
        text-decoration: none;
        color: #667eea;
        font-weight: 600;
        font-size: 1.08rem;
        padding: 0.5rem 1.1rem;
        border-radius: 8px;
        transition: background 0.2s, color 0.2s;
    }
    .nav-link:hover {
        background: #fbbf24;
        color: #1f2937;
    }

    .nav-cta {
        display: flex;
        gap: 1rem;
    }

    /* Botones */
    .btn-primary {
        background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
        color: #1f2937;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 12px;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(251, 191, 36, 0.3);
        position: relative;
        overflow: hidden;
    }

    .btn-primary::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.5s;
    }

    .btn-primary:hover::before {
        left: 100%;
    }

    .btn-primary:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(251, 191, 36, 0.4);
    }

    .btn-secondary {
        background: rgba(255, 255, 255, 0.1);
        color: white;
        border: 2px solid rgba(255, 255, 255, 0.3);
        padding: 0.75rem 1.5rem;
        border-radius: 12px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
    }

    .btn-secondary:hover {
        background: rgba(255, 255, 255, 0.2);
        border-color: rgba(255, 255, 255, 0.5);
        transform: translateY(-2px);
    }

    .btn-outline {
        background: transparent;
        color: white;
        border: 2px solid rgba(255, 255, 255, 0.5);
        padding: 0.75rem 1.5rem;
        border-radius: 12px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
    }

    .btn-outline:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: white;
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
    }

    .btn-large {
        padding: 1rem 2rem;
        font-size: 1.1rem;
        border-radius: 16px;
    }

    #btn-login {
        background-color: #764ba2;
        border: none;
    }

    /* Hero Section */
    .hero-section {
        min-height: 100vh;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        display: flex;
        align-items: center;
        position: relative;
        padding-top: 80px;
    }

    .hero-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: center;
        position: relative;
        z-index: 2;
    }

    .hero-title {
        font-size: 3.5rem;
        font-weight: 800;
        color: white;
        margin-bottom: 1.5rem;
        line-height: 1.2;
    }

    .gradient-text {
        background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .hero-subtitle {
        font-size: 1.25rem;
        color: rgba(255, 255, 255, 0.9);
        margin-bottom: 2rem;
        line-height: 1.6;
    }

    .hero-cta {
        display: flex;
        gap: 1rem;
        margin-bottom: 3rem;
        position: relative;
        z-index: 3;
    }

    .hero-stats {
        display: flex;
        gap: 2rem;
        position: relative;
        z-index: 3;
    }

    .stat {
        text-align: center;
    }

    .stat-number {
        display: block;
        font-size: 2rem;
        font-weight: 700;
        color: #fbbf24;
    }

    .stat-label {
        color: rgba(0, 0, 0, 0.8);
        font-size: 0.9rem;
    }

    .hero-image {
        position: relative;
        height: 500px;
        z-index: 2;
    }

    .floating-card {
        position: absolute;
        background: white;
        padding: 1.5rem;
        border-radius: 16px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        z-index: 3;
    }

    .card-1 {
        top: 0;
        left: 0;
        animation: float 6s ease-in-out infinite;
    }

    .card-2 {
        top: 150px;
        right: 0;
        animation: float 6s ease-in-out infinite 2s;
    }

    .card-3 {
        bottom: 0;
        left: 50px;
        animation: float 6s ease-in-out infinite 4s;
    }

    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
    }

    .card-icon {
        font-size: 2rem;
        margin-bottom: 0.5rem;
    }

    .card-content h4 {
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: #1f2937;
    }

    .card-content p {
        color: #6b7280;
        font-size: 0.9rem;
    }

    .hero-wave {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
    }

    /* Sections */
    .section-header {
        text-align: center;
        margin-bottom: 4rem;
    }

    .section-title {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: #1f2937;
    }

    .section-subtitle {
        font-size: 1.1rem;
        color: #6b7280;
        max-width: 600px;
        margin: 0 auto;
    }

    /* Features Section */
    .features-section {
        padding: 6rem 0;
        background: #f8fafc;
    }

    .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
        justify-items: center;
        align-items: stretch;
        justify-content: center;
    }

    .feature-card {
        width: 100%;
        max-width: 350px;
        height: 100%;
        background: white;
        padding: 2rem;
        border-radius: 16px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        border: 1px solid #e5e7eb;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }

    .feature-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }

    .feature-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    .feature-card h3 {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 1rem;
        color: #1f2937;
    }

    .feature-card p {
        color: #6b7280;
        line-height: 1.6;
    }

    /* Testimonials Section */
    .testimonials-section {
        padding: 6rem 0;
        background: white;
    }

    .testimonials-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2rem;
    }

    .testimonial-card {
        background: #f8fafc;
        padding: 2rem;
        border-radius: 16px;
        border: 1px solid #e5e7eb;
        transition: transform 0.3s ease;
    }

    .testimonial-card:hover {
        transform: translateY(-5px);
    }

    .testimonial-content p {
        font-style: italic;
        color: #4b5563;
        margin-bottom: 1.5rem;
        line-height: 1.6;
    }

    .testimonial-author {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .author-avatar {
        font-size: 2rem;
        width: 50px;
        height: 50px;
        background: #667eea;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
    }

    .author-info h4 {
        font-weight: 600;
        color: #1f2937;
        margin-bottom: 0.25rem;
    }

    .author-info span {
        color: #6b7280;
        font-size: 0.9rem;
    }

    /* CTA Section */
    .cta-section {
        padding: 6rem 0;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        text-align: center;
    }

    .cta-content h2 {
        font-size: 2.5rem;
        font-weight: 700;
        color: white;
        margin-bottom: 1rem;
    }

    .cta-content p {
        font-size: 1.1rem;
        color: rgba(255, 255, 255, 0.9);
        margin-bottom: 2rem;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
    }

    .cta-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
    }

    /* Footer */
    .footer-modern {
        background: #111827;
        color: white;
        padding: 3rem 0 1.5rem;
        margin-top: 0;
    }
    .footer-container {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
        padding: 0 20px;
    }
    .footer-brand {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
    .footer-logo {
        font-size: 2rem;
    }
    .footer-title {
        font-size: 1.3rem;
        font-weight: 700;
        letter-spacing: 1px;
    }
    .footer-links {
        display: flex;
        gap: 2rem;
    }
    .footer-links a {
        color: #fbbf24;
        text-decoration: none;
        font-weight: 500;
        transition: color 0.3s;
    }
    .footer-links a:hover {
        color: #fff;
    }
    .footer-social {
        display: flex;
        gap: 1.2rem;
    }
    .footer-social-icon {
        font-size: 1.5rem;
        color: #fbbf24;
        transition: color 0.3s;
        text-decoration: none;
    }
    .footer-social-icon:hover {
        color: #fff;
    }
    .footer-bottom-modern {
        text-align: center;
        color: #e0e7ef;
        font-size: 0.95rem;
        margin-top: 2rem;
    }
    @media (max-width: 768px) {
        .footer-container {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;
        }
        .footer-links {
            gap: 1.2rem;
        }
        .footer-brand {
            margin-bottom: 0.5rem;
        }
    }

    /* Responsive */
    @media (max-width: 1024px) {
        .hero-container {
            gap: 2rem;
        }

        .hero-title {
            font-size: 3rem;
        }

        .features-grid,
        .testimonials-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            justify-content: center;
        }
    }

    @media (max-width: 828px) {
        .navbar {
            display: flex;
            column-gap: 20px;
        }

        .hero-section {
            margin-top: 40px;
        }

        .nav-links {
            display: none;
        }

        .nav-cta {
            gap: 0.5rem;
        }

        .btn-secondary,
        .btn-primary {
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
            color: black;
        }

        .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
            padding: 0 15px;
        }

        .hero-title {
            font-size: 2.5rem;
            line-height: 1.1;
        }

        .hero-subtitle {
            font-size: 1.1rem;
        }

        .hero-cta {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
        }

        .hero-stats {
            justify-content: center;
            flex-wrap: wrap;
            gap: 1.5rem;
        }

        .hero-image {
            display: flex;
            flex-direction: column;
            gap: 300px;
        }

        .floating-card {
            padding: 1rem;
            font-size: 0.9rem;
        }

        .card-1 {
            top: 20px;
            left: 20px;
        }

        .card-2 {
            top: 120px;
            right: 20px;
        }

        .card-3 {
            bottom: 20px;
            left: 50px;
        }

        .section-title {
            font-size: 2rem;
        }

        .section-subtitle {
            font-size: 1rem;
        }

        .features-grid,
        .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }

        .feature-card,
        .testimonial-card {
            padding: 1.5rem;
        }

        .cta-buttons {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
        }

        .cta-content h2 {
            font-size: 2rem;
        }

        .footer-content {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
        }

        .features-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            justify-content: center;
        }
        .feature-card {
            max-width: 100%;
        }
    }

    @media (max-width: 480px) {
        .hero-title {
            font-size: 2rem;
        }

        .hero-subtitle {
            font-size: 1rem;
        }

        .hero-stats {
            flex-direction: column;
            gap: 1rem;
        }

        .stat-number {
            font-size: 1.5rem;
        }

        .hero-image {
            height: 300px;
        }

        .floating-card {
            padding: 0.75rem;
            font-size: 0.8rem;
        }

        .card-icon {
            font-size: 1.5rem;
        }

        .section-title {
            font-size: 1.75rem;
        }

        .feature-icon {
            font-size: 2.5rem;
        }

        .btn-large {
            padding: 0.875rem 1.5rem;
            font-size: 1rem;
        }

        .container {
            padding: 0 15px;
        }

        .features-section,
        .testimonials-section,
        .cta-section {
            padding: 4rem 0;
        }
    }

    @media (max-width: 360px) {
        .hero-title {
            font-size: 1.75rem;
        }

        .hero-cta {
            width: 100%;
        }

        .btn-large {
            width: 100%;
        }

        .floating-card {
            position: relative;
            margin-bottom: 1rem;
        }

        .card-1,
        .card-2,
        .card-3 {
            position: relative;
            top: auto;
            left: auto;
            right: auto;
            bottom: auto;
        }

        .hero-image {
            height: auto;
        }
    }

    .newsletter-section {
        padding: 6rem 0;
        background: #fff7ed;
        text-align: center;
    }
    .newsletter-form {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-top: 2rem;
        flex-wrap: wrap;
    }
    .newsletter-input {
        padding: 1rem;
        border-radius: 12px;
        border: 1px solid #fbbf24;
        font-size: 1.1rem;
        min-width: 250px;
        outline: none;
    }
    .newsletter-success {
        color: #22c55e;
        margin-top: 1.5rem;
        font-weight: 600;
    }

    .howitworks-section {
        padding: 6rem 0;
        background: #f8fafc;
    }
    .timeline {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        position: relative;
        max-width: 700px;
        margin: 0 auto;
    }
    .timeline-step {
        display: flex;
        align-items: center;
        gap: 2rem;
        background: white;
        border-radius: 16px;
        box-shadow: 0 4px 16px rgba(102, 126, 234, 0.08);
        padding: 2rem 2rem;
        position: relative;
        z-index: 1;
        overflow: hidden;
    }
    .timeline-step:hover {
        box-shadow: 0 8px 32px rgba(102, 126, 234, 0.15);
    }
    .timeline-icon {
        font-size: 2.5rem;
        background: linear-gradient(135deg, #667eea 0%, #fbbf24 100%);
        border-radius: 50%;
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        box-shadow: 0 2px 8px rgba(102, 126, 234, 0.12);
    }
    .timeline-content h3 {
        margin: 0 0 0.5rem 0;
        color: #1f2937;
        font-size: 1.3rem;
        font-weight: 700;
    }
    .timeline-content p {
        color: #6b7280;
        margin: 0;
    }
    .timeline-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 6px;
        height: 100%;
        background: #fbbf24;
        border-radius: 16px 0 0 16px;
        z-index: 0;
        pointer-events: none;
        transition: none;
    }
    .timeline-step:hover .timeline-overlay {
        /* No transition aquí, GSAP lo maneja */
    }
    .timeline-step > *:not(.timeline-overlay) {
        position: relative;
        z-index: 1;
    }
    @media (max-width: 768px) {
        .timeline {
            gap: 2rem;
        }
        .timeline-step {
            flex-direction: column;
            align-items: flex-start;
            padding: 1.5rem 1rem;
        }
        .timeline-icon {
            margin-bottom: 1rem;
        }
    }
</style>