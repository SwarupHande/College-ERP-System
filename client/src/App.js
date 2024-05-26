import { useRoutes } from 'react-router-dom';
import router from './router';
import ScrollToTop from 'react-scroll-to-top';
import Top from './Top.js';

export default function App() {
  const content = useRoutes(router);
  return (
    <>
      <Top />
      <ScrollToTop
        smooth
        style={{
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          padding: '5px',
          textAlign: 'center',
          lineHeight: '30px',
          position: 'fixed',
          bottom: '50px',
          right: '40px',
          zIndex: '1000',
        }}
      />
      {content}
    </>
  );
}
