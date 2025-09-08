
# Cypress Login E2E

> React + Vite tabanlı, giriş formu validasyonuna sahip ve Cypress ile uçtan uca (E2E) testleri bulunan örnek proje.

## Özellikler

- Modern React (Hooks) ile yazılmış login formu
- Form validasyonu: Email ve güçlü şifre kontrolü
- Başarılı giriş sonrası yönlendirme ve başarı mesajı
- Tüm akışlar için kapsamlı Cypress E2E testleri
- Vite ile hızlı geliştirme ortamı
- ESLint ile kod kalitesi kontrolü

## Kurulum

```bash
git clone https://github.com/ohhamamcioglu/cypress-login-e2e.git
cd cypress-login-e2e
npm install
```

## Geliştirme Sunucusu

```bash
npm run dev
# Uygulama varsayılan olarak http://localhost:5173 adresinde çalışır
```

## E2E Testleri Çalıştırma

### Cypress GUI ile
```bash
npm run cy:open
# Cypress arayüzünden testleri başlatabilirsiniz
```

### Komut satırında
```bash
npm run cy:run
```

## Proje Yapısı

- `src/components/Login.jsx` — Giriş formu ve validasyon
- `src/components/Success.jsx` — Başarılı giriş sonrası ekran
- `cypress/e2e/login.cy.js` — Tüm uçtan uca testler
- `vite.config.js` — Vite yapılandırması
- `eslint.config.js` — ESLint ayarları (Cypress desteğiyle)

## Test Senaryoları

- Başarılı girişte yönlendirme ve başarı mesajı
- Hatalı email ve/veya şifre ile hata mesajları ve butonun devre dışı olması
- Şartlar kutusu işaretlenmeden girişin engellenmesi

## Kullanılan Teknolojiler

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Cypress](https://www.cypress.io/)
- [ESLint](https://eslint.org/)

## Katkı ve Lisans

Bu proje MIT lisansı ile açık kaynak olarak sunulmuştur. Katkılarınızı bekleriz!
