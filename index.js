import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";


const firebaseConfig = {
  apiKey: "AIzaSyD0T8_cljF7OvSWlsPkRCQbBx8B-fdwT18",
  authDomain: "db-dht22-b824a.firebaseapp.com",
  databaseURL: "https://db-dht22-b824a-default-rtdb.firebaseio.com",
  projectId: "db-dht22-b824a",
  storageBucket: "db-dht22-b824a.firebasestorage.app",
  messagingSenderId: "1055314443598",
  appId: "1:1055314443598:web:2ed0c5733c3fcaf742721f",
  measurementId: "G-4G8D6YG9EN"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);

const temperatura = document.getElementById('temperatura');
const umidade = document.getElementById('umidade');

onValue(ref(database, "sensor/temperatura"), (snapshot) => {
    temperatura.textContent = snapshot.val() + "ºC";
});

onValue(ref(database, "sensor/umidade"), (snapshot) => {
    umidade.textContent = snapshot.val() + "%";
});

