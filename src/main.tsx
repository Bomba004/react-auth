import { ReactDOM, Provider, PersistGate, AppRouter, store, persistor } from '@/utils/alias';
// import './i18n/config';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <App />
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>
// );

// axios
import "./services/axios-global.js";
// i18n
import './i18n/config';
// styles
// import "bootstrap/dist/css/bootstrap.min.css";
// import "@styles/global.css";
import './index.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppRouter />
    </PersistGate>
  </Provider>
);