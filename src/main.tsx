/* p:0
------------------------------------------------------*/
import { ReactDOM, Provider, PersistGate, store, persistor, App, } from '@/utils/alias';
// axios
import "./services/axios-global.js";
// i18n
import './i18n/config';
// styles
// import "bootstrap/dist/css/bootstrap.min.css";
// import "@styles/global.css";
import './main.scss';


ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>      
      {/* <AppRouter /> */}
      <App />
    </PersistGate>
  </Provider>
);


// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <App />
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>
// );