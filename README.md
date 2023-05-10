    ###Proiectarea unei aplicații web folosind tehnologii cloud

1.	Introducere

- Această aplicație web are ca scop să adune și să ofere informații despre cărți. Ea va servi drept o resursă valoroasă pentru toți iubitorii de lectură, oferindu-le acces facil la o gamă largă de cărți din diverse domenii și genuri.
- Scopul principal al aplicației este de a furniza utilizatorilor o platformă intuitivă și ușor de utilizat pentru a explora și a descoperi noi cărți. Utilizatorii pot vizualiza cărțile disponibile în biblioteca noastră, având la dispoziție numele cărții, autorul și genul. Ei pot filtra cărțile după gen astfel încât să poată fi vizualizate doar cele relevante pentru gusturile fiecărui cititor.
- Un aspect important al aplicației este posibilitatea de a adăuga noi cărți. Pentru a asigura actualitatea și acuratețea datelor, am integrat în aplicație o bază de date robustă care conține informații detaliate despre cărți, inclusiv titluri, autori și genuri literare. O altă parte a aplicației constă într-o component de chat, cu care utilizatorii pot interacționa.

2.	Descriere tehnologii cloud folosite

- Aplicația web construită utilizează framework-ul Next.js, care este bazat pe limbajul de programare JavaScript. Iar codul sursă al aplicației a fost încărcat pe platforma GitHub, o platformă de gestionare a codului sursă.
- În cadrul aplicației am integrat o bază de date stocată în cloud în MongoDB Atlas. MongoDB este un sistem de gestionare a bazelor de date care oferă suport pentru stocarea datelor în cloud. Pentru vizualizarea și interacțiunea cu baza de date am utilizat interfața grafică MongoDB Compass. În cadrul acesteia am creat baza de date CloudComputing și apoi colecția records, în care am încărcat datele.
- Am configurat conexiunea dintre aplicația NextJS și MongoDB, și API-ul NextJS. Iar apoi am implementat interfața cu utilizatorul, pentru cele 3 pagini: index, insert și chat.
- În pagina principală se regăsesc cărțile din baza de date, care pot fi filtrate pe baza genurilor literare. Am creat butoane prin intermediul cărora se poate naviga în aplicație către celelalte pagini. În pagina de insert este un formular prin care se pot introduce noi cărți în baza de date, folosind un endpoint specific.
- Pagina de chat conține o aplicație de tip chat care se folosește de API-ul ChatGPT pentru a interacționa cu utilizatorii. Conexiunea a fost realizată printr-un API key generat în contul de pe platforma OpenAI. Am utilizat un state și o componentă care gestionează mesajele care vin asincron. Pentru comunicarea cu OpenAI am adăugat un endpoint specific, pe care l-am configurat și testat în Postman.
- Pentru implementarea aplicației am utilizat inițial platforma Vercel, o platformă de hosting și livrare a aplicațiilor web care oferă un mediu de dezvoltare și implementare simplu și scalabil. Dupa conectarea în Vercel, am importat repository-ul git al proiectului și am configurat variabilele de mediu.
- Pe lângă Vercel, am utilizat, de asemenea, platforma de cloud AWS, în cadrul căreia am creat o instanță EC2 (o mașină virtuală ubuntu). Pe această mașină am clonat repository-ul git al proiectului și am utilizat docker pentru implementarea proiectului.

#####################################################################################################################################################################

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
