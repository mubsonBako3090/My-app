// src/app/(auth)/login/page.jsx
import styles from './login.module.css';

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <div className={styles.header}>
          <img src="/images/logo.svg" alt="Hospital Logo" className={styles.logo} />
          <h1 className={styles.title}>Hospital Management System</h1>
          <p className={styles.subtitle}>Sign in to your account</p>
        </div>

        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Email</label>
            <input 
              type="email" 
              className={styles.input}
              placeholder="doctor@hospital.com"
            />
          </div>

          <div className={styles.inputGroup}>
            <div className={styles.passwordHeader}>
              <label className={styles.label}>Password</label>
              <a href="#" className={styles.forgotPassword}>Forgot?</a>
            </div>
            <input 
              type="password" 
              className={styles.input}
              placeholder="••••••••"
            />
          </div>

          <button className={styles.loginButton}>
            Sign In
          </button>
        </form>

        <div className={styles.divider}>Login as</div>

        <div className={styles.roleSelector}>
          <button className={`${styles.roleButton} ${styles.roleButtonActive}`}>
            Admin
          </button>
          <button className={styles.roleButton}>
            Doctor
          </button>
          <button className={styles.roleButton}>
            Receptionist
          </button>
          <button className={styles.roleButton}>
            Patient
          </button>
        </div>

        <p className={styles.footer}>
          Don't have an account?
          <a href="/register" className={styles.registerLink}>
            Register here
          </a>
        </p>
      </div>
    </div>
  );
        }
